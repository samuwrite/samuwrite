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
        guard let window = self.window else { return }
        let startingPoint = event.locationInWindow
        // Track events until the mouse is up (in which we interpret as a click), or a drag starts (in which we pass off to the Window Server to perform the drag)
        var shouldCallSuper = false
        
        window.trackEvents(
            matching: [.leftMouseDragged, .leftMouseUp],
            timeout:NSEvent.foreverDuration,
            mode: RunLoop.Mode.default
        ) { event, stop in
            guard let event = event else { return }
            switch event.type {
            case .leftMouseUp:
                // Stop on a mouse up; post it back into the queue and call super so it can handle it
                shouldCallSuper = true
                NSApp.postEvent(event, atStart: false)
                stop.pointee = true
            case .leftMouseDragged:
                // track mouse drags, and if more than a few points are moved we start a drag
                let currentPoint = event.locationInWindow
                guard let appHeight = NSApp.mainWindow?.frame.height else { return }
                let threshold = appHeight - currentPoint.y
                if (threshold < 50) {
                    if (abs(currentPoint.x - startingPoint.x) >= 5 || abs(currentPoint.y - startingPoint.y) >= 5) {
                        stop.pointee = true
                        window.performDrag(with: event)
                    }
                } else {
                    shouldCallSuper = true
                    stop.pointee = true
                }
            default:
                break
            }
        }
        
        if (shouldCallSuper) {
            super.mouseDown(with: event)
        }
    }
}
