import { reactive } from "vue";

export const HeaderLink = reactive({
links: [
    {
        text: 'Home',
        page: '#',
        class: 'active'

    },
    {
        text: 'About',
        page: '#',
        class: ''

    }, {
        text: 'Services',
        page: '#',
        class: ''

    }, {
        text: 'Blog',
        page: '#',
        class: ''

    }, {
        text: 'Contact',
        page: '#',
        class: ''

    },
    {
        text: 'Portfolio',
        page: '#',
        class: ''

    }
]
}
)
export const FooterLink = reactive({
    links:[]
 })