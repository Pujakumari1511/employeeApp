import EmployeeCard from './EmployeeCard.jsx'

const EmployeeList = ()=> {
    return (

        <div> 
            <h2>I am the list</h2>
            <EmployeeCard name="Akash" initRole="Developer" department="ICT" salary="4000" startdate="14 March"/>
            <EmployeeCard name="Puja" initRole="Teacher" department="ICT" salary="3000" startdate="15 March"/>
            <EmployeeCard name="Neisha" initRole="Boss" department="ICT" salary="5000" startdate="10 June"/>  
        </div>
    )
}


export default EmployeeList;