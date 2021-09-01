class uber{
    constructor(kms,price,time){
        this.kms = kms;
        this.price = price;
        this.time = time;
    }
    uber_kms(){
        return 'total kilometer ${this.kms}';
    }
    uber_price(){
        return 'amount per kilometer ${this.price}';
    }
    uber_time(){
        return'mins per kilometer ${this.time}';
    }
}
const obj = new uber("22","50","6")
const total_price = ((obj.kms)*(obj.price));
const total_time = ((obj.kms)*(obj.time));
console.log("price:",total_price,"mins:",total_time);
