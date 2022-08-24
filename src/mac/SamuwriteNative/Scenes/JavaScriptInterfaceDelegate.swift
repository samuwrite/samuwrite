//
//  JavaScriptInterface.swift
//  SamuwriteNative
//
//  Created by Khoa Le on 13/08/2022.
//

import Foundation

protocol JavaScriptInterfaceDelegate {
    func openFile()
    func saveFile(with document: Document)
    func saveFileAs(with content: String)
}
