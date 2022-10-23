<template>
    <div>
  <div class="p-0 small">
    <div class="sidebar-container bg-primary">
      <div class="text-white">
        <img class="logo pt-4 " src="@/assets/logo.png" /><br />
        <h2 class="title pb-0  mb-1 bigger no-select">Car</h2>
        <p class="m-3 title small no-select capitalize">Registration Management</p>
        <hr />
        <Links class="column-nav" />
      </div>
    </div>
  </div>
    </div>
</template>

<script>
import  Links from '@/components/Navigation/Links.vue'
export default ({
  components:{
   Links
  },
})
</script>

<style lang="scss">
.sidebar-container {
  position: fixed;
  width: inherit;
  overflow-y: scroll;
  height: 100vh;
 
}

.title {
  font-weight: lighter;
  letter-spacing: 0.1em;
  padding: 0 0 0.1em 0;
}
.logo {
  width: 120px;
  align-self: center;
}
</style>