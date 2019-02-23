<template>
  <div class="login">
    <h1>Innskrá</h1>
    <input type="text" v-model="email" placeholder="Notendanafn" /><br />
    <input type="password" v-model="password" placeholder="Lykilorð" /><br />
    <input type="submit" @click="login" placeholder="Login" /><br />
    <!-- <a href="/register">Nýskrá</a> -->
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
          (user) => {
            console.log(user);
            // alert("Successfully logged in");
            this.$router.replace("/");
          },
          (err) => {
            console.log(err);
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
