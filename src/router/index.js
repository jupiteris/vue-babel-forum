import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AboutLayout from '@/layout/AboutLayout/index.vue';

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
		redirect: '/about',
		children: [
			{
				path: '/about',
				component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
			},
			{
				path: '/about/description',
				// which is lazy-loaded when the route is visited.
				component: () => import(/* webpackChunkName: "about" */ '../views/Description.vue'),
			},
		],
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
