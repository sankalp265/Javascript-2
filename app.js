console.log("hello world")
let a=20;
let b=24;
function sum(){
    return a+b
}
console.log(sum())
function square(a){
    return a**2
}
console.log(square(5))
let num=10;
if(num%2==0){
    console.log("even")
}else{console.log("odd")}
function largest(a,b){
    if(a>b){
        console.log("a is largest")
    }
    else if(a==b){
        console.log("both numbers are equal")
    }
    else{
        console.log("b is largest")
    }
}
largest(7,4)

// #practice again
function reverse(str){
    let reversed=""
    for(let i=str.length-1;i>=0;i--){
        reversed+=str[i]
    }
    return reversed
}
console.log(reverse("sankalp"))

function check(num){
    if(num>0){
        console.log("positive")
    }
    else if(num<0){
        console.log("negative")
    }
    else if(num==0){console.log("zero")}
        
    
};
check(-0.9)

function factorial(a){
    let num=0;
    for(i=a;i>=1;i--){
        num*=a[i]
    }
    return num
};
console.log(fact(5))

// #practice again
function fact(n){
    if(n==0||n==1){return 1}
    else{
        return n*fact(n-1)
    }
}
console.log(fact(5))


// #practice again
function feren(c){
    return (c*9/5)+32
}
console.log(feren(40));

// #practice again
// function sum(array){
//     let total=0;
//     for(i=0;i<array.length;i++){
//         total+=array[i];
//     }
//     return total;
// };
// let array=[1,2,3,4,5]
// console.log(sum(array));





// ##for loop questions
for(i=1;i<=10;i++){
    console.log(i)
}
for(i=1;i<=20;i++){
    if(i%2==0){
        console.log(i)
    }
};
for(i=1;i<=20;i+=2){
    
    console.log(i)
    
};

function table(num){
    for(i=1;i<=10;i++){
        console.log(num,"X",i,"=",num*i)
    }
    return table
}
table(5)

function add(){
    let total=0;
    for(i=1;i<=10;i++){
        total+=add[i]
        
    }
    return total
}


// #practice again

// let n=10;
// let add=0;
// for(i=1;i<=n;i++){
//     add+=i
// };
// console.log(add)

for(let i=10;i>=1;i--){
    console.log(i)
}

let ari=["a","b","c"]
for(i=0;i<ari.length;i++){
    console.log(ari[i])
};


// #practice again
let ario=[10,20,30,40]
let addition=0;
for(i=0;i<ario.length;i++){
    addition+=ario[i]
};
console.log(addition)



