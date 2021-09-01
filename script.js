class movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    movie_title(){
        return `the movie name is ${this.title}`;
    }
    movie_studio(){
        return `the studio name is ${this.studio}`;
    }
    movie_rating(){
        return `the rating is ${this.rating}`;
    }
}
const master_obj = new movie("master","xaviour","PG13")
console.log(master_obj.movie_rating())
const bigil_obj = new movie("bigil","ags","R")
console.log(bigil_obj.movie_title())
const casino_obj = new movie("Casino Royale","Eon Productions","PG13")
console.log(casino_obj.movie_studio())
