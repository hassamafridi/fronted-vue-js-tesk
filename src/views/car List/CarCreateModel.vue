<template>
  <div class="w-100">
     <div class="col-md-12 pt-3">
    <h2 class="heading bg-primary text-white" style="text-align:center">
      <span class="material-icons big f-start">room</span>
      Add Car  
      <span class="material-icons big f-end">room</span>
    </h2>
    <div class="row">
      <router-view></router-view>
    </div>
  </div> 
    <div
      id="matcreate-btn"
      
    >
   <!-- <span class="material-icons align-center pe-2">add</span>
  <span class="align-center p-0"> New Registration </span> -->
    </div>
        
    <!-- The Modal -->
      <CarForm />
    <div id="matcreate-modal" class="modal">
      <!-- Modal content -->
      <div class="row m-0 d-flex justify-content-center">
        <div class="col-md-12">
          <div class="modal-content text-dark text-start">
            <span class="close d">&times;</span>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import CarForm from "../car List/CarForm.vue";

export default {
  components: { CarForm },
  mounted() {
    // Get the modal
    var modal = document.getElementById("matcreate-modal");

    // Get the button that opens the modal
    var btn = document.getElementById("matcreate-btn");

    // Get the <span> element that closes the modal
    var span = modal.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
      modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  },
};
</script>
