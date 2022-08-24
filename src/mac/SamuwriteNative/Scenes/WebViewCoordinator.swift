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
    private var pathValueSubscriber: AnyCancellable? = nil
    
    // MARK: - Init
    
    init(webView: WebView) {
        self.webView = webView
        self.delegate = webView
    }
    
    deinit {
        contentValueSubscriber?.cancel()
        pathValueSubscriber?.cancel()
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
        case JSInterfaceName.saveFile:
            guard let document = parseDocument(from: message.body) else { return }
            delegate?.saveFile(with: document)
        case JSInterfaceName.saveFileAs:
            pathValueSubscriber = webView
                .viewModel
                .pathValuePublisher
                .receive(on: RunLoop.main)
                .sink(receiveValue: { path in
                    replyHandler(path, nil)
                })
            guard let document = parseDocument(from: message.body), let content = document.content else { return }
            delegate?.saveFileAs(with: content)
        default:
            break
        }
    }
    
    private func parseDocument(from body: Any) -> Document? {
        guard
            let body = body as? [String: Any],
            let data =  try? JSONSerialization.data(withJSONObject: body),
            let document = try? JSONDecoder().decode(Document.self, from: data)
        else {
            return nil
        }
        return document
    }
}
