import styles from './EmployeeList.module.css'
import { useEffect, useState } from 'react';
import EmployeeCard from "../employeeCard/EmployeeCard";
import useAxios from "../../hooks/useAxios";
import { useScrollToTop } from '../../hooks/useScrollToTop';

export function EmployeeList() {
    const { data: employee, loading, read } = useAxios();  // custom hook for axios
    const [fetchEmployees, setFetchEmployees] = useState(false);  // state for fetching employees

    const reFetchEmployees = () => { 
        setFetchEmployees(!fetchEmployees);
    }

    useEffect(() => {  // get employees
        read("/employees");
    },  [fetchEmployees]);
    useScrollToTop();

    return (
        <div> 
            <div className={styles.employeeList}>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    employee && employee.map((employee) =>
                <EmployeeCard 
                    key={employee.id}
                    employee={employee}
                    reFetchEmployees={reFetchEmployees}
                />)
            )}
           </div>      
        </div>
    )
}