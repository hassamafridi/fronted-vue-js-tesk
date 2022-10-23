import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'  

// Animate.js - https://animate.style/
import 'animate.css';
 

// Toast
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// axios default 
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

const options = {
    draggable: false
};
<script src="bulma-toast.min.js"></script>

createApp(App).use(store).use(Toast, options).use(router,axios).mount('#app')
