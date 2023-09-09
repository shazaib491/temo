// // function myOutput(some){
// //     console.log(some);
// // }

// // function myCalculator(a,b,amaan){
// //     let sum=a+b;
// //     amaan(sum);
// // }

// // myCalculator(10,20,myOutput)

// // function myFunction(){
// //     console.log("Hello Wolrd");
// // }

// // setInterval(myFunction,3000);

// // console.log("fdksnkjbf");

// function save(internetAccess, resolve, reject) {
//   if (internetAccess) {
//     resolve(getter);
//   } else {
//     reject();
//   }
// }


// function success(conditionResolve){
//     let array = [
//         {
//             name:'admin',
//             emal:'admin@gmail.com'
//         }
//     ];
//     return setTimeout(()=>{
//         if(array.length){
//             conditionResolve(array);
//         }
//     },1000)


//     console.log("Success!")
// }

// function failure(){
//     console.log("Failure! ")
// }


// save(false,success,failure)

// function getter(arr){
//     return arr;
// }




function firstFunction(args, callback) {
    setTimeout(function() {
      callback(5);
    }, 2000);
  }
  
  function secondFunction(args, callback) {
    setTimeout(function() {
      callback(10);
    }, 1000);
  }
  
  function main() {
    firstFunction(null, function(result1) {
      secondFunction(null, function(result2) {
        console.log(result1 + result2);
      });
    });
  }

  main();


  db.cart.insert({
    "_id": 1,
    "cart": [
      {"item": "apple", "price": 12},
      {"item": "banana", "price": 6},
      {"item": "orange", "price": 9}
    ]
  }
  )