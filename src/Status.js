import React, {useState} from 'react';
// import { useState } from 'mqtt-react-hooks';

// export default function Status() {
//   /* Message structure:
//    *  topic: string
//    *  message: string
//    */
//   const { client } = useMqttState();

//   function handleClick(message) {
//     console.log(client);
//     return client.publish('esp32/led', message);
//   }

//   return (
//     // <h1>{`Status: ${connectionStatus}`}</h1>  
//     <button type="button" onClick={() => handleClick('false')}>
//       Disable led
//     </button>
    
//   );
// }


export default function Status () {
  var mqtt = require("mqtt");
  var client = mqtt.connect("wss://test.mosquitto.org:8081");
  const [message, setMessage] = useState(null)
  client.subscribe("nicoryo/test");
  client.on("connect", ()=>{
    console.log('connect')
  });

  client.on("message", function (topic, message) {
    // message is Buffer
    console.log(message.toString());
    setMessage(message.toString());
  });

  // client.end();
  return <h1>{`Received: ${message}`}</h1>;
}
