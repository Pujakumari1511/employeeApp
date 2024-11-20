# reflect on what you have practiced

- Create a EmployeeApp project
- Connect it to GitHub

# Organize the src folder

- Create component folder, and inside component folder, create EmployeeCard and EmployeeList folder.
- Create css file and jsx file inside EmployeeCard and EmployeeList

# Add props to EmployeeCard

- Pass name, role, department, salary, Nationality, startdate
- Add useState in EmployeeCard to manage the role, initializing it with role.

# Make a function of clickHandler:

- If the role is "Team Leader", change it back to the role.
- If the role is not "Team Leader", set it to "Team Leader"
- Connect the clickhandler function to the button's click.

# Week 2

## Create employees data array

- Create 10 employees data array

# Display employees list and add login functionality

1. Import the employee array into your EmployeesList component.
2. Map over the array to display each employees details in the EmployeesList component.
3. Ensure that the list displays correctly with no errors or warnings in the console.
4. Implement a fake “Log In” functionality:
   - By default, show a "Log In" button and a message to log in to see the list.
   - After logging in, display the list of employees.
   - Toggle the button text between "Log In" and "Log Out" based on login state.

# Add "Team Lead" promotion functionality

1. Modify the "Team Lead" functionality in each EmployeeCard.
2. Display a star icon (⭐) on the employees card only if the employee is promoted to "Team Lead."
3. Use conditional rendering for the promotion button
   - Display "Promote to Team Lead" if the employee is not a Team Lead.
   - Display "Demote from Team Lead" if the employee is already a Team Lead.

# Display years worked and add reminders

1. In EmployeeCard, calculate and display years worked based on each employee's startDate.
2. Add reminders based on the years worked:
   - Anniversary Reminder: If yearsWorked is exactly 5, 10, 15, etc., display a celebration icon and a subtle message, "Schedule recognition meeting."
   - Probation Reminder: If yearsWorked is less than 0.5 (6 months), display a notification icon and a message, "Schedule probation review."
3. Make sure your data includes:
   - Employee with 5, 10, or 15 years of service for testing the recognition reminder.
   - Employee with less than 6 months of service for testing the probation review reminder.
