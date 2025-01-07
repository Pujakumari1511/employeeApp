import './employeeList.css'
import { useEffect, useState } from 'react';
import EmployeeCard from "../employeeCard/EmployeeCard";
import useAxiosRequest from "../services/useAxios";

export function EmployeeList() {
    // const [employees, setEmployees] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    const { data, error, loading, read } = useAxiosRequest("http://localhost:3001");

    useEffect(() => {
        read("/employees");
        /* fetch("http://localhost:3001/employees")
        .then((response) => response.json())
        .then((data) => {
            setEmployees(data);
            setIsLoading(false);
        }); */
    },  []);
    return (
        <div> 
            <div className='employeeList employee'>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    data && data.map((employee) =>
                <EmployeeCard 
                    key={employee.id}
                    {...employee}
                />)
            )}
           </div>      
        </div>
    )
}