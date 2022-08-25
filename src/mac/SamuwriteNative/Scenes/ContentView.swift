//
//  ContentView.swift
//  SamuwriteNative
//
//  Created by Khoa Le on 12/06/2022.
//

import SwiftUI
import Combine

struct ContentView: View {
    @ObservedObject private var viewModel = ViewModel()
    
    var body: some View {
        WebView(environment: .webDebug, viewModel: viewModel)
            .frame(maxWidth: .infinity, maxHeight: .infinity)
            .edgesIgnoringSafeArea(.top)
            .onReceive(.openFile) { _ in handleOpenFile() }
            .onReceive(.saveFile) { handleSaveFile($0) }
            .onReceive(.saveFileAs) { handleSaveFileAs($0) }
            .onReceive(.openUrl) { handleOpenURL($0) }
    }
    
    private func handleOpenFile() {
        let panel = NSOpenPanel()
        panel.allowsMultipleSelection = false
        panel.canChooseDirectories = false
        panel.allowedFileTypes = ["TXT", "txt", "md", "MD"]
        panel.runModal()
        if let chosenFile = panel.url {
            let path = chosenFile.path
            guard let data = FileManager.default.contents(atPath: path) else { return }
            let content = NSString(data: data, encoding: NSUTF8StringEncoding)
            // TODO: Use `Document` object.
            let jsonData: [String: Any] = [
                "path": path,
                "content": content ?? ""
            ]
            viewModel.contentValuePublisher.send(jsonData)
        }
    }
    
    private func handleSaveFile(_ notification: Notification) {
        guard
            let document = notification.object as? Document,
            let path = document.path
        else {
            return
        }
        let filePath = "file://" + path
        if let filePathUrl = URL(string: filePath) {
            do {
                try document.content?.write(to: filePathUrl, atomically: true, encoding: .utf8)
            } catch {
                print("Failed to save file \(error.localizedDescription)")
            }
        }
    }
    
    private func handleSaveFileAs(_ notification: Notification) {
        guard let content = notification.object as? String else { return }
        let savePanel = NSSavePanel()
        savePanel.canCreateDirectories = true
        savePanel.level = .modalPanel
        savePanel.title = "Save file"
        savePanel.allowedFileTypes = ["md", "MD", "TXT", "txt"]
        savePanel.begin {
            if $0 == .OK {
                do {
                    if let pathUrl = savePanel.url {
                        try content.write(to: pathUrl, atomically: true, encoding: .utf8)
                        viewModel.pathValuePublisher.send(pathUrl.path)
                    }
                } catch {
                    print("Failed to save file \(error.localizedDescription)")
                }
            }
        }
    }
    
    private func handleOpenURL(_ notification: Notification) {
        guard let url = notification.object as? NSURL else { return }
        NSWorkspace.shared.open(url as URL)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
