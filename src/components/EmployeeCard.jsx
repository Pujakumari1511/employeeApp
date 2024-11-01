import { useState } from "react";

const EmployeeCard = (props) => {
  const [role, setRole] = useState(props.initRole);

  const clickHandler = () => {
    console.log("I was clicked");
    
    if(role === "Team Leader"){
        setRole(props.initRole);
    } else {
        setRole("Team Leader");
    } 
  }

  return (
    <div>
      <h2>I am the card</h2>
      <p>Name:{props.name}</p>
      
      <p>Role:{role}</p>
      <p>Department:{props.department}</p>
      <p>Salary:{props.salary}</p>
      <p>Start date:{props.startdate}</p>
      <button onClick={clickHandler}>Pramote</button>
    </div>
  );
};

export default EmployeeCard;
