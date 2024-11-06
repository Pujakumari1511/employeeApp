import EmployeeCard from '../employeeCard/EmployeeCard.jsx'
import employees from '../data/employee.js'
import './employeeList.css'

const EmployeeList = ()=> {

    return (

        <div> 
            <h2>I am the list</h2>
            <div className='employeeList'>
                {employees.map((employee) => 
                <EmployeeCard 
                name={employee.name}
                nationlity={employee.nationlity}
                initRole={employee.initRole}
                department={employee.department} 
                salary={employee.salary} 
                startdate={employee.startdate}
                />)}
            </div>
              
        </div>
    )
}


export default EmployeeList;