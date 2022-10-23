<template>
  <!-- <div class="col-md-12 text-start"> -->
    <!-- <div class="row m-0 bg-white my-2 rounded bordered"> -->
      <div class="col-md-10 ">
      <CarList />
      </div>
      <!-- <div class="col-md">
        <CarCraeteModal />
      </div> -->
    <!-- </div> -->
  <!-- </div> -->
</template>

 <script>
import CarList from "../car List/CarList.vue";
import CarCraeteModal from "../car List/CarCreateModel.vue";
export default {
  name: "rooms-home",
  components: {
    CarList,
    CarCraeteModal,
  },
  data() {
    return {};
  },
};
</script>
