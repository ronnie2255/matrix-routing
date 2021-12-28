import { useEffect, useState } from "react";
import './App.css';


const App = () => {

  const [map, setMap] = useState({})

  useEffect(() => {
    let map = tt.map({
      key: process.env.REACT_APP_TOM_TOM_API_KEY,
      container: mapElement.current,
  });

  setMap(map);
    
  }, [])

  return (
    <div className="App">
      Hello World!! 
    </div>
  )
}




export default App;
