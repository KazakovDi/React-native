import React from 'react';
import {WebView} from 'react-native-webview';
const WebViewComponent = () => {
  return (
    <WebView
      style={{height: 100}}
      scrollEnabled={true}
      setDisplayZoomControls={true}
      showsHorizontalScrollIndicator={true}
      contentMode="mobile"
      source={{uri: 'https://github.com/'}}></WebView>
  );
};

export default WebViewComponent;
