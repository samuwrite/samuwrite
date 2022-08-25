//
//  NSNotificationName+.swift
//  SamuwriteNative
//
//  Created by Khoa Le on 14/08/2022.
//

import Foundation

extension NSNotification.Name {
    static let openFile = makeName(.openFile)
    static let saveFile = makeName(.saveFile)
    static let saveFileAs = makeName(.saveFileAs)
    static let openUrl = makeName(.openUrl)
    
    private static func makeName(_ interfaceName: JSInterfaceName) -> Notification.Name {
        Notification.Name(interfaceName.rawValue)
    }
}
