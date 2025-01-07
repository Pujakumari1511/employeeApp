import { useState } from "react";
import styles from './Form.module.css'
import axios from 'axios';

export const Form = ({}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        nationality: "",
        department: "",
        salary: "",
        startdate: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({...prevState, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(formData)
    }

    const addEmployee = (data) => {
        console.log(data);
        axios.post("http://localhost:3001/employees", data, {
            headers: {
              'Content-Type': 'application/json'
            }})
        .then(() => {
            setFormData({
                name: "",
                role: "",
                nationality: "",
                department: "",
                salary: "",
                startdate: "",
                location: "",
                email: "",
                phone: "",
                employmentType: "Full Time",
                skills: [],
                manager: "",
                status: "Active",
            })
        })
    }
    
    return (
        <div>

            <form className={styles.formContainer}  onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                    <label>Enter your name:</label><br />
                    <input name="name" value={formData.name} onChange={handleChange} type="text" />
                </div>
               
                <div className={styles.formRow}>
                    <label>Role:</label><br />
                    <input name="role" value={formData.role} onChange={handleChange} type="text" />
                </div>
               
                <div className={styles.formRow}>
                    <label>Nationlity:</label><br />
                    <input name="nationality" value={formData.nationality} onChange={handleChange} type="text" />
               </div>
               
                <div className={styles.formRow}>
                    <label>Department:</label><br />
                    <input name="department" value={formData.department} onChange={handleChange} type="text" />
                </div>
               
                <div className={styles.formRow}>
                    <label>Salary:</label><br />
                    <input name="salary" value={formData.salary} onChange={handleChange} type="text" />
                </div>

                <div className={styles.formRow}>
                    <label>Start date:</label><br />
                    <input name="startdate" value={formData.startdate} onChange={handleChange} type="date" />
                </div>

                <div className={styles.formRow}>
                    <label>Location:</label><br />
                    <input name="location" value={formData.location} onChange={handleChange} type="text" />
                </div>

                <div className={styles.formRow}>
                    <label>Email:</label><br />
                    <input name="email" value={formData.email} onChange={handleChange} type="email" required/>
                </div>

                <div className={styles.formRow}>
                    <label>Phone no:</label><br />
                    <input name="phone" value={formData.phone} onChange={handleChange} type="tel" required/>
                </div>

                <div className={styles.formRow}>
                    <label>Employement Type:</label><br />
                    <select name="employmentType" value={formData.employmentType} onChange={handleChange} required>
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Contract">Contract</option>
                        <option value="Intern">Intern</option>
                    </select>
                </div>

                <div className={styles.formRow}>
                    <label>Skills:</label><br />
                    <input name="skills" value={formData.skills} onChange={handleChange} type="text" required/>
                </div>

                <div className={styles.formRow}>
                    <label>Manager:</label><br />
                    <input name="manager" value={formData.manager} onChange={handleChange} type="text" />
                </div>

                <div className={styles.formRow}>
                    <label>Status:</label><br />
                    <select name="status" value={formData.status} onChange={handleChange} required>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="On Leave">On Leave</option>
                    </select>
                </div>
                <button className={styles.submitButton} type="submit">Submit</button>
                
            </form>   
        </div>
    )
}