import React from 'react';
import {WebView} from 'react-native-webview';
const WebViewComponent = () => {
  return (
    <WebView
      style={{height: 100}}
      source={{uri: 'https://github.com/'}}></WebView>
  );
};

export default WebViewComponent;
