import React, { useEffect, useState } from 'react';
import Switch from "../Switch";


function Data() {
  const [value, setValue] = useState(false);
  let mode = value ? 'Light' : 'Dark';

  useEffect(() => {
   value ? document.body.classList = 'Dark' : document.body.classList = 'Light';
  })
  return (
    <div className={`Data${mode}`}>
        
      <Switch isOn={value} onColor="#EF476F" handleToggle={() => setValue(!value)}/>
    </div>
  );

  
}

export default Data;