<template>
  <div class="login">
    <h1>Innskrá</h1>
    <input type="text" placeholder="Notendanafn" /><br />
    <input type="password" placeholder="Lykilorð" /><br />
    <input type="submit" placeholder="Login" /><br />
    <a href="/register">Nýskrá</a>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            console.log(user);
            alert("Successfully logged in");
          },
          function(err) {
            alert("There was an error.", err);
          }
        );
    }
  }
};
</script>

<style scoped>
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
}
</style>
