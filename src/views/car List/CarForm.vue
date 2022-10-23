<template>
  <div>
    <form @submit.prevent="addCars">
      <div class="form-group">
        <h2 class="heading">Car Registration</h2>
        <div class="controls">
          <label for="number">Car Name</label>
          <input type="text" id="name" v-model="car.carname" required class="floatLabel" name="name" />
        </div>
        <div class="controls">
          <label for="number">Registration Number</label>
          <input type="number" id="name" v-model="car.registrationNo" required class="floatLabel" name="name" />
        </div>
        <div class="controls">
          <label for="number">Modal</label>
          <input type="number" id="name" v-model="car.modalNo" required class="floatLabel" name="modal" />
        </div>
        <div class="controls">
          <label for="price">Price</label>
          <input type="number" id="price" v-model="car.price" required class="floatLabel" name="price" />
        </div>
        <div class="controls">
          <label for="available">category</label>
          <select class="floatLabel col-1-xl" v-model="car.Category" name="category">
            <option value="bus">Bus</option>
            <option value="car">Car</option>
             <option value="sedan">Sedan</option>

          </select>
        </div>
        <div class="controls">
          <label for="image">image</label>
          <input type="file" id="image" ref="image" required @change="handleFileUpload($event)" class="floatLabel" name="image" />
        </div>
        
        <div class="grid">
          <br />
          <button type="submit" value="Submit" class="col-1-4 btn ">
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
  import { mapActions } from "vuex";
  export default {
    data() {
      return {
        car: {
          image: null,
          carname: "",
          price: "",
          Category: "",
          modalNo:"",
          registrationNo:""
        },
      };
    },
    mounted(){
    },
    methods: {
      ...mapActions(["addCar"]),
      addCars() {
        let formData = new FormData();
        // // CHECK IF IMAGE DIMENSIONS ARE 600X400 OTHERWISE RETURN
        // if (this.room.image.width != 600 || this.room.image.height != 400) {
        //   return alert("Image dimensions must be 600x400");
        // }
        formData.append('image', this.car.image);
        formData.append('price', this.car.price);
        formData.append('carname', this.car.carname);
        formData.append('category', this.car.Category);
        formData.append('modalNo', this.car.modalNo);
        formData.append('registrationNo',this.car.registrationNo)
        this.addCar(formData)
        console.log(formData)
        this.$router.push({ path: '/car-list/' });

      },
      handleFileUpload(event){
        this.car.image = event.target.files[0];
      }
    },
  };
</script>