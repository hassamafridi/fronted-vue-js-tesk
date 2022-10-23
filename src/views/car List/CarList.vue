<template>
  <div class="row d-flex">
    <div
      class="card text-center m-2"
      style="width: 18rem"
      v-for="car in allCars"
      :key="car.id"
    >
      <div class="img-container mb-3">
        <img class="card-img-top mb-5 margin" :src="car.image" />
        <div class="cags1">
          <div class="room-grid-item-details sliding-overlay">
            <div class="room-grid-item-amenities" style="text-align: center">
              <ul
                class="room-grid-item-amenities-list"
                style="
                  text-align: center;
                  margin-top: 138px;
                  text-decoration: none;
                "
              >
                <div class="room-rate-range">
                  <h4 class="card-body"></h4>
                </div>
                <h5 class="card-title">{{ car.category }}</h5>
                <!-- <li>catergories:</li> -->

                <li style="text-decoration: none;" >car Name &nbsp{{ car.carname }}</li>
                <li>price $&nbsp{{ car.price }}</li>
                <li>Modal No &nbsp{{ car.modalNo }}</li>
                <li>Registration No &nbsp{{ car.registrationNo }}</li>
              </ul>
              <div class="d-flex">
                <button
                  href="#"
                  @click="deletecar(car.id)"
                  style="margin-right: 60px"
                  class="btn btn-primary"
                >
                  Delete
                </button>
                <router-link
                  :to="{ name: 'updatecar', params: { id: car.id } }"
                  class="btn btn-primary"
                  >Edit</router-link
                >
              </div>

              <!-- <div class="room-grid-item-amenities-list">
                <button
                  class="btn btn-green"
                  @click="editRoom(room.id)"
                > 
                  <span class="material-icons align-center pe-2">edit</span> 
                  <span class="align-center p-0"> Edit </span>
                </button> -->
              <!-- </div> -->
              <!-- <router-link
                :to="{ name: 'booking-create', params: { id: room.id } }"
                class="btn btn-default"
                >Book Now</router-link
              > -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="buttons">
      <button
    class="btn btn-primary"
        v-if="ShowNextButton"
        @click="gotnextclick()"
      >
        Next
      </button>
       <button
       style="margin-left: 40px;"
        class="btn btn-primary"
        v-if="showPreviceButton"
        @click="gotopreviceclick()"
      >
        previous
      </button>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
// import { mapActions, mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "rooms-List",
  data() {
    return {
      allCars: [],
      ShowNextButton: false,
      showPreviceButton: false,
      currentpage: 1,
    };
  },
 
  methods: {
    //   ...mapActions(["getCar"]),
    gotopreviceclick() {
        this.currentpage -= 1;
        this.getCar()
    },
    gotnextclick() {
      this.currentpage += 1;
      this.getCar();
    },
    async getCar() {
      await axios
        .get(`/car_list/?page=${this.currentpage}`)
        .then((response) => {
          this.allCars = response.data.results;
          if (response.data.next) {
            this.ShowNextButton = true;
          }
          if (response.data.previous) {
            this.showPreviceButton = true;
          }
        });
    },

    async deletecar(id) {
      await axios.delete("/car/" + id).then((Result) => {
        console.log(Result);
        this.getCar();
      });
    },
  },
  mounted() {
    this.getCar();
  },
};
</script>
<style scoped>
.row {
  margin-right: calc(var(--bs-gutter-x) * -9.5);
  margin-left: calc(var(--bs-gutter-x) * 0.5);
}
.sliding-overlay-container {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.img-container {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.cags1 {
  position: absolute;
  top: -5px;
  transition: 0.5s;
}

.img-container:hover > img {
  opacity: 0.5;
  padding: 10px;
  font-family: Tahoma, Arial, Helvetica;
  font-size: 14px;
  line-height: 30px;
  letter-spacing: 1px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0 1px 3px #faf1f1;
}

.img-container:hover .cags1 {
  top: 30px;
}
.margin {
  margin-bottom: 16rem !important;
}
ul li {
  text-decoration: none;
}

</style>
