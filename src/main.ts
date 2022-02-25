import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faCoffee, faInfoCircle, faCheck, faTimes,
    faCircle, faCircleDot, faPlay,
    faPlayCircle,
    faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


library.add(
    faCoffee, faInfoCircle, faCheck,
    faTimes, faCircle, faCircleDot, faPlay,
    faPlayCircle,
    faPaperPlane
    );

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDxRdP3Ko_8tQ5OAaDf2LpvYjo3Ml3KSp0",
    authDomain: "chapek9-7f562.firebaseapp.com",
    projectId: "chapek9-7f562",
    storageBucket: "chapek9-7f562.appspot.com",
    messagingSenderId: "206637160089",
    appId: "1:206637160089:web:780f87cb9418d5938bca08",
    measurementId: "G-7LC153VRRS"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(router)
    .mount("#app");
