import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";
import Home from "../views/Home.vue";
//import Impressum from "../views/Impressum.vue";
import TrustSounds from "../views/trust-sounds/TrustSounds.vue";
import Exposee from "../views/exposee/Exposee.vue";
import Students from "../views/students/Students.vue";
import BAMathias from "../views/students/BAMathias.vue";
import MAAline from "../views/students/MAAline.vue";
import HowToWrite from "@/views/how-to-write/HowToWrite.vue";
import OpenLabDay from "@/views/open-lab-day/OpenLabDay.vue";
import BAJohannes from "@/views/students/BAJohannes.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/trustsounds",
        name: "Trustful Sounds",
        component: TrustSounds
    },
    {
        path: "/students",
        name: "Students",
        component: Students
    },
    {
        path: "/openlabday",
        name: "OpenLabDay",
        component: OpenLabDay
    },
    {
        path: "/maaudiencefeedback",
        name: "Audience Feedback",
        component: MAAline
    },
    {
        path: "/baVisualAttention",
        name: "Visual Attention",
        component: BAMathias
    },
    {
        path: "/exposee",
        name: "Exposee",
        component: Exposee
    },
    {
        path: "/how-to-write",
        name: "How to write",
        component: HowToWrite
    },
    {
        path: "/impressum",
        name: "Impressum",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "impressum" */ "../views/Impressum.vue")
    },
    {
        path: "/privacy",
        name: "Privacy",
        component: () =>
            import(/* webpackChunkName: "impressum" */ "../views/Privacy.vue")
    },
    {
        path: "/bajohe",
        name: "Bachelor Thesis",
        component: BAJohannes
    },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
