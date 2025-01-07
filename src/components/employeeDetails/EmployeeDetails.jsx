import { useEffect, useState } from "react";
import useAxiosRequest from "../services/useAxios";
import styles from './EmployeeDetails.module.css';
import Button from "../buttons/Button";
import { useNavigate, useParams } from "react-router-dom";


export const EmployeeDetails = ({}) => {
    const { data: employee, error, loading, read } = useAxiosRequest("http://localhost:3001");
    
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        read(`/employees/${id}`);
    }, [id]);

    const backToEmployeeCards = () => {
        navigate('/employees');
    }
    return (
        <div>
            <h2 className={styles.header}>Employee Details</h2>
            {employee &&    
                <div className={styles.detailContainer}>
                    <div className={styles.employeeHeader}>
                        <img className={styles.employeeImage} src={`https://robohash.org/${id}?set=set5`} alt="employee"/>
                        <div>
                            <div className={styles.employeeName}>
                                <h2>{employee.name}</h2>
                                <p>{employee.status}</p>
                            </div>
                            <p className={styles.employeeRole}>{employee.role}</p>
                            <div>
                                {employee.skills.map((skill, index) => 
                                <span className={styles.employeeSkills} key={`skill-${index}`}>
                                    {skill}
                                </span>)}
                            </div>
                        </div>  
                    </div>
                    <div className={styles.employeeBody}>
                        <table className={styles.tableData}>
                                <tr>
                                    <th>Department</th>
                                    <td>{employee.department}</td>
                                    <th>Work location</th>
                                    <td>{employee.location}</td>
                                </tr>
                                <tr>
                                    <th>Manager</th>
                                    <td>{employee.manager}</td>
                                    <th>Employeement type</th>
                                    <td>{employee.employmentType}</td>
                                </tr>
                                <tr>
                                    <th>Start date</th>
                                    <td>{employee.startdate}</td>
                                    <th>Salary</th>
                                    <td>€{employee.salary}</td>
                                </tr>
                        </table>
                        <h3>Personal information</h3>
                        <p><b>Email: </b>{employee.email}</p>
                        <p><b>Phone: </b>{employee.phone}</p>
                        <p><b>Nationality: </b>{employee.nationality}</p>
                    </div> 
                    <div className={styles.backBtnEmpDetails}>
                        <Button roleColor={"blueButton"} onClick={backToEmployeeCards}>Back</Button>
                    </div>
                    
                </div>
            }
        </div>
    );
};