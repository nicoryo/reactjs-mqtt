import React from 'react';

import { Connector } from 'mqtt-react-hooks';
import Status from './Status';
import Publish from './Publish';

export default function App() {
  return (
    // <Connector brokerUrl="ws://test.mosquitto.org:8881">
    <div >
      <Status />
      <Publish />
    </div>

    // </Connector>
  );
}
