//
//  View+NotificationCenter.swift
//  SamuwriteNative
//
//  Created by Khoa Le on 14/08/2022.
//

import SwiftUI

extension View {
    func onReceive(
        _ notificationName: Notification.Name,
        object: AnyObject? = nil,
        perform action: @escaping (Notification) -> Void
    ) -> some View {
        onReceive(
            NotificationCenter.default.publisher(
                for: notificationName,
                object: object),
            perform: action
        )
    }
}
