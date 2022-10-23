<template>
  <div id="mobile-nav" class="p-0">
    <div
      @click="mobileMenuVisible = !mobileMenuVisible"
      class="no-select w-100"
    >
      <span class="bg-dark material-icons hamburger"> menu </span>
    </div>
    <transition name="slide">
      <div
        v-if="mobileMenuVisible"
        class="text-white mobile-sidebar-container bg-primary"
      >
        <div>
          <img class="logo pt-4" src="@/assets/logo.png" /><br />
          <h2 class="title pb-0 mb-1 bigger no-select">Car</h2>
          <p class="m-0 title small no-select capitalize">Registration</p>
          <hr />
          <Links class="column-nav" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Links from '@/components/Navigation/Links.vue'
export default {
    components:{
        Links
    },
  data() {
    return {
      mobileMenuVisible: false,
    };
  },
};
</script>
<style lang="scss" >
#mobile-nav {
  z-index: 100;
  position: fixed;
}
.hamburger {
  position: fixed;
  top: 0;
  left: 0;
  padding: 0.5em;
  color: white;
  border-radius: 0 0 8px 0;
}
.title {
  font-weight: lighter;
  letter-spacing: 0.1em;
  padding: 0 0 0.1em 0;
}

.logo {
  max-width: 60%;
  align-self: center;
}

.mobile-sidebar-container {
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
}

.slide-enter-active,
.slide-leave-active {
  transition: width 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  margin-left: -100vw;
}
</style>
