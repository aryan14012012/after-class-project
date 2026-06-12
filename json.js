let object = {
    name: "aryan",
    age: 14,
    city: "delhi"
};
let str=JSON.stringify(object) 
//console.log(str)

let parse=JSON.parse(str)
//console.log(parse)

 time=setInterval(()=>{

    console.log("heello world")

},2000)

setTimeout(() => {
    clearInterval(time);
},10000)

