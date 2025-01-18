import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { faHome, faUser, faMagnifyingGlass, faPlus, faPenToSquare, faTrash, faFloppyDisk, faXmark, faFileExport } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const pinia = createPinia();
const app = createApp(App);

library.add(faHome, faUser, faMagnifyingGlass, faPlus, faPenToSquare, faTrash, faFloppyDisk, faXmark, faFileExport);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(pinia);
app.use(router);
app.mount("#app");
