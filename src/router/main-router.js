import Vue from 'vue'
import Router from 'vue-router'
import MovieList from "@/components/MovieComponent/MovieList";
import PeopleList from "@/components/PeopleComponent/PeopleList";

Vue.use(Router);

export default new Router({
  routes: [
      {path: '', name: MovieList, component: MovieList},
      {path: '/people', name: PeopleList, component: PeopleList},
      // {path: '/locations', name: Locations, component: Home},
      // {path: '/species', name: Species, component: Home},
      // {path: '/vehicles', name: Vehicles, component: Home},
  ],
  mode: 'history'
})
