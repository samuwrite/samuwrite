//
//  View+NotificationCenter.swift
//  SamuwriteNative
//
//  Created by Khoa Le on 14/08/2022.
//

import SwiftUI

extension View {
    func onNotification(
        _ notificationName: Notification.Name,
        perform action: @escaping () -> Void
    ) -> some View {
        onReceive(NotificationCenter.default.publisher(
            for: notificationName
        )) { _ in
            action()
        }
    }
    
    func onOpenFile(
        perform action: @escaping () -> Void
    ) -> some View {
        onNotification(
            .openFile,
            perform: action
        )
    }
}
