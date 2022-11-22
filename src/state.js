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
    links:[
        {
            name: 'Quick Links',
            page1: 'Services', 
            page2: 'Contact', 
            page3: 'Blog'
        },

        {
            name: 'Resources',
            page1: 'Art Design', 
            page2: 'Computer', 
            page3: 'IT News',
            page4: 'Networking',
            page5: 'Web Security'
        },

        {
            name: 'Contact Us',
            page1: 'Patricia C.Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051', 
            page2: '', 
            page3: '+99(0) 101 0000 888',
            page4: 'Info@yourdomain.com',
            
        },
    ]
 })