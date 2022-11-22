import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, } from '@fortawesome/free-brands-svg-icons'
import {faComment, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faInstagram)
library.add(faFacebookF)
library.add(faLinkedinIn)
library.add(faTwitter)
library.add(faComment)
library.add(faArrowUp)
library.add(faStar)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
