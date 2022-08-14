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
            .onOpenFile { handleOpenFile() }
    }
    
    private func handleOpenFile() {
        let panel = NSOpenPanel()
        panel.allowsMultipleSelection = false
        panel.canChooseDirectories = false
        panel.allowedFileTypes = ["TXT", "txt", "md", "MD"]
        panel.runModal()
        if let chosenFile = panel.url {
            let path = chosenFile.path
            let data = FileManager.default.contents(atPath: path)
            let content = NSString(data: data!, encoding: NSUTF8StringEncoding)
            let jsonData: [String: Any] = [
                "path": path,
                "content": content!
            ]
            viewModel.contentValuePublisher.send(jsonData)
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
