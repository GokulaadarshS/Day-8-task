class person{
    constructor(name,age,gender,qualification){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.qualification = qualification;
    }
    person_name(){
        return 'the person name is ${this.name}';
    }
    person_age(){
        return 'the person age is ${this.age}';
    }
    person_gender(){
        return 'gender : ${this.gender}';
    }
    person_qualification(){
        return 'the person qualification is ${this.qualification}'
    }
}
const gokul_obj = new person("gokul","23","male","M.tech")
console.log(gokul_obj)
const mohana_obj = new person("mohana","23","female","B.tech")
console.log(mohana_obj)