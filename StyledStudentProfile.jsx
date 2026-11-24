
const bg = {
    backgroundColor: "yellow",
    padding: "20px",
    borderRadius: "10px"
};

function StyledStudentProfile() {
    const name = "Darshan D S";
    const course = "Information Science and Engineering";
    const semester = 7;
    const isActive = false;

    const headingStyle = {
        color: "blue",
        fontSize: "28px"
    };

    return (
        <div style={bg}>
            <h1 style={headingStyle}>
                Student Profile
            </h1>

            <h2 style={{ color: "blue" }}>
                {name}
            </h2>

            <p style={{ color: "gray" }}>
                {course}
            </p>

            <p>Semester: {semester}</p>

            <p style={{
                color: isActive ? "green" : "red"
            }}>
                {isActive ? "Active" : "Inactive"}
            </p>
        </div>
    );
}

export default StyledStudentProfile;
