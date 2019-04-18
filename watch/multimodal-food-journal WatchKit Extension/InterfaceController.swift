//
//  InterfaceController.swift
//  multimodal-food-journal WatchKit Extension
//
//  Created by Daniel Epstein on 4/15/19.
//  Copyright © 2019 Daniel Epstein. All rights reserved.
//

import WatchKit
import Foundation

extension CharacterSet {
    static let urlQueryValueAllowed: CharacterSet = {
        let generalDelimitersToEncode = ":#[]@" // does not include "?" or "/" due to RFC 3986 - Section 3.4
        let subDelimitersToEncode = "!$&'()*+,;="
        
        var allowed = CharacterSet.urlQueryAllowed
        allowed.remove(charactersIn: "\(generalDelimitersToEncode)\(subDelimitersToEncode)")
        return allowed
    }()
}



class InterfaceController: WKInterfaceController {
    @IBOutlet weak var logButton: WKInterfaceButton!
    @IBOutlet weak var textLabel: WKInterfaceLabel!
    var user:String? = nil;

    override func awake(withContext context: Any?) {
        super.awake(withContext: context)
        
        // Configure interface objects here.
    }
    
    override func willActivate() {
        // This method is called when watch view controller is about to be visible to user
        super.willActivate()
    }
    
    override func didDeactivate() {
        // This method is called when watch view controller is no longer visible
        super.didDeactivate()
    }

    @IBAction func logButtonAction() {
        if user == nil {
            user = "Anna";
            textLabel.setText("Welcome, " + user! + "!")
            logButton.setTitle("Log a food")
        } else {
            sendToFirebase(food: "foooooood")
        }
        
//        presentTextInputController(withSuggestions: (nil), allowedInputMode: WKTextInputMode.plain){ (arr: [Any]?) in
//            print(arr ?? "Not find");
//        }
    }
    
    func sendToFirebase(food:String) {
        let url = URL(string: "https://firestore.googleapis.com/v1beta1/projects/food-journal-6d639/databases/(default)/documents/" + user! + "?key=AIzaSyAblxF7GcUGxUlxaDHh-13bzeHJ-6ucw_4")!;
        var request = URLRequest(url: url);
        request.cachePolicy = URLRequest.CachePolicy.reloadIgnoringLocalCacheData
        request.httpMethod = "POST"
        request.addValue("application/json", forHTTPHeaderField: "Content-Type")
        request.addValue("application/json", forHTTPHeaderField: "Accept")
        // prepare json data
        let date = Date()
        let formatter = ISO8601DateFormatter()
        formatter.formatOptions.insert(.withFractionalSeconds)
        let json: [String: Any] = ["fields": [
            "contextLogged": ["booleanValue": false],
            "date": ["timestampValue": formatter.string(from: date)],
            "platform": ["stringValue": "watch"],
            "entries": ["arrayValue": ["values": ["mapValue": ["fields": ["entry": ["stringValue": food], "modality": ["stringValue": "voice"]]]]]]
            ]]
        
        let jsonData = try? JSONSerialization.data(withJSONObject: json, options: .prettyPrinted)
        request.httpBody = jsonData
        
        let task = URLSession.shared.dataTask(with: request) { data, response, error in
            guard let data = data, error == nil else {
                print(error?.localizedDescription ?? "No data")
                return
            }
            let responseJSON = try? JSONSerialization.jsonObject(with: data, options: [])
            if let responseJSON = responseJSON as? [String: Any] {
                print(responseJSON)
            }
        }
        
        task.resume()
    }
}
