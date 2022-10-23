<template>
     <div class="col-md-12 pt-3">
    <h2 class="heading bg-primary text-white" style="text-align:center">
      <span class="material-icons big f-start">room</span>
      Car List 
      <span class="material-icons big f-end">room</span>
    </h2>
    <div class="row">
      <router-view></router-view>
    </div>
  </div> 
</template>
<script>

export default ({
  name:"rooms-container",
  
})
</script>
