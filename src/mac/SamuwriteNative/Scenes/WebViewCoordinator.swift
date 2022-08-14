//
//  WebViewCoordinator.swift
//  SamuwriteNative
//
//  Created by Khoa Le on 14/08/2022.
//

import WebKit
import Combine

final class WebViewCoordinator: NSObject, WKNavigationDelegate {
    
    // MARK: - Dependencies
    
    private let webView: WebView
    
    private var delegate: JavaScriptInterfaceDelegate?
    
    // MARK: - Misc
    
    private var cancellables = Set<AnyCancellable>()
    
    // MARK: - Init
    
    init(webView: WebView) {
        self.webView = webView
        self.delegate = webView
    }
    
}

// MARK: - WKScriptMessageHandlerWithReply

extension WebViewCoordinator: WKScriptMessageHandlerWithReply {
    func userContentController(
        _ userContentController: WKUserContentController,
        didReceive message: WKScriptMessage,
        replyHandler: @escaping (Any?, String?) -> Void
    ) {
        webView
            .viewModel
            .contentValuePublisher
            .receive(on: RunLoop.main)
            .sink(receiveValue: { jsonData in
                replyHandler(jsonData, nil)
            })
            .store(in: &cancellables)
        
        switch message.name {
        case JSInterfaceName.openFile:
            delegate?.openFile()
        default:
            break
        }


    }
}
