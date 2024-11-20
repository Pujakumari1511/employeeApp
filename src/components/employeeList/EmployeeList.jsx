import './employeeList.css'

import employees from "../data/employeesData";
import EmployeeCard from "../employeeCard/EmployeeCard";

export default function EmployeeList() {
    return (
        <div> 
            <div className='employeeList employee'>
                {employees.map((employee) => 
                <EmployeeCard 
                key={employee.id}
                {...employee}
              /*   name={employee.name}
                nationlity={employee.nationlity}
                initRole={employee.role}
                department={employee.department} 
                salary={employee.salary} 
                startdate={employee.startdate} */
                />)}
            </div>      
        </div>
    )
}