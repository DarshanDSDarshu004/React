
function EmployeeId() {
    const employeeName = "Rahul Sharma";
    const employeeId = "EMP101";
    const designation = "Software Engineer";
    const department = "Engineering";
    const experience = 2;
    const email = "rahul@company.com";
    const isActive = true;
    const profileImage = "/employee.png";

    const cardStyle = {
        backgroundColor: "lightyellow",
        padding: "20px",
        borderRadius: "10px"
    };

    const statusStyle = {
        color: isActive ? "green" : "red"
    };

    return (
        <div style={cardStyle}>
            <img src={profileImage} alt="Employee Profile" />

            <h1>{employeeName}</h1>
            <h2>{designation}</h2>

            <p>
                Employee ID: <strong>{employeeId}</strong>
            </p>

            <p>Department: {department}</p>
            <p>Experience: {experience} Years</p>
            <p>Email: {email}</p>

            <h3
                className={isActive ? "active" : "inactive"}
                style={statusStyle}
            >
                {isActive ? "Active" : "Inactive"}
            </h3>

            <p>
                {isActive
                    ? "Welcome to the team!"
                    : "Account Disabled"}
            </p>
        </div>
    );
}

export default EmployeeId;
