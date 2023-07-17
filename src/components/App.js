
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {

  const [greet, setGreet] = useState("");


  return (
    <div>
        {/* Do not remove the main div */}
        <label >Enter your name:</label><br />
        <input onChange={(event) => setGreet("Hello "+event.target.value+"!")} type="text" />
        <p>{greet}</p>
    </div>
  )
}

export default App
