import axios from 'axios';

const state = {
    cars: [],
    shows:""
};
const getters = {
    allCars: state => state.cars,


};
const actions = {
    async getCar({ commit }) {
        const response = await axios.get('/car_list/');
        commit('setCar', response.data.results);
      
      
        console.log(response.data);
    },
    async addCar({ commit } ,formData) {
        const response = await axios.post('/car_list/', formData ,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        this.getCar()
        commit('newCar', response.data.results);
        console.log(response.data);
    },
    async updateCar({commit},formData,id){
        const response = await axios.put('/car/'+id,formData);
        console.log(response.data)
        commit('setupdate',response.data.results);
    }
   
};
const mutations = {
    setCar: (state, cars) => (state.cars = cars),
    newCar: (state, cars) => state.car.unshift(cars),
    setupdate:(state,cars)=>state.car.unshift(cars),
};
export default {
    state,
    getters,
    actions,
    mutations
}