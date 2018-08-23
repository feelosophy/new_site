import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Menu from '../components/Menu';


Vue.use(Router);

export default new Router({
    routes: [
        {
          path: '/',
          name: 'menu',
          component: Menu,
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects,
        },
        {
            path: '/services',
            name: 'services',
            component: Services,
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
        },
    ],
});
