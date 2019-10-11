import React, {useState, useEffect} from 'react';


const useDarkMode =()=>{
    const [darkMode, setDarkMode] = useState();

    useEffect(() => {
        if(darkMode){
            document.querySelector(".container").classList.add("dark-mode");
        } else {
            document.querySelector(".container").classList.remove("dark-mode");
        }
    }, [darkMode])
    
    return [darkMode, setDarkMode]
} 


const ModeSwitch = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };
    return (
      <nav className="navbar">
        <div className="dark-mode__toggle">
            <button  onClick={toggleMode}
                className={darkMode ? 'toggle toggled' : 'toggle'}>
                ClickMe
            </button>
        </div>
      </nav>
    );
};
  
export default ModeSwitch;

