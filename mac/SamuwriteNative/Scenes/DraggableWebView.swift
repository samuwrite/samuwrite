//
//  WebView.swift
//  SamuwriteNative
//
//  Created by Khoa Le on 30/08/2022.
//

import WebKit
import AppKit

final class DraggableWebView: WKWebView {
    override func mouseDown(with event: NSEvent) {
        guard let window = event.window else { return }
        let top = window.frame.height - event.locationInWindow.y;
        if top < 50 {
            window.performDrag(with: event)
        }
        super.mouseDown(with: event)
    }
}
