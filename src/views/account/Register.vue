<template>
  <div class="signup">
    <form @submit.prevent="signup">
      <div class="form-group">
        <h2 class="heading">Sign Up</h2>
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
            Sign Up
          </button>
          <router-link to="/login" class="col-1-4 btn"> Login </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axio from "axios";
import { toast } from "bulma-toast";
export default {
  data() {
    return {
        user: {
        username: "",
        email: "",
        password: "",
      },
          errors:[],
          data:""
    };
  },
  methods: {
    async signup() {
      this.errors = [];
      if(this.user.username === ''){
        this.errors.push("Username is required");
      }
      if(this.user.email === ''){
        this.errors.push("Email is required");
      }
      if(this.user.password === ''){
        this.errors.push("Password is required");
      }
      if(!this.errors.length){
       const FormData = {
        username: this.user.username,
        email: this.user.email,
        password: this.user.password,
      };
       await axio.post("register/", FormData)
        .then((response) => {
          toast({
            message: "User Created",
            type: "is-success",
            dismissible: true,
            duration: 2000,
            position: "bottom-right",
            pauseOnHover: true,
          });
          if (response.data.success) {
            this.$router.push("/");
          }
        })
        .catch(error => {
        if(error.response.data){
            console.log("helo",error.response.data)
        }
        this.errors = error.response.data
        });
        
      }
      
     
    }
  },
};
</script>
