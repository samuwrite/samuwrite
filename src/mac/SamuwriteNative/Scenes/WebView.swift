//
//  WebViewController.swift
//  SamuwriteNative
//
//  Created by Khoa Le on 12/06/2022.
//

import WebKit
import SwiftUI
import Combine
import Cocoa

struct WebView: NSViewRepresentable {
    var environment: Environment
    
    @ObservedObject var viewModel: ViewModel
    
    func makeNSView(context: Context) -> WKWebView {
        let configuration = WKWebViewConfiguration()
        configuration.defaultWebpagePreferences.allowsContentJavaScript = true
        configuration.preferences.setValue(true, forKey: "allowFileAccessFromFileURLs")
        configuration.preferences.javaScriptEnabled = true
        
        let webView = WKWebView(frame: .zero, configuration: configuration)
        webView.allowsBackForwardNavigationGestures = true
        injectTo(configuration.userContentController)
        return webView
    }
    
    func makeCoordinator() -> WebViewCoordinator {
        WebViewCoordinator(webView: self)
    }
    
    func updateNSView(_ nsView: WKWebView, context: Context) {
        switch environment {
        case .prod:
            if let url = Bundle.main.url(forResource: "LocalSite", withExtension: "html") {
                nsView.loadFileURL(url, allowingReadAccessTo: url.deletingLastPathComponent())
            }
        case .webDebug:
            if let url = URL(string: "http://localhost:1234") {
                nsView.load(URLRequest(url: url))
            }
        }
    }
    
    private func injectTo(_ userContentController: WKUserContentController) {
        JSInterfaceName.interfaces().forEach {
            userContentController.addScriptMessageHandler(
                self.makeCoordinator(),
                contentWorld: .page,
                name: $0)
        }
    }
}

// MARK: - JavaScriptInterfaceDelegate

extension WebView: JavaScriptInterfaceDelegate {
    func openFile() {
        post(name: .openFile)
    }
    
    func saveFile(with document: Document) {
        post(name: .saveFile, object: document)
    }
    
    func saveFileAs(with content: String) {
        post(name: .saveFileAs, object: content)
    }
    
    private func post(name: NSNotification.Name, object: Any? = nil) {
        NotificationCenter.default.post(name: name, object: object)
    }
}
