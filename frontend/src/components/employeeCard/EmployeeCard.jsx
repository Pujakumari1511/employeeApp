import { useState } from "react";
import Button from "../buttons/Button"
import useEmployeeStatus from "../../hooks/useEmployeeStatus";
import { useNavigate } from "react-router-dom";
import styles from './EmployeeCard.module.css';
import useAxios from "../../hooks/useAxios";

const Icon = ({icon, showIcon, message}) => {  //icon for recognition year and probation period
  return (
    showIcon &&  
    <div className={styles.icon}>
        <p className={styles.iconMessage}>{message}</p>
        <span>{icon}</span>
    </div> 
  )
}

const EmployeeCard = ({employee, reFetchEmployees}) => {  // employee card component

  const navigate = useNavigate(); 

  const [isEditingForm, setIsEditingForm] = useState(false);  // state for editing car details
  const [formData, setFormData] = useState({
    role: employee.role,
    department: employee.department,
    location: employee.location,
  });

  const handleChange = (e) => {  // handle change for editing card details
    const {name, value} = e.target;
    setFormData((prevState) => ({...prevState, [name]: value}))
  }

  const { yearPassed, monthPassed, isProbationPeriod, isRecognitionYear } = useEmployeeStatus(employee.startdate);  // custom hook for employee status

  const {update} = useAxios();  // custom hook for axios

  const handleSubmit = () => {  // handle submit for editing card details
    if(isEditingForm){
      update(`/employees/${employee.id}`, formData)
      .then(() => reFetchEmployees());
    }
    setIsEditingForm(!isEditingForm);
  }

  const handleSeeDetails = () => {  // see details for employee
    navigate(`/employee/${employee.id}`);
  }

 
  const handlePromote = () => {   // promote or demote team leader
    update(`/employees/${employee.id}`, {teamLeader: !employee.teamLeader})
    .then(() => reFetchEmployees());
  };
  
  const departmentColor = {
    "web development" : "#FFD700",
    "game development": "#db08ea",
    "ict": "#72e394",
    "mobile app": "#3911ef",
  }
  return (
    <div className={styles.employeeCard} style={{borderTop: `5px solid ${departmentColor[employee.department.toLowerCase()] || "red"}`}}>
      <div className={styles.cardHeader}>
          <div className={styles.headerTitle}>
            <h2>{employee.name}</h2>
            <Icon icon={"⭐"} showIcon={employee.teamLeader} message={"Team Leader"} />
          </div>
          <div>
            <Icon icon={"🎉"} showIcon={isRecognitionYear} message={"Schedule recognition meeting"} />
            <Icon icon={"⏰"} showIcon={isProbationPeriod} message={"Schedule probation meeting"} />
          </div>
      </div>
      <hr />
      <div className={styles.cardBody}>
        <div>
          <p className={styles.role}>{isEditingForm 
              ? <input className={styles.editCardDetails} name="role" value={formData.role} onChange={handleChange} />
              : employee.role}
          </p>
          <p>
            {isEditingForm
              ? <input className={styles.editCardDetails} name="department" value={formData.department} onChange={handleChange} /> 
              : employee.department}
          </p>
          <p>
            {isEditingForm
              ? <input className={styles.editCardDetails} name="location" value={formData.location} onChange={handleChange} /> 
              : employee.location}
          </p>
          <p>
            {`${yearPassed === 0 ? monthPassed : yearPassed} ${yearPassed === 0 ? "months" : "years"} experience (${employee.startdate})`}
          </p>
        </div>
        <div className={""}>
          <img className={styles.cardImage} src={`https://robohash.org/${employee.id}?set=set5`}/>
        </div> 
      </div>
      <div className={styles.cardFooter}>
          <Button onClick={handlePromote} 
          roleColor={"blueButton"}>{employee.teamLeader ? "Demote" : "Promote"}</Button> 

          <Button onClick={handleSeeDetails} roleColor={"underline"}>See details</Button>

          <Button onClick={handleSubmit} roleColor={"editCardBtn"}>{isEditingForm ? "Save" : "Edit"}</Button>
        </div> 
    </div>
  );
};

export default EmployeeCard;
