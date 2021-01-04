import {createRouter, createWebHistory} from "vue-router";

import Home from './pages/Home'
import DcHeros from './pages/DcHeros'
import Calendar from './pages/Calendar'

const routes = [
	{
        path: "/",
        component: Home,
	},
	{
        path: "/dc-heros",
        component: DcHeros,
	},
	{
        path: "/calendar",
        component: Calendar,
	},
];

const router = createRouter({
    history: createWebHistory(),
	routes,
});

export default router;
