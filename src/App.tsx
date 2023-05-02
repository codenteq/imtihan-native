import React from 'react';
import { WebView } from 'react-native-webview';

function App() {
    return (
        <WebView
            source={{ uri: 'https://open.imtihan.tech' }}
            style={{ flex: 1 }}
        />
    );
}

export default App;