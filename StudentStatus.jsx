
function StudentStatus() {
    const name = "Darshan";
    const isActive =false;
    const age = 22;

    return (
        <div>
            <h1>Student Name: {name}</h1>

            <h2 className={isActive ? "active" : "inactive"}>
                Status: {isActive ? "Active" : "Inactive"}
            </h2>

            <h3>Age: {age}</h3>

            <input
                type="text"
                maxLength={age + 10+10}
                placeholder="Enter your details"
            />

            <button disabled={!isActive}>
                Submit
            </button>
        </div>
    )
}

export default StudentStatus;
