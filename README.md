# Finance Client

A web application for our college finance office to upload bank statements, analyze the data, and display graphs based on batch-wise or filtered views. The app also includes features like printing no due forms for students, checking student fees, and allowing admins to correct mistakes.

## Technologies Used
- **React JS**
- **Material UI**
  
## Contributors

- **Nagarjuna**
- **Revanth**
- **Puneeth**
- **Chethana**


## Home Page

The Home Page provides an overview of the college finance office, showcasing different fee structures and a brief description of the office's purpose and services. It includes a carousel that highlights key financial services and announcements.

### Key Features:
- **Carousels** displaying important finance-related announcements and updates.
- **Fee Structures** categorized by batch and other criteria.
- **Finance Office Overview** with a brief description of services offered.

## Login Page

The Login Page provides secure access for admins, specifically for the Director and the Finance Office Head. This page allows only these two roles to log in and edit details, while other users are restricted from making modifications.

### Key Features:
- **Single Login for Admins**: Both the Director and Finance Office Head can log in using the same page.
- **User Authentication**: Ensures that only authorized personnel (Director and Finance Office Head) can access and modify sensitive information.
- **Role-Based Access**: Only the Director and Finance Office Head have permissions to edit details; other users have read-only access.

### Design Elements:
- Simple and user-friendly interface for quick login.
- Input fields for username and password.

![Login Page Example](https://github.com/revanthkumarJ/Finance-Client/blob/main/images/Finance_Login.png)  

## Upload Excel Page

The Upload Excel Page allows Finance Office staff to upload various Excel files containing important details, such as student information, hostel fees, loan details, tuition fees, bank MSI, scholarships, and more. This functionality is crucial for managing and maintaining up-to-date records in the Finance Client application.

### Key Features:
- **Multiple File Uploads**: Staff can upload different types of Excel files, including:
  - Student Details
  - Hostel Fee Details
  - Loan Details
  - Tuition Fee Details
  - Bank MSI
  - Scholarship Information
- **Data Storage**: Uploaded Excel files are processed and the data is stored in the application's database for future access and analysis.
- **User-Friendly Interface**: Designed for ease of use, allowing staff to quickly upload necessary documents without technical complications.


![Upload Excel Page Example](https://github.com/revanthkumarJ/Finance-Client/blob/main/images/Finance_UploadExcel.png)  



## Student Fee Page

The Student Fee Page allows users to search for student records and view detailed fee information. This page is essential for tracking student payments and scholarship details.

### Key Features:
- **Search Functionality**: 
  - A search bar enables users to quickly find a student by their ID.
  - If the student is not found, a snackbar notification appears stating "Student not found."

- **Detailed Student Information**:
  - Upon finding a student, the following details are displayed in a table:
    - **Student Details**
    - **Tuition Fee Installments**
    - **Hostel Fee Installments**
    - **Other Fee Installments** (e.g., Fine, Rent, Exam fees)
    - **Scholarship Details**

- **Visual Data Representation**:
  - Graphs showing year-wise payments to provide a visual representation of the student's payment history.

 **Student Search Bar**  
   ![Student Search Bar Example](https://github.com/revanthkumarJ/Finance-Client/blob/main/images/Finance_Student1.png)  
  
 **Tuition Fee Installments**  
   ![Tuition Fee Example](https://github.com/revanthkumarJ/Finance-Client/blob/main/images/Finance_Student2.png)  

 **Hostel Fee and Other Fees**  
   ![Hostel and Other Fees Example](https://github.com/revanthkumarJ/Finance-Client/blob/main/images/Finance_Student3.png)  

 **Scholarship Details**  
   ![Scholarship Example](https://github.com/revanthkumarJ/Finance-Client/blob/main/images/Finance_Student4.png)  

 **Graphs**  
   ![Graphs Example](https://github.com/revanthkumarJ/Finance-Client/blob/main/images/Finance_StudentGraph.png)  


## Bank Due Details Page

The Bank Due Details Page allows users to search for payment records by entering a receipt number. This functionality is crucial for tracking payments and ensuring accurate financial records.

### Key Features:
- **Search Functionality**:
  - A search bar enables users to enter a receipt number to find related payment details.
  - If the receipt number is not found, a snackbar notification appears stating "Due number not found."

- **Detailed Payment Information**:
  - Upon finding a valid receipt number, the following details are displayed:
    - **ID of the Payer**
    - **Details of Fees Paid**


![Bank Due Details Example](https://github.com/revanthkumarJ/Finance-Client/blob/main/images/Finance_Due.png)  


## Add New Due Number Page

The Add New Due Number Page is designed for admin use only. This page allows administrators to manually assign amounts paid by individuals with invalid or missing student IDs to the correct students. This ensures that any misplaced payments are properly recorded in the system.

### Key Features:
- **Admin-Only Access**: 
  - This page is accessible exclusively to the Director and Finance Office Head, ensuring secure and authorized updates.

- **Add/Update Due Number**:
  - If a payment was made by a person whose ID does not exist in the system, admins can enter the correct details to associate the payment with the right student.
  - Required fields for updating a due number:
    - **Amount Paid**
    - **Due Number**
    - **Date of Payment**
    - **Proof of Payment** (such as a director's signature or other verification documents)



![Add New Due Number Example](https://github.com/revanthkumarJ/Finance-Client/blob/main/images/Finance_AddDue.png)  


## Edit Student Page

The Edit Student Page allows admins to modify existing student information, ensuring that the student records remain accurate and up-to-date. This page is accessible only to authorized admins.

### Key Features:
- **Admin-Only Access**: 
  - Only the Director and Finance Office Head have access to edit student details, ensuring data integrity and security.
  
- **Editable Student Details**:
  - The following student details can be modified:
    - **Name**
    - **Father's Name**
    - **Batch**
    - **Gender**
    - **Category**
    - Any other relevant student information


![Edit Student Page Example](https://github.com/revanthkumarJ/Finance-Client/blob/main/images/Finance_EditStudent.png)  

## Insights Page

The Insights Page provides a comprehensive overview of financial data through interactive graphs, allowing admins to visualize various aspects such as batch-based and category-based details. This page enables a deeper understanding of fee payments, scholarships, and other financial metrics.

### Key Features:

#### Graph 1: Batch-Based Details
- **Buttons for Data Selection**:
  - **Total Fee Paid**
  - **Scholarships**
  - **Loans**
  - **Tuition Fee**
  - **Hostel Fee**
  - **Remaining Balance**
- Based on the selected button, the corresponding graph is displayed, showing details for the entire batch.

#### Graph 2: Category-Based Details
- **Batch Selection**:
  - A dropdown menu allows the user to select a specific batch for detailed analysis.
  
- **Buttons for Data Selection**:
  - **Gender**: Displays the distribution of students based on gender.
  - **Total People**: Shows the total number of students in the selected batch.
  - **Total Fee Paid**: Displays the total fees paid by students in the selected batch.
  - **Remaining Balance**: Shows the outstanding balance for students.
  - **Hostel Fee**: Displays the hostel fee details for the selected batch.
  - **Tuition Fee**: Displays the tuition fee details for the selected batch.
  - **Loan**: Shows the loan details for students in the selected batch.

### Design Elements:
- Interactive buttons and dropdowns for selecting different data points.
- Dynamic graphs that update based on user selections, providing detailed batch-based and category-based insights.

![Insights page 1](https://github.com/revanthkumarJ/Finance-Client/blob/main/images/Finance_Insights1.png)  
![Insights page 2](https://github.com/revanthkumarJ/Finance-Client/blob/main/images/Finance_Insights2.png)  


## See All Added Dues Page

The See All Added Dues Page displays a comprehensive list of all dues added by admins. This page allows users to view detailed records, including proof of payment, due numbers, and amounts.

### Key Features:

- **Table View**:
  - Displays all dues added by admins in a tabular format with the following columns:
    - **Student ID**
    - **Due Number**
    - **Amount**
    - **Proof** (e.g., a clickable image)

- **Search Functionality**:
  - A search bar allows users to filter the table by entering either a student ID or due number.
  - Instant filtering makes it easy to find specific dues records.

- **Proof Image View**:
  - Clicking on the proof image provides a larger, clearer view of the proof, such as a director’s signature or payment slip.


![See All Added Dues Page 1](https://github.com/revanthkumarJ/Finance-Client/blob/main/images/Finance_SeeAllAddedDues.png)
![See All Added Dues Page 1](https://github.com/revanthkumarJ/Finance-Client/blob/main/images/Finance_AllAddedDuesFiltering.png)
![See All Added Dues Page 1](https://github.com/revanthkumarJ/Finance-Client/blob/main/images/Finance_AllAddedDuesSeeingProof.png)
