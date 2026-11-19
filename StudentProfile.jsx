function StudentProfile(){

    let name="Drshan D S ";
    let age=22;
    let gender="Male";
    let semester=7;
    let course ="Bachelor of Engineering in Information Science and Engineering";
    let college="Siddaganga Institute of technology Tumkur ";

    function getCourse(){
        return course;
    }

    return (
        <div>
            <h1>Studnet Name: {name}</h1>
            <h1>Studnet age: {age}</h1>
            <h2>Gender :{gender}</h2>
            <h2>current Semester: {semester}</h2>
            <h4>Course: {getCourse()}</h4>
            <p>College: {college}</p>
        </div>
    )
}

export default StudentProfile;