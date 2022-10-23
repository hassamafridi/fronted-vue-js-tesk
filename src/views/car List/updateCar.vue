<template>
  <div class="w-100">
     <div class="col-md-12 pt-3">
    <h2 class="heading bg-primary text-white" style="text-align:center">
      <span class="material-icons big f-start">room</span>
      update Car Registration
      <span class="material-icons big f-end">room</span>
    </h2>
   <UpdateForm />
    <div class="row">
      <router-view></router-view>
    </div>
  </div> 
  </div>

</template>


<script>
import UpdateForm from './updateForm.vue'
export default{
     components: {
    UpdateForm,
  },
}


</script>


<style >

</style>