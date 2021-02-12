import React, {useEffect, useState} from 'react';
import './App.css';
import {Client, IOpsSdkAsync} from "@deliveryhero/opsportal";

const portalUrl = 'http://localhost:3000/';

function App() {
  const [sdk, setSdk] = useState<IOpsSdkAsync>();
  const [result, setResult] = useState<string>();

  useEffect(() => {
      const opsClient = new Client(portalUrl);
      opsClient.init().then(baseSdk => {
          baseSdk.setPluginLoaded();
          setSdk(baseSdk);
      }).catch((e: Error) => {
          console.error(e);
      });
  }, []);

  const getToken = () => {
      console.log("GET TOKEN")
      //@ts-ignore
      sdk?.getAccessToken().then(r => setResult(r))
  };

  return (
    <div className="App">
      <h1>Ops Iframe experiments</h1>
      <p><a className="action-link" onClick={getToken}>getAccessToken()</a></p>
      <textarea style={{width: 300, height: 300}}>{result}</textarea>
    </div>
  );
}

export default App;
