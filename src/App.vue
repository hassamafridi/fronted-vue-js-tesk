<template>
  <div id="web_app">
    <!-- <transition leave-active-class="animate__animated animate__fadeOut">
      <div >
        <div class="loading">
          <div class="uil-ring-css" style="transform: scale(0.79)">
            <div></div>
          </div>
          <span class="loading-text text-center text-white"> </span>
        </div>
      </div>
    </transition> -->
    <div class="row m-0 d-flex text-center">
      <Sidebar class="col-md-3 col-lg-2 d-none d-md-block" />
      <MobileSidebar class="d-block d-md-none" />
      <div class="col-md content pb-3">
        <router-view />
        <div>
          <!-- <Onboardinghotel /> -->
        </div>
        <div id="footer" class="row m-0 mt-4 bg-primary">
          <div class="col-md-12">
            <div style="text-align: center">
              Void Solutions © Ehtisaab Products
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MobileSidebar from "@/components/Navigation/MobileSidebar.vue";
import Sidebar from "@/components/Navigation/Sidebar.vue";
import axios from "axios";
export default {
  components: {
    MobileSidebar,
    Sidebar,
  },
  beforecreate() {
    this.$store.commit("initialiseStore");
    const access = this.$store.state.access;
    if (access) {
      axios.defaults.headers.common["Authorization"] = "jwt" + access;
    } else {
      axios.defaults.headers.common["Authorization"] = "";
    }
  },
  mounted() {
    setInterval(() => {
      this.getAccess();
    }, 10000);
  },
 
  methods: {
    async getAccess() { 
      // const refresh = {
      //   refresh: this.$store.getters.refresh
      // };
      // await axios
      //   .post("/token/refresh/", refresh)
      //   .then((response) => {
      //     const access = response.data.access;
      //     localStorage.setItem("access", access);
      //     this.$store.commit("setAccess", access);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
  },
}

</script>

<style lang="scss">
@import "./assets/loading-overlay.css";
@import "./assets/scss/style.scss";

.heading {
  padding: 0.75em;
  border-radius: 5px;
  margin: 0.25em 0;
}

#footer {
  letter-spacing: 0.1em;
  user-select: none;
  font-weight: lighter;
  padding: 1em 0;
  color: white;
  //  position: fixed;
  //   bottom: 0;
  //   width:100%;
  // position: absolute; bottom: 0px;
  // width: 82%;
}

</style>
