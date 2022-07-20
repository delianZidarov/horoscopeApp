import { useRef, useEffect, useState } from "react";
import { Stars } from "./Stars/Stars";

import "./App.css";
function App() {
  const skyContainer = useRef();
  const [isLoaded, setIsLoaded] = useState(false);
  // const stars = new Stars(skyContainer.current);
  // stars.render();
  useEffect(() => {
    const stars = new Stars(document.querySelector("#sky-container"));
    stars.render();
  }, []);
  return (
    <div className="App">
      <div ref={skyContainer} id="sky-container"></div>
    </div>
  );
}

export default App;
