<template>
  <div class="col-md-12 pt-3">
    <h2 class="heading bg-primary text-white" style="text-align: center">
      <span class="material-icons big f-start">dashboard</span>
      Dashboard
      <span class="material-icons big f-end">dashboard</span>
    </h2>
    <div class="row m-0 d-md-none">
      <div class="col">
        <span @click="viewDetails = !viewDetails">
          <div v-if="!viewDetails" class="btn btn-green w-100">
            View Details
          </div>
          <div v-else class="btn btn-green w-100">Hide Details</div>
        </span>
      </div>
    </div>
    <transition
      enter-active-class="animate__animated animate__fadeIn animate__fast"
      leave-active-class="animate__animated animate__zoomOut animate__faster"
    >
      <div v-if="viewDetails" class="row m-0 bg-white my-2 rounded bordered" >
        <router-link to="/" class="tdn col-md p-0" >
          <Stat
        
            class="p-2"
            header="Total Car Registration"
            icon="attach_money"
            color="text-green"
            :body="this.count"
            disabled="test"
          />
        </router-link>
      
       
        <router-link to="/settings/" class="tdn col-md p-0">
          <!-- <HotelStatus /> -->
        </router-link>
      </div>
    </transition>
    <hr />
    <div class="row m-0">
      <div class="col-md-8 p-1">
      </div>
     
    </div>
    <div class="col-md-8 p-1">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Stat from "@/components/stat.vue";
import axios from "axios";
export default {
  name: "Dashboard",
  components: {
    Stat,
    
  },
  data() {
    return {
      viewDetails: true,
      count:'',
    };
  },
  async mounted(){
    const response = await axios.get('/car_list/')
    console.log(response.data)
      this.count = response.data.count
      console.log("count",this.count)
  },
  
 
};
</script>
