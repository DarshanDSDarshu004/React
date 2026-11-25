const name="Darshan D  S ";
 const course="Bachelor of Engineering";
const branch   ="Information Science and Engineering";
const college="Siddaganag Institute of Technology";
const semester=7;
const college_address=" Dr Shree Shree Shivakumar Mahaswamini Road Tumkur 572103";

function StudentDetails(){
    return(
        <> 
        <h1>Student name :{name}</h1>
        <h1>Curse:{course}</h1>
        <h1>Branch:{branch}</h1>
        <h1> semester:{semester}</h1>
        <h1>College :{college}</h1>
        <h1>College Address:{college_address}</h1>

        </>

    );
}

export default StudentDetails;