//1.
var a = "word";
var b = 15;

function checkint (c){
      if (typeof(c) === 'number') {
          console.log("The given variable is a integer")
      }else{
          console.log("The given variable is not a integer")
      }
  }
checkint(a);
checkint(b);


//2.
const str="welcome";
var l=str.length;
var str2="";
for(var i=l;i>0;i--){
     str2+=str[i-1]
 }
console.log(str2)

//3.
const str="This is string upper case";
let words=str.split(" ");
for(var i=0;i<words.length;i++){
   words[i]=words[i][0].toUpperCase()+words[i].substr(1);
}
const w=words.join(" ");
console.log(w)

//4.
for(var i=0;i<=15;i++){
    if(i%2===0){
        console.log("the number "+ i + " is even");
    }else{
        console.log("the number "+ i + " is odd");
    }
}

//5.
let arr=['Green','Red','Blue','Orange','Yellow'];
arr.pop()
arr.pop()
console.log(arr)
arr.push('White','Violet')
console.log(arr)