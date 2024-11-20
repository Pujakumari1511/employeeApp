import { useState } from "react";
import './employeeCard.css';
import Button from "../buttons/Button";
import Form from "../Form/Form";

const MessageForStartDate = ({startdate}) => {
  const currentDate = new Date();
  const startDate = new Date(startdate);
  const yearPassed = currentDate.getFullYear() - startDate.getFullYear();

  if(currentDate.getFullYear() == startDate.getFullYear()){
    const monthPassed = currentDate.getMonth() - startDate.getMonth();
    if(monthPassed < 6){
      return (
        <p>Schedule probation review.</p>
      )
    }
  } else if(yearPassed % 5 == 0){
    return (
      <p>Schedule recognition meeting.</p>
    )
  }
  return (<></>)
  
}

const EmployeeCard = ({id, name, nationlity, role, department, salary, startdate}) => {
  const [employeeRole, setEmployeeRole] = useState(role);
  const [toggleFormEdit, setToggleFormEdit] = useState(false);
 
  const clickHandler = () => {
    
    if(role === "Team Leader"){
        setEmployeeRole(role);
    } else {
        setEmployeeRole("Team Leader");
    } 
  }
  
  return (
    <div className="employeeCard">
      <div className={"card-details"}>
        <div>
          <img className={"card-image"} src={`https://robohash.org/${id}?set=set5`}/>
        </div>
        <div>
          <p>Name: {name}</p>
          <p>Nationality: {nationlity}</p>
          <p>Role: {role}</p>
          <p>Department: {department}</p>
          <p>Salary: {salary}</p>
        </div>
      </div>
      <p>Start date: {startdate}</p>
      <MessageForStartDate startdate= {startdate}/>
      <Button onClick={clickHandler} text={role === "Team Leader" ? "Demote" : "Promote ⭐"} 
      roleColor={role === "Team Leader" ? "primary" : "secondary"}/>

      <Button onClick={() => setToggleFormEdit(!toggleFormEdit)} text={toggleFormEdit ? "Save" : "Edit"} />
      <Form role={role} department={department} location={location} />
    </div>
  );
};

export default EmployeeCard;
