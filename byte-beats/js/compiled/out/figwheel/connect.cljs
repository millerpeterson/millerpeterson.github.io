(ns figwheel.connect (:require [genetic-byte-beats.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/genetic-byte-beats.core.on-js-reload (apply js/genetic-byte-beats.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'genetic-byte-beats.core/on-js-reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

