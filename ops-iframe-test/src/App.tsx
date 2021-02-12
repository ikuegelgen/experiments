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
      if (sdk) {
          //@ts-ignore
          sdk.getAccessToken().then(r => {
              console.log(r)
              setResult(r)
          })
      }
  };

    const pushGtmDataLayer = () => {
        const dataLayer = {foo: "bar"};
        if (sdk) {
            //@ts-ignore
            sdk.pushGtmDataLayer(dataLayer).then(() => {
                setResult(JSON.stringify(dataLayer))
            })
        }
    };

    const pushGtmDataLayerCustom = () => {
        const dataLayer = {foo: "another"};
        const layerName = "IframeLayer";
        if (sdk) {
            //@ts-ignore
            sdk.pushGtmDataLayer(dataLayer, layerName).then(() => {
                setResult(layerName + ": " + JSON.stringify(dataLayer))
            })
        }
    };

  return (
    <div className="App">
      <h1>Ops Iframe experiments</h1>
      <p><a className="action-link" onClick={getToken}>getAccessToken()</a></p>
      <p><a className="action-link" onClick={pushGtmDataLayer}>pushGtmDataLayer()</a></p>
      <p><a className="action-link" onClick={pushGtmDataLayerCustom}>pushGtmDataLayer() with custom layername</a></p>
      <textarea style={{width: 300, height: 300}} value={result} />
    </div>
  );
}

export default App;
