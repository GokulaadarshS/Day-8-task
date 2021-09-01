class movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    movie_title(){
        return 'the movie name is ${this.title}';
    }
    movie_studio(){
        return 'the studio name is ${this.title}';
    }
    movie_rating(){
        return 'the rating is ${this.title}';
    }
}
const master_obj = new movie("master","xaviour","PG13")
console.log(master_obj.rating)
const bigil_obj = new movie("bigil","ags","R")
console.log(bigil_obj.title)