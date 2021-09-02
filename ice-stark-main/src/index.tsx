import React, {useState} from "react";
import ReactDom from "react-dom";
import { AppRouter, AppRoute } from "@ice/stark";
import "./index.css";
function App(){
  const [visible, setVisible] = useState(false);
  return <div>
    <AppRouter>
      <AppRoute
        title="micro-1"
        url={[
          "http://localhost:8081/main.js"
        ]}
      />
    </AppRouter>
  </div>;
}
ReactDom.render(<App/>,document.querySelector("#app"));