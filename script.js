let car =  [
    {
    model: "Malibu",
    year: 2017 ,
    color:"white" ,
    horse_forse: 100 ,
    wheels : 4 , 
    beaten:false ,
    owner: true, 
    price: 32000 
} , 
 
{
    model: "Jentra",
    year: 2020,
    color:"white" ,
    horse_forse: 102,
    wheels : 4 , 
    beaten:false ,
    owner: true, 
    price: 16000
} , 
{
    model: "Matiz",
    year: 2023 ,
    color:"white" ,
    horse_forse: 10 ,
    wheels : 4 , 
    beaten:false ,
    owner: true, 
    price: 6500
} , 
{
    model: "Damaz",
    year: 2020 ,
    color:"white" ,
    horse_forse: 100 ,
    wheels : 4 , 
    beaten:false ,
    owner: true, 
    price: 5000
} , 
{
    model: "Spark",
    year: 2000 ,
    color:"white" ,
    horse_forse: 100 ,
    wheels : 4 , 
    beaten:false ,
    owner: true, 
    price: 13000
} , 
]   
 
let sale = +prompt("sale")

let sales = car.filter(item =>  item.price = item.price / 100 * sale -item.price)
console.log(sales);

// let ask =+prompt("Max price")
// car.filter(item=> {
//     if (item.price<=ask) {
//         console.log(item);
//     } else {
//         console.log("dont have");
//     }
     
// })  

// let car_2 =  [
//     {
//     model: "Malibu",
//     year: 2017 ,
//     color:"white" ,
//     horse_forse: 100 ,
//     wheels : 4 , 
//     beaten:false ,
//     owner: true, 
//     price: 32000 
// } , 
 
// {
//     model: "Jentra",
//     year: 2020,
//     color:"white" ,
//     horse_forse: 102,
//     wheels : 4 , 
//     beaten:false ,
//     owner: true, 
//     price: 16000
// } , 
// {
//     model: "Matiz",
//     year: 2023 ,
//     color:"white" ,
//     horse_forse: 10 ,
//     wheels : 4 , 
//     beaten:false ,
//     owner: true, 
//     price: 6500
// } , 
// {
//     model: "Damaz",
//     year: 2020 ,
//     color:"white" ,
//     horse_forse: 100 ,
//     wheels : 4 , 
//     beaten:false ,
//     owner: true, 
//     price: 5000
// } , 
// {
//     model: "Spark",
//     year: 2000 ,
//     color:"white" ,
//     horse_forse: 100 ,
//     wheels : 4 , 
//     beaten:false ,
//     owner: true, 
//     price: 13000
// } , 
// ]    
// car_2.filter(item=> {
//     if (item.year>= 2020) {
//         console.log(item);
//     } else {

//     }
// }) 






// let obj =  {
//     name:"Roma",
//     age: 17,
//     hobbies: ["Footbal","Basketball"] ,
//     living_city : "Samarqand"



// let obj_2 = 

//  {
//     name:"Daler",
//     age: 21,
//     hobbies: ["Films","Basketball"] ,
//     living_city : "Nigeria" 

// } 

//  let new_1 = Object.assign ({} , obj , {obj_2} )  
 

// let key = Object.keys(new_1) 
  

// let value = Object.values(new_1) 

//  let all = key.concat(value);

//  let type = {
//     string: [],
//     number:[],
//     object:[],
//     boolean:[]
//  } 

//  all.filter(item=> {
//     if (typeof(item) === 'string' ) {
//         type.string.push(item)
//     } else  ( typeof(item) === 'number') {
//         type.number.push(item)
//     }
//  }) 
//  console.log(type);


                   


