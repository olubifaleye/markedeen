"use client"

//Imports
import { useEffect } from 'react';

const ChatWidget = () => {


  // Assigned variables for colours to be used as inline CSS
  const chatWidgetStyle = {
    '--chat-widget-primary-color': '#1b4571',
    '--chat-widget-active-color': '#1b4571',
    '--chat-widget-bubble-color': '#1b4571',
  };

  useEffect(() => {
    // Load the chat widget script
    const script = document.createElement('script');
    script.src = 'https://widgets.leadconnectorhq.com/loader.js';
    script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
    document.body.appendChild(script);

    return () => {
      // Cleanup when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return(
    <chat-widget
      location-id="lH7L8mQf8l3IXKNQMoMV"
      style={chatWidgetStyle}
      prompt-avatar="https://firebasestorage.googleapis.com/v0/b/highlevel-backend.appspot.com/o/locationPhotos%2FlH7L8mQf8l3IXKNQMoMV%2Fchat-widget-person?alt=media&token=056018fd-90e2-4e9d-b368-9a1abb57009a"
      agency-name="Markedeen"
      agency-website="markedeen.com"
      locale="en-us"
      primary-color="#1b4571"
    ></chat-widget>
  );
};

export default ChatWidget;