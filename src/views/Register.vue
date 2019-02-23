<template>
  <div class="register">
    <h1>Nýskrá</h1>
    <input type="text" v-model="email" placeholder="Email" /><br />
    <input type="password" v-model="password" placeholder="Lykilorð" /><br />
    <input @click="register" type="submit" placeholder="Nýskrá" />
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "register",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    register: function() {
      console.log(this.email, this.password);
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            console.log(user);
            alert("Account created");
          },
          function(err) {
            console.log(err);
            alert("There was an error");
          }
        );
    }
  }
};
</script>

<style scoped>
.register {
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
