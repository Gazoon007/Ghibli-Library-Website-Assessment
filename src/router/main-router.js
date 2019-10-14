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
        {path: '', name:'home', component: MovieList},
        {path: '/people', name:'people', component: PeopleList},
        {path: '/locations', name:'locations', component: LocationList},
        {path: '/species', name:'species', component: SpeciesList},
        {path: '/vehicles', name:'vehicles', component: VehicleList},
    ],
    scrollBehavior(to) {
        if (to.hash) {
            const element = document.querySelector(to.hash);
            if (element) {
                window.scrollTo({
                    top: element.offsetTop,
                    behavior: 'smooth'
                });
            }
        } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    },
    mode: 'history'
})
