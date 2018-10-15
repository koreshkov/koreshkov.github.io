import Vue from 'vue';
import VueRouter from 'vue-router';

// store
import store from './store';

// route components
import index from './views/index';
import intro from './views/intro';
import hello from './views/hello';
import story from './views/story';
import year from './views/year';
import skills from './views/skills';
import area from './views/area';
import hobbies from './views/hobbies';
import contact from './views/contact';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: index,
    redirect: '/intro',
    children: [{
        path: '/intro',
        component: intro,
        meta: {
            navigationTheme: 'light'
        }
    }, {
        path: '/hello',
        component: hello,
        meta: {
            navigationTheme: 'light'
        }
    }, {
        path: '/story',
        component: story,
        children: [{
            path: '/story/:year',
            component: year
        }]
    }, {
        path: '/skills',
        component: skills,
        children: [{
            path: '/skills/:area',
            component: area,
            meta: {
                navigationTheme: 'light'
            }
        }]
    }, {
        path: '/hobbies',
        component: hobbies
    }, {
        path: '/contact',
        component: contact,
        meta: {
            navigationTheme: 'light'
        }
    }]
}];

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    const flatNav = store.getters.flatNav;
    const fromIndex = flatNav.indexOf(from.path);
    const toIndex = flatNav.indexOf(to.path);
    let direction = fromIndex < toIndex ? 'down' : 'up';
    direction = fromIndex === flatNav.length - 1 && toIndex === 0 ? 'down' : direction;
    direction = fromIndex === 0 && toIndex === flatNav.length - 1 ? 'up' : direction;
    store.commit('setDirection', direction);
    // console.log(`going ${direction} from '${from.path}' to '${to.path}'`);
    next();
});

export default router;
