import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Demo() {

  const {unityProvider} = useUnityContext({
    loaderUrl: "clearframe.co/build/ClearFrame-WebGL-Demo.loader.js",
    dataUrl: "clearframe.co/build/ClearFrame-WebGL-Demo.data",
    frameworkUrl: "clearframe.co/build/ClearFrame-WebGL-Demo.framework.js",
    codeUrl: "clearframe.co/build/ClearFrame-WebGL-Demo.wasm",
  });

  return (
    <div>
      <Unity unityProvider={unityProvider} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
