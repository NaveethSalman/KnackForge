// //1.
// var a = "word";
// var b = 15;

// function checkint (c){
//       if (typeof(c) === 'number') {
//           console.log("The given variable is a integer")
//       }else{
//           console.log("The given variable is not a integer")
//       }
//   }
// checkint(a);
// checkint(b);


// //2.
// const str="welcome";
// var l=str.length;
// var str2="";
// for(var i=l;i>0;i--){
//      str2+=str[i-1]
//  }
// console.log(str2)

// //3.
// const str="This is string upper case";
// let words=str.split(" ");
// for(var i=0;i<words.length;i++){
//    words[i]=words[i][0].toUpperCase()+words[i].substr(1);
// }
// const w=words.join(" ");
// console.log(w)

// //4.
// for(var i=0;i<=15;i++){
//     if(i%2===0){
//         console.log("the number "+ i + " is even");
//     }else{
//         console.log("the number "+ i + " is odd");
//     }
// }

// //5.
// let arr=['Green','Red','Blue','Orange','Yellow'];
// arr.pop()
// arr.pop()
// console.log(arr)
// arr.push('White','Violet')
// console.log(arr)


//OBJECTS

// let user = {
//     username:"ronaldo",
//     age:30,
//     occupation:"footballer",
//     password:"suiiieee",
//     giam : "ronaldo7@gmail.com",
//     login: function(){
//         console.log("login successful");
//     },
//     register(){
//         console.log("register by entering your details");
//     }

// }
// console.log(user.username);
// console.log(user.age);
// console.log(user.occupation);
// console.log(user.password);
// console.log(user.giam);
// user.login();
// user.register();

// let bikes=[
//     {   brandname:"yamaha",
//         about:"200cc with ecothrust;can reach a max speed of 150"
//     },
//     {   brandname:"honda",
//         about :"250cc with vtec;can reach a max speed of 180"
//     },
//     {   brandname:"suzuki",
//         about :"300cc with vvt;can reach a max speed of 200"
//     }
// ]
// var l=[ ]
// for(var k in bikes){
//     l.push(bikes[k].about)
// }
// console.log(l)
// console.log('yes')


let users=[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        }
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      }
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
  ]
//   let nou=Object.keys(users)
//   console.log("total no.of users is"+" "+nou.length)

//   let val=Object.values(users)
//     console.log(val)
//     users.forEach((element,i=10,users) => {
//         console.log("For id"+" " + users[i].id)
//          console.log(users[i].address.geo)
//        });
//   let ent= Object.entries(users)
//   console.log("Total entries")
//   console.log(ent)


function chan(){
    var b=document.getElementById('button');
    // b.style.display=b.textContent="Logout";
    if(b.innerHTML=="Login")
        b.innerHTML="Logout"
    else
        b.innerHTML="Login"

    // if(b.textContent=="Login"){
    //     b.textContent="Logout"
    // }else{
    //     b.textContent="Login"
    // }
    
}
// function chang(){
//     var b=document.getElementById('button');
//     b.style.display=b.textContent="Login";
// }
