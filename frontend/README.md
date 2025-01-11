# Employee App

This project is a simple Employee application built using React.js. It allows users to manage employee data, including adding new employees, viewing employee details, and updating employee information.

## Features

- **User Authentication:** Basic login functionality with a username and password.
- **Employee Management:**
  - **Add Employees:** Create new employee entries with details such as name, role, department, location, and more.
  - **View Employees:** Display a list of employees with key information and interactive cards.
  - **Edit Employees:** Update employee details (role, department, location) directly on the cards.
  - **Promote/Demote Employees:** Change employee status with a dedicated button.
  - **Employee Details:** View detailed information about individual employees.
- **Work Anniversary/Probation Reminders:** Display reminders for employee work anniversaries (5, 10, 15 years) and probation periods.
- **Data Persistence:** Utilizes JSON Server for a mock backend to store and retrieve employee data.
- **Clean Code Practices:**
  - Destructuring for improved code readability.
  - Custom hooks for reusable logic.
  - Modular CSS for better styling management.

## Project Structure

- **components:** Houses reusable UI components (EmployeeList, EmployeeCard, Button, etc.).
- **pages:** Contains individual application pages (Form, Login, ErrorPage, Root, List).
- **hooks:** Stores custom hooks for application-specific logic (e.g., employee status).

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone <repository_url>

   ```

2. **Install dependencies:**

   ```bash
   cd employee-app
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Login Credentials:**
   `puja/1234`

## Weekly Updates

# Week 1:

- Created the basic Vite app structure.
- Developed initial components: EmployeeList and EmployeeCard.
- Implemented basic data passing between components.
- Added "Promote" and "Demote" buttons with basic functionality.

# Week 2:

- Added a simple fake login functionality.
- Implemented a feature to display work anniversary reminders (5, 10, 15 years) and probation reminders.

# Week 3:

- Added an "Edit" button to allow users to modify employee roles, departments, and locations.
- Improved code readability by using destructuring.
- Created a reusable Button component for consistent styling.

# Week 4:

- Organized the project by creating a "pages" folder.
- Implemented separate pages for Form, Login, Error Handling, Root, and List.
- Developed a custom hook for managing employee status.

# Week 5:

- Integrated JSON Server for a mock backend to store employee data.
- Replaced array-based data management with API calls.
- Created a form to add new employees to the list.
- Added a "See Details" button to view individual employee information.
- Migrated to modular CSS for improved styling.
