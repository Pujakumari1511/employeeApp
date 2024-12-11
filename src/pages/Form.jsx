import { useState } from "react";
import './form.css'
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
                startdate: ""
            })
        })
    }
    
    return (
        <div>

            <form className={"form-container"}  onSubmit={handleSubmit}>
                <div className={"form-row"}>
                    <label>Enter your name:</label><br />
                    <input name="name" value={formData.name} onChange={handleChange} type="text" />
                </div>
               
                <div className={"form-row"}>
                    <label>Role:</label><br />
                    <input name="role" value={formData.role} onChange={handleChange} type="text" />
                </div>
               
                <div className={"form-row"}>
                    <label>Nationlity:</label><br />
                    <input name="nationality" value={formData.nationality} onChange={handleChange} type="text" />
               </div>
               
                <div className={"form-row"}>
                    <label>Department:</label><br />
                    <input name="department" value={formData.department} onChange={handleChange} type="text" />
                </div>
               
                <div className={"form-row"}>
                    <label>Salary:</label><br />
                    <input name="salary" value={formData.salary} onChange={handleChange} type="text" />
                </div>

                <div className={"form-row"}>
                    <label>Start date:</label><br />
                    <input name="startdate" value={formData.startdate} onChange={handleChange} type="date" />
                </div>
                <button className={"submit-button"} type="submit">Submit</button>
                
            </form>   
        </div>
    )
}