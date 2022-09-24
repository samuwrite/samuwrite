//
//  AppDelegate.swift
//  SamuwriteNative
//
//  Created by Khoa Le on 15/09/2022.
//

import SwiftUI

final class AppDelegate: NSObject, NSApplicationDelegate {
    func application(_ application: NSApplication, open urls: [URL]) {
        assert(Thread.isMainThread)
        print("Filename: \(urls)")
    }
}
