function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, username: "admin", email: "admin@gmail.com" });
    }, 1000);
  });
}

function getOrders(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        "order1",
        "order2",
        "order3",
        "order4",
        "order5",
        "order6",
        "order",
      ]);
    }, 1500);
  });
}

function getProceedOrders(orders) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      orders = orders.map((element) => {
        return `proceededPrders ${element}`;
      });
      resolve(orders);
    }, 2000);
  });
}

function sendEmail(email, orders) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let emailResult = `${email} sent to ${orders.join(",")}`;
      resolve(emailResult);
    }, 2000);
  });
}

// getUser(1)
//   .then((user) => {
//     getOrders(user.username).then((orders) => {
//       getProceedOrders(orders).then((orders) => {
//         sendEmail("example@gmail.com", orders).then((response) => {
//           console.log(response);
//         });
//       });
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function paradise() {
  try {
    const user = await getUser(1);
    const orders = await getOrders(user.username);
    const proceedOrders = await getProceedOrders(orders);
    const emailResult = await sendEmail("example@gmail.com", proceedOrders);
    return emailResult;
  } catch (error) {
    console.error("Something went wront please contact your service provider");
  }
}


paradise().then((res)=>{
    console.log(res);
});




try{
    dldsn()
}catch(error){
    console.log(error)
}