let logIn = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  // axios
  //   .get(`https://640578aa40597b65de37f1b3.mockapi.io/userInfo/`)
  //   .then((res) => {
  //     console.log(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  axios
    .get("https://640578aa40597b65de37f1b3.mockapi.io/userInfo")
    .then(function (response) {
      var success = false;
      console.log(response.data.length);
      console.log(response);
      for (var i = 0; i < response.data.length; i++) {
        if (
          response.data[i].email == email &&
          response.data[i].password == password
        ) {
          success = true;
          break;
        }
      }

      if (success) {
        document.getElementById("message").innerHTML = "Login successful!";
        window.location.replace("weather.html");
      } else {
        document.getElementById("message").innerHTML =
          "Invalid email or password.";
      }
    })
    .catch(function (error) {
      document.getElementById("message").innerHTML = "Error: " + error.message;
    });
};
