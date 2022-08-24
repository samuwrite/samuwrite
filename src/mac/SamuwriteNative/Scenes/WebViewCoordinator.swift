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
    
    private var contentValueSubscriber: AnyCancellable? = nil
    
    // MARK: - Init
    
    init(webView: WebView) {
        self.webView = webView
        self.delegate = webView
    }
    
    deinit {
        contentValueSubscriber?.cancel()
    }
}

// MARK: - WKScriptMessageHandlerWithReply

extension WebViewCoordinator: WKScriptMessageHandlerWithReply {
    func userContentController(
        _ userContentController: WKUserContentController,
        didReceive message: WKScriptMessage,
        replyHandler: @escaping (Any?, String?) -> Void
    ) {
        switch message.name {
        case JSInterfaceName.openFile:
            contentValueSubscriber = webView
                .viewModel
                .contentValuePublisher
                .receive(on: RunLoop.main)
                .sink(receiveValue: { jsonData in
                    replyHandler(jsonData, nil)
                })
            delegate?.openFile()
        default:
            break
        }
    }
}
