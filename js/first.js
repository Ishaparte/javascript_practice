const product={
   name:"Pen",
   rating: 4,
   offer: 5,
   price:270,
};

console.log(product);

const profile={
  name: "shradha K",
  posts:195,
  followers:569,
  follwing:4,
  
};

let a=prompt("Enter a Number:");
if(a%5==0){
  console.log("a is multiple of 5");
}
else{
  console.log("a is not multiple of 5");
}

let marks=75;
if(marks>=88 && marks<=100){
  console.log("A");
} else if(marks>=70 && marks<=89){
  console.log("B");
} else if(marks>=60 && marks<=69){
  console.log("C");
} else if(marks>=50 && marks<=59){
  console.log("D");
} else{
  console.log("F");
}

for(let i=0; i<=100;i=i+2){
  console.log(i);
}

//guess the number
for(let i=1;i<=3;i++){
  let a=89;;
  let b=prompt("Enter a number");
  if(a==b){
    alert("You won!");
  }
}
alert("You lose");

let name=prompt("enter your name");
let username="@"+a+a.length;
console.log("Your username is "+username);

//avg of an array:
let array=[85,97,44,37,76,60]
let sum=0;
for(let i=0;i<array.length; i++){
  sum=sum+a[i];
}
let avg=sum/array.length;
console.log(avg);

let d=[250,645,300,900,50];
let e=0;
for(let i=0;i<d.length;i++){
    e=arr[i]*0.1;
    let v=arr[i]-b;
    console.log(v);
}

c=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
c.shift("Bloomberg")
c.splice(1,1,"Ola")
c.push("Amazon")
console.log(c)

// arrow function
const mul=(a,b)=>{
    console.log(a*b);
}
mul(6,7)

// function str(e){
    let c=0;
    for(let i=0;i<e.length;i++){
        if(e[i]=="a" || e[i]=="e" || e[i]=="i" || e[i]=="o" || e[i]=="u" || e[i]=="A" || e[i]=="E" || e[i]=="I"  || e[i]=="O" || e[i]=="U"){
               c++;
        }
    }
    console.log(c);


str("Isha")

// arraw function
let str=(e)=>{
    let c=0;
    for(let i=0;i<e.length;i++){
        if(e[i]=="a" || e[i]=="e" || e[i]=="i" || e[i]=="o" || e[i]=="u" || e[i]=="A" || e[i]=="E" || e[i]=="I"  || e[i]=="O" || e[i]=="U"){
               c++;
        }
    }
    console.log(c);
}
str("Isha")

// forEach loop:
let arr=[1,2,3,4];
arr.forEach(element => {
    console.log(element*element);
});


// filter function:
let std=[90,97,91,67,55]
let h=std.filter((val)=>{
   return val>90;
});
console.log(h);

// reduce function:
let n=prompt("Enter a number:");
let k=0;
for(let i=1;i<=n;i++){
     k=i;
    console.log(k);
}
let m=a.reduce((p,c)=>{
    return p+c;
})

console.log(m);

// DOM:
document.body.style.background="green"
let h1=document.querySelector("h1");
console.dir(h1.innerText);
h1.innerText=h1.innerText+" from Isha";

let b=document.querySelectorAll(".box");
console.log(b[0]);
b[0].innerText="new unique value 1"

let btn= document.createElement("button");
btn.innerText="click Me!";
btn.style.backgroundColor="red";
btn.style.color="white";
let b=document.querySelector("body");
b.prepend(btn);

let p=document.querySelector("p");
p.classList.add("para1");

// /events: for dark and light theam:
let btn=document.querySelector("button");
let body=document.querySelector("body");
btn.addEventListener("click",()=>{
   if(body.style.backgroundColor=="white"){
    body.style.backgroundColor="black";
   }
   else{
    body.style.backgroundColor="white";
   }
})