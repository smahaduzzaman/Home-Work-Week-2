import "./App.css";
import { useState } from "react";
import Home from "./components/Home";

function App() {
  const [theme, setTheme] = useState("light");

  // const handleChange = (params) => {
  //   // setSelectedValue(event.target.value);
  //   // console.log(event.target.value);
  //   // setTheme(event.target.value);
  //   console.log(params);
  //   setTheme(params);
  // };

  return (
    // <div className={`bg-primary ${theme}`}>
    //   <button onClick={() => setTheme("light")} className="mr-4">
    //     Light
    //   </button>
    //   <button onClick={() => setTheme("dark")} className="mr-4">
    //     Dark
    //   </button>
    //   <button onClick={() => setTheme("midnight")} className="mr-4">
    //     Midnight
    //   </button>
    // </div>

    // <div className={`bg-primary ${theme}`}>
    //   <select onChange={handleChange}>
    //     <option value="light">Light</option>
    //     <option value="dark">Dark</option>
    //     <option value="midnight">Midnight</option>
    //   </select>
    // </div>

    <div>
      <Home></Home>
    </div>
  );
}

export default App;

// value={selectedValue}

{
  /* <button
className="bg-primary-500"
onClick={() => {
  setTheme(theme === "light" ? "dark" : "light");
}}
>
Switch Theme
</button> */
}
