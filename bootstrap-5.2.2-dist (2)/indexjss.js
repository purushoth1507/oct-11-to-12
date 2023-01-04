// console.log("hi hello")   


// people=20; 

// human="gokuu"

// console.log(human,people);  

// a= 10; 

// b=20;  

// c=a+b;

// console.log(c);  

// a="2000" 

// console.log(typeof a);

//  let = block scope 

// const = block scope 

// var = global scope  

// {  

// }

//   const x= 10; 

//   const x=20; 

//   console.log(x); 

//  let x=20;

// {
//     let x=10; 
//     console.log(x);

// }


// let x; 

// x=12;

// console.log(x);  


// mobile=[1,2,3,4,5,6,7,89,9] 

// console.log(mobile);  

// goku={name:"goku",age:30,role:true}  

// console.log(goku); 

// let details ={ 

//     firstname:"purushoth",
//     surename:"santhosh",
//     mobile :9878654434, 
//     password:"*****", 

// }

// console.log(details);   

// let details ={ 

//     firstname:"purushoth",
//     surename:"santhosh",
//     mobile :9878654434, 
//     password:"*****", 

// }

// console.log(details.firstname+details.mobile); 

// dot noattaion  

// let details ={ 

//     firstname:"purushoth",
//     surename:"santhosh",
//     mobile :9878654434, 
//     password:"*****", 

// }

// console.log(details["firstname"]);  

// string notation

//array of object  

// const userDetails=[
//    {name:"sai",age:2022-2000,title:"msg"},
//    {name:"ram", age:90, role:"play"}, 
//    {name:"arun",age:30,role:"foghter"}

// ] 

// console.log(userDetails);

// const number =[1,2,3,4,5,6,6,7] 

// console.log(number);   

//    let x; 

//    x=Math.PI
//  x=Math.random()  

// x=Math.trunc(12.77) 

// x=Math.floor(12.77) 

// x=Math.sqrt(200) 
// x-Math.pow(10)
// console.log(x);
// x=Math.pow(2,10)

// console.log(x);  

// x=Math.round(7.6)  

// x=Math.floor(Math.random()*5)+1

// console.log(x);
// let x="ontheway"

// if(x=="ontheway"){
//    console.log("preparing");
// } 

// else{
// console.log("order is not ready");
// }  

// let x=40; 

// console.log(x>10); 


// let x=35; 

// console.log(x<=35); 


// let x=10; 

// console.log(x>=10);  

// let x="10";  


// console.log(x==10);


// let x="10"; 

// console.log(x==="10");  


// let x="10"; 

// console.log(x!==10);  

// comparsion operator   

// logical operator  &&(and) || (or)

// let x=10; 

// let y=10; 
// and operator
// // c=(x>9)&&(y<10) true && false = false 
// // c=(x<9)&&(y<10)  false && false = false  
// // c=(x>9)&&(y>9)  true && true = true 
// // c=(x<9)&&(y>9)  false && true = false
// console.log(c);

// or operator 

// let x=10; 

// let y=10; 

// // c=(x>9)||(y<9)  true || flase= true

// // c=(x<9)||(y>9)  false || true= true  
// c=(x==9)||(y==9)
// console.log(c);  

// let passmark= "35"; 

// if(passmark<35){
//   console.log("pass");
// } 
// else if(passmark<35){
//   console.log("grace mark");
// } 
// else if(passmark==35){
//     console.log("contion false");
// }
// else{
// console.log("fail");
// }

// let x="javascript" 

// if(x==="javascript"){
//     console.log("good");
// }  
// else if(x=="javascript"){
//     console.log("obey the rule")
// }
// else{
//     console.log("bad");
// }

// let variable; 

// // variable=Math.max(1,2,3,4,45,5,6,77,7)  
// // variable=Math.min(1,2,3,4,45,5,6,77,7)   

// variable=Math.floor  


// console.log(variable);   


// function name(){  es5

// }

// ()=>{ es6

// }

// function birthyear(){

//     return birthyear-2000
// }


// let age=birthyear(2022)
// console.log(age);  

//  const age= function (birthyear){

//     return birthyear-2000
//  }

//  const age1=age(2022); 

//  console.log(age1);  

// function fruit(apple,orange){

//     return `${apple},${orange}`
// }

// const juices=fruit(2,3)

// console.log(juices);  




// function calage(birthyear,firstname){
//     const age=2022-birthyear;
//     const ret= 60-age
//     return `am ${firstname} my retired years ${ret}`
// }

// const ag1=calage(2000,"suriya"); 

// console.log(ag1);


// let cal=(birthyear)=>{

//     return  birthyear-2022
// }
// const ag1=cal(2000)
// console.log(ag1);


// for(i=0;i<=30;i++){
// console.log(i);
// }  

// i=0; 

// while(i<=30){
// i++
// console.log(i);

// } 

// let dice=Math.floor(Math.random()*6)+1;

// while(dice!==6){
//     console.log(`you rolled ${dice}`);

//     dice=Math.floor(Math.random()*6)+1; 
//     if(dice==6){
//         console.log("loop end");
//     }
// }   


// let details=[
//     "goku",
//     "vip", 
//      2022-2000,
//      "role", 
//      78
// ]

// for(let i=0;i<details.length;i++){
//     if(typeof details[i]=="string")continue
//     console.log(details[i]);  
// }

// let details=[
//     "goku",
//     "vip",
//     2022-2000,
//     "role"
// ]  

// details.push("npm")

// for(let i=0; i<details.length;i++){

//     console.log(details[i]);  
// }

// let person=["santa","c",23,"gift"]

// person[2]="ffff" 

// console.log(person);


// let details=[1,2,3,4,5,6,7]

// let output= details.map(function(data){

//     return data*6 
// })   

// console.log(output);   


// let details=[1,3,4,5,7,8899,000]

// let output=details.find((value)=>{

//     return value>2 
// })

// console.log(output);  

// let people=[1,2,34,57,8]  

// let result = people.filter((val)=>{

//     return val>2 
// })

// console.log(result);

// let people=[9,4,6,2,5,1,88]

// let result= people.sort((val)=>{

// return val
// })

// console.log(result);     


// let d = new Date()   

// console.log(d);

// let date= d.getDate(); 

// let month=d.getMonth(); 

// let year=d.getFullYear(); 

// let hour=d.getHours();  

// let mins=d.getMinutes();  

// let day=d.getDay(); 

// let adays=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']

// let ms=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']

// document.getElementById("user").innerHTML=`Date:${date}/${ms[month]}/${year}  ${adays[day]} `  

// document.getElementById("time").innerHTML=`Time:${hour}:${mins}`

//  switch(new Date().getDay()){
//    case 0:
//    day="sunday";
//    break 
   
//    case 1: 
//    day="monday";
//    break

//    case 2:
//     day="tuesday";
//     break

//    case 3:
//     day="wednesday";
//     break
    
//     case 4:
//         day="thurday";
//         break 

//         case 5:
//             day="friday";
//             break

//             case 6:
//                 day="saturday";
//                 break        
//  }
   
// document.getElementById("switch").innerHTML=day

// let a1=document.getElementById("d1");  

// let a2=document.getElementById("p1"); 

// let a3=document.getElementById("d2"); 

// let a4=document.getElementById("p2");  

// a1=addEventListener("mouseenter",a)

// a1=addEventListener("mouseleave",b)

// function a(){

//     a3.style.backgroundColor="yellow"
// }

// function b(){
//     a3.style.backgroundColor="tomato"
// }   



//  a= 12.5665645; 

// console.log(a.tofixed(2));

// let a=35  
// a=String(a)  

// let a="name"; 

// a=Boolean(a)

// console.log(typeof a);
  

// let a=["red",'green','blue']

// let b=['apple','orange','grape'] 

// let c= [...a,...b]

// console.log(c);
















































