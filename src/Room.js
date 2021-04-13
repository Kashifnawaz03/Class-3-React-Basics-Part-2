import React, { useState } from 'react';



function Room() {
    let [isLit, setLit] = useState(false);
    let [age, setAge] = useState(40);

    function updateLit() {
        console.log("Button Clicked");
        setLit(!isLit);
    }   
   
  return (
    <div>
    The room is {isLit? "lit" : "dark"}
    <br/>
    Age : {age}
    <br/><br/>
    <button onClick = {updateLit}>Toggle Light</button>
    <br/><br/>
    <button onClick = { ()=> {
        console.log("age Button Clicked");
        setAge(++age);
    }}>Increase Age</button>
    
    </div>
  );
}

export default Room;