import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        navigation: [
            ['/intro'],
            ['/hello'],
            ['/story/2002',
            '/story/2009',
            '/story/2011',
            '/story/2015',
            '/story/2018'],
            ['/skills/frontend',
            '/skills/tools',
            '/skills/backend',
            '/skills/graphics'],
            ['/hobbies'],
            ['/contact'],
        ],
        navDirection: 'up'
    },
    getters: {
        flatNav: state => {
            let flatNav = [];
            for (const navGroup of state.navigation) {
                flatNav = [...flatNav, ...navGroup];
            }
            return flatNav;
        }
    },
    mutations: {
        setDirection(state, direction) {
            state.navDirection = direction;
        }
    }
});

export default store;