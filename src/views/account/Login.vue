<template>
  <div class="login">
    <form @submit.prevent="login">
      <div class="form-group">
        <h2 class="heading">Login</h2>
        <div class="controls">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            v-model="user.username"
            required
            class="floatLabel"
            name="name"
          />
        </div>
        <div class="controls">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="user.email"
            required
            class="floatLabel"
            name="email"
          />
        </div>
        <div class="controls">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="user.password"
            required
            class="floatLabel"
            name="password"
          />
        </div>
       
         <div class="alert " role="alert" v-if="errors">
          
            <p v-for="error in errors" :key="error">{{ error }}</p>
       
       
       </div>
        <div class="grid">
          <br />
          <button type="submit" value="Submit" class="col-1-4 btn">
            login
          </button>
          <router-link to="/register" class="col-1-4 btn">
            Register
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { toast } from "bulma-toast";
export default {
  name: "login",
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
      errors: [],
    };
  },
  methods: {
    async login() {
      axios.defaults.headers.common["Authorization"] = "";
      // localStorage.removeItem('access')
      const FormData = {
        username: this.user.username,
        email: this.user.email,
        password: this.user.password,
      };

      await axios
        .post("login/", FormData)
        .then((response) => {
          toast({
            message: "Login Successful",
            type: "is-success",
            dismissible: true,
            duration: 2000,
            position: "bottom-right",
            pauseOnHover: true,
          });
          const access = response.data.access;
          const refresh = response.data.refresh;
          this.$store.commit("setAccess", access);
          this.$store.commit("setRefresh", refresh);
          axios.defaults.headers.common["Authorization"] = `'jwt' + ${access}`;
          localStorage.setItem("access", access);
          localStorage.setItem("refresh", refresh);
          this.$store.commit("isLoggedIn", true);
          this.$router.push("/");
        })
        .catch(error => {
        if(error.response.data){
            console.log("helo",error.response.data)
        }
        this.errors = error.response.data
        });
    },
  },
};
</script>
