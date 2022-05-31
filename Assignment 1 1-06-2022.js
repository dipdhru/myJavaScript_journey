let student = {
    name : "Chinu",
    class : "IX",
    section :"F",
    subject : ["science","math","english","sanskrit","social_science"],
    assignedTeacher : {
    math : "Mr. Sudhir Sahu",
    science : "Mrs Poonam Arya",
    english : "Mrs Isha Gupta",
    social_science : "Mrs. Sakti Shobha",
    sanskrit : "Mr. Akshay Lal Mishra",
    classTeacher : "Mr. Akshay Lal Mishra"
    }
  }
  
 const { assignedTeacher: {classTeacher : mentor} } = student;
 console.log(mentor)