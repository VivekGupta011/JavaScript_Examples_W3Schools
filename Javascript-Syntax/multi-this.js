let obj={
    firstname:"vivek",
    lastname:'gupta',
    id:45867,
    fullname:function(){
        return this.firstname + this.lastname;
        console.log(this);
    },
    address:{
        street:"123,dhanani nagar",
        city:"boisar",
        getAddress:function(){
            console.log(this);
            console.log(this.street);
            console.log(this.firstname);
        }
    }

}
console.log(obj.firstname);
console.log(obj.lastname);
console.log(obj.fullname());
console.log(obj.this);
console.log("this is 'this is keyword' " +this);

// calling object inside object
obj.address.getAddress();