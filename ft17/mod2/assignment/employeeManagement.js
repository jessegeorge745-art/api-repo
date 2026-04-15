 //A company needs a simple system to manage their employees' information. Your job is to create a basic system that can store, view, update, and remove employee data.
 const employees = [
    `James baya,software engineer, dob: 1990-01-01, salary: 50000`,
    `Sarah Johnson, project manager, dob: 1985-05-15, salary: 75000`,
    `Michael Smith, data analyst, dob: 1992-09-30, salary: 60000`,
    `Emily Davis, UX designer, dob: 1988-03-22, salary: 55000`,
    `David Wilson, marketing specialist, dob: 1995-07-10, salary: 45000`,
    `Jessica Brown, HR manager, dob: 1983-11-05, salary: 70000`,
    `Daniel Lee, sales representative, dob: 1991-02-14, salary: 48000`,
    `Olivia Taylor, financial analyst, dob: 1987-08-25, salary: 65000`,
    `Matthew Anderson, customer support, dob: 1993-12-12, salary: 40000`
 ];
 console.log(employees);
 employees.push(`Sophia Juma, machine learning engineer, dob: 1194-04-18, salary: 80000`);
 console.log(employees);
 employees.unshift(`Mwajuma Kamau, clean energy specialist, dob:2005-02-18`);
 console.log(employees);
 employees.splice (2, 3);
 