import Vue from 'vue'
import Router from 'vue-router'
import MovieList from "@/components/MovieComponent/MovieList";
import PeopleList from "@/components/PeopleComponent/PeopleList";
import LocationList from "@/components/LocationComponent/LocationList";
import SpeciesList from "@/components/SpeciesComponent/SpeciesList";
import VehicleList from "@/components/VehicleComponent/VehicleList";

Vue.use(Router);

export default new Router({
  routes: [
      {path: '', name: MovieList, component: MovieList},
      {path: '/people', name: PeopleList, component: PeopleList},
      {path: '/locations', name: LocationList, component: LocationList},
      {path: '/species', name: SpeciesList, component: SpeciesList},
      {path: '/vehicles', name: VehicleList, component: VehicleList},
  ],
  mode: 'history'
})
