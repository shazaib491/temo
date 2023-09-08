// // // const element=document.getElementsByTagName('h1');

// // // console.log(element);

// // // element[0].innerHTML="Hello Uncle";

// // let selector=document.querySelectorAll(".demo")[1].innerHTML="Taha";
// // let selectorID=document.querySelector("#buttonId");
// // console.log(selector);


// // selectorID.addEventListener('input',(event)=>{
// //     if(event.target.value.length > 2){
// //         console.log(event.target.value)
// //     }
// // });

// // // function onButton(){
// // //     console.log("Hello Wolrd")
// // // }



// let user={
//     name:'admin',
//     email:'admin@gmail.com',
//     password:'passwors1234'
// }

// let basic_detail={
//     gender:'M',
//     age:18
// }

// // let name=user.name;
// // console.log(user.name)

// // //object destructuring 
// // let {name:nm,email,password}=user;
// // nm="nmansdbdh"
// // console.log(nm,email,password)

// // console.log(user);

// let {names,email="admin"}=user;

// // let arr=[1,2,3,4,5];
// // let [one,...last]=arr;
// // console.log(one,last);


// let obj={...user,...basic_detail};


// obj.name="Ahmad";

// obj.email="admin@gm23244.com";

// console.log(user);
// console.log(obj);

// let {name,...users}=obj;

// console.log(name,users);



let arr=[
    {
        name:'admin',
        email:'admin@gmail.com',
        password:'password@123'
    },
    {
        name:'admin2',
        email:'admin2@gmail.com',
        password:'password@123'
    }
]

let [{},{name,email}]=arr

console.log(name,email);