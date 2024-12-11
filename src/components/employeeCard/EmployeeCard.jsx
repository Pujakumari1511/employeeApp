import { useState } from "react";
import './employeeCard.css';
import Button from "../buttons/Button";

const MessageForStartDate = ({startdate}) => {
  const currentDate = new Date();
  const startDate = new Date(startdate);
  const yearPassed = currentDate.getFullYear() - startDate.getFullYear();

  if(currentDate.getFullYear() == startDate.getFullYear()){
    const monthPassed = currentDate.getMonth() - startDate.getMonth();
    if(monthPassed < 6){
      return (
        <p className={"meeting-text"}>Schedule probation review</p>
      )
    }
  } else if(yearPassed % 5 == 0){
    return (
      <p className="meeting-text">Schedule recognition meeting</p>
    )
  }
  return (<></>)
  
}

const EmployeeCard = ({id, name, nationality, role, department, salary, startdate}) => {
  const [employeeRole, setEmployeeRole] = useState(role);
  const [toggleFormEdit, setToggleFormEdit] = useState(false);

  const [departmentInput, setDepartmentInput] = useState(department);
  const handleDepartmentChange = (e) => setDepartmentInput(e.target.value);

 
  const clickHandler = () => { 
    if(role === "Team Leader" || employeeRole === 'Team Leader'){
        setEmployeeRole(role);
    } else {
        setEmployeeRole("Team Leader");
    } 
  }
  
  return (
    <div className="employeeCard">
      <h3 className="card-holder-name">{`${name}${employeeRole === 'Team Leader' ? '  ⭐' : ''}`}</h3>
      <hr></hr>
      <div className={"card-details"}>
        <div className={"card-image-container"}>
          <img className={"card-image"} src={`https://robohash.org/${id}?set=set5`}/>
        </div>
        <div>
          <p>Nationality: {nationality}</p>
          <p>Role: {employeeRole}</p>
          <p>Department: {toggleFormEdit ? <input value={departmentInput} onChange={handleDepartmentChange}></input> : departmentInput}</p>
          <p>Salary: {salary}</p>
        </div>
      </div>
      <p>{startdate}</p>

      <div className={"promote-edit"}>
        <Button onClick={clickHandler} text={employeeRole === "Team Leader" ? "Demote" : "Promote"} 
        roleColor={employeeRole === "Team Leader" ? "demote" : "promote"}/>

        <Button onClick={() => setToggleFormEdit(!toggleFormEdit)} text={toggleFormEdit ? "Save" : "Edit"} />
      </div>
     
      <MessageForStartDate startdate= {startdate}/>
    </div>
  );
};

export default EmployeeCard;
