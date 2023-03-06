let signUp = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  axios
    .post("https://640578aa40597b65de37f1b3.mockapi.io/userInfo", {
      name: name,
      email: email,
      password: password,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
