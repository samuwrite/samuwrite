//
//  ViewModel.swift
//  SamuwriteNative
//
//  Created by Khoa Le on 14/08/2022.
//

import Foundation
import Combine

final class ViewModel: ObservableObject {
    var contentValuePublisher = PassthroughSubject<[String: Any], ErrorHandling>()
    var pathValuePublisher = PassthroughSubject<String, Never>()
}
