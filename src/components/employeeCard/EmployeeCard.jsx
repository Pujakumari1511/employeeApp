import { useState } from "react";
import Button from "../buttons/Button"
import useEmployeeStatus from "../services/useEmployeeStatus";
import { useNavigate } from "react-router-dom";
import styles from './EmployeeCard.module.css';

const Icon = ({icon, showIcon, message}) => {
  return (
    showIcon &&  
    <div className={styles.icon}>
        <p className={styles.iconMessage}>{message}</p>
        <span>{icon}</span>
    </div>
    
  )
}

const EmployeeCard = ({id, name, role, department, location, startdate}) => {
  const [employeeRole, setEmployeeRole] = useState(role);
  const [toggleFormEdit, setToggleFormEdit] = useState(false);

  const navigate = useNavigate(); 

  const [departmentInput, setDepartmentInput] = useState(department);
  const handleDepartmentChange = (e) => setDepartmentInput(e.target.value);

  const [roleInput, setRoleInput] = useState(role);
  const handleRoleChange = (e) => setRoleInput(e.target.value);

  const [locationInput, setLocationInput] = useState(location);
  const handleLocationChange = (e) => setLocationInput(e.target.value);

  const { yearPassed, monthPassed, startDate, isProbationPeriod, isRecognitionYear } = useEmployeeStatus(startdate);

  const handleSubmit = () => {
    setToggleFormEdit(!toggleFormEdit)
    setEmployeeRole(roleInput);
  }

  const handleSeeDetails = () => {
    navigate(`/employee/${id}`);
  }

 
  const clickHandler = () => { 
    if(role === "Team Leader" || employeeRole === 'Team Leader'){
        setEmployeeRole(role);
    } else {
        setEmployeeRole("Team Leader");
    } 
  }
  
  return (
    <div className={styles.employeeCard}>
      <div className={styles.cardHeader}>
          <h2>{name}  <span>{employeeRole === "Team Leader" ? "⭐" : ""}</span></h2>
          <div>
            <Icon icon={"🎉"} showIcon={isRecognitionYear} message={"Schedule recognition meeting"} />
            <Icon icon={"⏰"} showIcon={isProbationPeriod} message={"Schedule probation meeting"} />
          </div>
          
          
      </div>
      <hr />
      <div className={styles.cardBody}>
        <div>
          <p className={styles.role}>{toggleFormEdit 
              ? <input className={styles.editCardDetails} value={roleInput} onChange={handleRoleChange} />
              : roleInput}
          </p>
          <p>
            {toggleFormEdit
              ? <input className={styles.editCardDetails} value={departmentInput} onChange={handleDepartmentChange} /> 
              : departmentInput}
          </p>
          <p>
            {toggleFormEdit
              ? <input className={styles.editCardDetails} value={location} onChange={handleLocationChange} /> 
              : location}
          </p>
          <p>
            {`${yearPassed === 0 ? monthPassed : yearPassed} ${yearPassed === 0 ? "months" : "years"} experience (${startdate})`}
          </p>
        </div>
        <div className={""}>
          <img className={styles.cardImage} src={`https://robohash.org/${id}?set=set5`}/>
        </div> 
      </div>
      <div className={styles.cardFooter}>
          <Button onClick={clickHandler} 
          roleColor={"blueButton"}>{employeeRole === "Team Leader" ? "Demote" : "Promote"}</Button>

          <Button onClick={handleSeeDetails} roleColor={"underline"}>See details</Button>

          <Button onClick={handleSubmit} roleColor={"editCardBtn"}>{toggleFormEdit ? "Save" : "Edit"}</Button>
        </div> 



   

     
    </div>
  );
};

export default EmployeeCard;
