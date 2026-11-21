
function StudentProfile() {
    const name = "Darshan D S";
    const age = 22;
    const gender = "Male";
    const semester = 7;
    const course = "Bachelor of Engineering in Information Science and Engineering";
    const college = "Siddaganga Institute of Technology, Tumkur";
    const email = "ds.darshan004@gmail.com";

    // Dynamic image source
    const imageUrl = "/student.png";

    // Dynamic CSS class
    const headingClass = "student-name";
    const color="red";

    return (
        <div>
            <h1 className={headingClass} style={{ color: color }}>
                Student Name: {name}
            </h1>
            <h2>Student Age: {age}</h2>
            <h2>Gender: {gender}</h2>
            <h2>Current Semester: {semester}</h2>
            <h3>Course: {course}</h3>
            <h3>Email: {email}</h3>

            <img src={imageUrl} alt="Student Profile" />

            <p>College: {college}</p>
        </div>
    );
}

export default StudentProfile;
