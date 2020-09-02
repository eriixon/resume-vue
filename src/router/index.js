import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main.vue';
import Contacts from '../views/Contacts.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'Main', component: Main },
    { path: '/contacts', name: 'Contacts', component: Contacts }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
