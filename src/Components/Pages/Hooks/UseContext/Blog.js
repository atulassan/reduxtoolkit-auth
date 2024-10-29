import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('white');

function Blog() {
  const [theme, setTheme] = useState('white');

 const updateParentTheme = (theme)=> {
    setTheme(theme);
 }

  /*const providerValue = React.useMemo(() => ({
    theme, setTheme,
}), [theme]);*/

  return (
    <ThemeContext.Provider value={{theme, updateParentTheme}}>
      <ComponentA />
      <ComponentB />
    </ThemeContext.Provider>
  );
}

function ComponentA() {
  console.log(useContext(ThemeContext));
  const { theme, updateParentTheme } = useContext(ThemeContext);
  const updateTheme = (theme)=> {
    updateParentTheme(theme);
   }
  return (
    <div>
       <h1>Component A- <small>click will change button color Yellow</small></h1>
       <button onClick={()=>updateTheme('yellow')} style={{backgroundColor:`${theme}`}}>{theme}</button>
    </div>
  );
}

function ComponentB() {
    const { theme, updateParentTheme } = useContext(ThemeContext);
  // Use the theme value here
    
   const updateTheme = (theme)=> {
    updateParentTheme(theme);
   }

  return (
    <div>
       <h1>Component B - <small>click will change button color blue</small></h1>
      <button onClick={()=>updateTheme('blue')} style={{backgroundColor:`${theme}`}}>{theme}</button>
    </div>
  );
}

export default Blog;