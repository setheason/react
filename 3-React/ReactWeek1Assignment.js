class Student {
    constructor (name, email, community) {
        this.name = name;
        this.email = email;
        this.community;
    }

    
};

class Bootcamp {
    constructor (name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(studentToRegister){
        const check = this.students.filter(student => student.email === studentToRegister.email)
        if (check.length != 0) {
            console.log("Student is already registered")
        } else {

            this.students.push(studentToRegister);
            
            console.log("Registering email")
        }

        return this.students;
        

    }

   
}