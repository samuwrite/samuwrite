//
//  WebViewCoordinator.swift
//  SamuwriteNative
//
//  Created by Khoa Le on 14/08/2022.
//

import WebKit

final class WebViewCoordinator: NSObject, WKNavigationDelegate {
    private let webView: WebView
    
    var delegate: JavaScriptInterfaceDelegate?
    
    init(webView: WebView) {
        self.webView = webView
        self.delegate = webView
    }
    
}

extension WebViewCoordinator: WKScriptMessageHandler {
    func userContentController(
        _ userContentController: WKUserContentController,
        didReceive message: WKScriptMessage
    ) {
        switch message.name {
        case JSInterfaceName.openFile:
            if let body = message.body as? String {
                print(body)
                delegate?.openFile()
            }
        default:
            break
        }
    }
}
