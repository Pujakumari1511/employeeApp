import './employeeList.css'
import { useEffect, useState } from 'react';
import EmployeeCard from "../employeeCard/EmployeeCard";

export function EmployeeList() {
    const [employees, setEmployees] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3001/employees")
        .then((response) => response.json())
        .then((data) => {
            setEmployees(data);
            setIsLoading(false);
        });
    },  []);
    return (
        <div> 
            <div className='employeeList employee'>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                employees.map((employee) =>
                <EmployeeCard 
                    key={employee.id}
                    {...employee}
                />)
            )}
           </div>      
        </div>
    )
}