import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AboutLayout from '@/layout/AboutLayout/index.vue';
import About from '@/views/About.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		component: AboutLayout,
		name: 'AboutLayout',
		redirect: '/about',
		children: [
			{
				path: '/about',
				component: About,
				name: 'About',
			},
			{
				path: '/about/description',
				// which is lazy-loaded when the route is visited.
				component: () => import(/* webpackChunkName: "about" */ '../views/Description.vue'),
				name: 'Description',
			},
		],
	},
];

const router = new VueRouter({
	// mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
