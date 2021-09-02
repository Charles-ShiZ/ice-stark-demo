import React, {useState} from "react";
import ReactDOM from "react-dom";
import { isInIcestark, getMountNode, registerAppEnter, registerAppLeave } from "@ice/stark-app";
import "./index.css";
function App(){
  const [visible, setVisible] = useState(false);
  return <div>
    微应用更新
  </div>;
}

// export function mount(){
//   ReactDOM.render(<App/>, getMountNode());
// }
// export function unmount(){
//   ReactDOM.unmountComponentAtNode(getMountNode());
// }
// if(!isInIcestark()){
//   ReactDOM.render(<App/>,document.querySelector("#app"));
// }

if (isInIcestark()) {
  const mountNode = getMountNode();
  registerAppEnter(() => {
    ReactDOM.render(<App/>, mountNode);
  });
  // make sure the unmount event is triggered
  registerAppLeave(() => {
    ReactDOM.unmountComponentAtNode(mountNode);
  });
} else {
  ReactDOM.render(<App/>,document.querySelector("#app"));
}