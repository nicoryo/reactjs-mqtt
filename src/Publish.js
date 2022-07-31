import React from 'react';

// import { useSubscription } from 'mqtt-react-hooks';

export default function Publish () {
  var mqtt = require("mqtt");
  var client = mqtt.connect("wss://test.mosquitto.org:8081");

  function publishing (msg){
    client.publish("nicoryo/test", msg);
  }
  client.on("connect", ()=>{
    console.log('connect')
  });

  return (
    <button type="button" onClick={() => publishing('Hello MQTT')}>
       pub
     </button>
  );
}