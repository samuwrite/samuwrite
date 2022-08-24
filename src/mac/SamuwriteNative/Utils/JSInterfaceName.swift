//
//  JSInterfaceName.swift
//  SamuwriteNative
//
//  Created by Khoa Le on 14/08/2022.
//

import Foundation

struct JSInterfaceName {
    static let openFile = "openFile"
    static let saveFile = "saveFile"
    static let saveFileAs = "saveFileAs"
    
    static func interfaces() -> [String] {
        [
            openFile,
            saveFile,
            saveFileAs
        ]
    }
}
