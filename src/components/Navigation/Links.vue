<template>
  <div>
    <div class="links small no-select">
      <router-link to="/"
        ><span class="material-icons">chevron_rightdashboard</span>
        <p class="text">Dashboard</p></router-link
      >
        <!-- cars -->
      <a :class="linkClass(inventory)" @click="inventory = !inventory"
        ><span class="material-icons">chevron_rightpeople</span>
        <p class="text">Car List</p></a
      >
      <transition
        enter-active-class="animate__animated animate__fadeInLeft animate__faster"
      >
        <span v-if="inventory">
          <router-link :to="{ name: 'car-list' }" class="small ps-4 my-1"
            ><span class="material-icons">subdirectory_arrow_right category</span>
            <p class="text">Cars</p></router-link
          >
           <router-link :to="{ name: 'addcar' }" class="small ps-4 my-1"
            ><span class="material-icons">subdirectory_arrow_right category</span>
            <p class="text">Add Cars</p></router-link
          >
        </span>
      </transition>
      <hr class="w-100 d-sm-none d-md-block" />
  
      <!-- Other stuff -->
      <hr class="w-100 d-sm-none d-md-block" />
      <router-link to=""
        ><span class="material-icons">chevron_righttungsten</span
        ><span class="text">Updates</span></router-link
      >
      <router-link to=""
        ><span class="material-icons">chevron_rightsettings</span
        ><span class="text">Settings</span></router-link
      >
      <a href="/"
        ><span class="material-icons">chevron_rightlogout</span
        ><span class="text">Log out</span></a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inventory: false,
      finances: false,
      booking: false,
    };
  },
  methods: {
    linkClass: function (boolean) {
      if (boolean) return "dropdown-active";
      return "";
    },
  },
};
</script>
<style lang="scss" scoped>
.links a {
  display: flex;

  .material-icons {
    font-size: 1.6em;
  }
  .text {
    display: flex;
    font-size: 1.1em;
    margin: auto 0;
  }
}
</style>
