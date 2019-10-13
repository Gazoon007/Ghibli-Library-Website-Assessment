import Vue from 'vue'
import Router from 'vue-router'

const MovieList = resolve => {
    require.ensure(['@/components/MovieComponent/MovieList'], () => {
        resolve(require('@/components/MovieComponent/MovieList'));
    });
};

const PeopleList = resolve => {
    require.ensure(['@/components/PeopleComponent/PeopleList'], () => {
        resolve(require('@/components/PeopleComponent/PeopleList'));
    });
};

const LocationList = resolve => {
    require.ensure(['@/components/LocationComponent/LocationList'], () => {
        resolve(require('@/components/LocationComponent/LocationList'));
    });
};

const SpeciesList = resolve => {
    require.ensure(['@/components/SpeciesComponent/SpeciesList'], () => {
        resolve(require('@/components/SpeciesComponent/SpeciesList'));
    });
};

const VehicleList = resolve => {
    require.ensure(['@/components/VehicleComponent/VehicleList'], () => {
        resolve(require('@/components/VehicleComponent/VehicleList'));
    });
};

Vue.use(Router);

export default new Router({
    routes: [
        {path: '', component: MovieList},
        {path: '/people', component: PeopleList},
        {path: '/locations', component: LocationList},
        {path: '/species', component: SpeciesList},
        {path: '/vehicles', component: VehicleList},
    ],
    mode: 'history'
})
