<template>
  <div class="">
    <!-- The Modal -->
    <div id="matedit-modal" class="modal">
      <div class="row m-0 d-flex justify-content-center">
        <div class="col-md-12">
          <div class="modal-content text-dark text-start">
            <span class="close d">&times;</span>
            <br />
            <CarForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import CarForm from './CarForm.vue';
export default {
  props: ["item"],
  components: {
    CarForm,
  },
  mounted() {
    var $this = this;
    // Get the modal
    var modal = document.getElementById("matedit-modal");

    // Get the <span> element that closes the modal
    var span = modal.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    // also clear the parent's item
    span.onclick = function () {
      $this.$parent.edit_item = {};
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  },
  methods: {
    triggerModal: function () {
      var modal = document.getElementById("matedit-modal");
      modal.style.display = "block";
    },
  },
  watch: {
    item(newItem, oldItem) {
      if (newItem.id != oldItem.id && newItem.id) {
        console.log(newItem);
        this.triggerModal();
      }
    },
  },
};
</script>
