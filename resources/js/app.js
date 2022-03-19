import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import { Link } from "@inertiajs/inertia-vue3";
import Layout from "./Layout/Layout";

createInertiaApp({
    // resolve: name => require(`./Pages/${name}`),
    resolve: name => {
        let page = require(`./Pages/${name}`).default
        page.layout ??= Layout // automatically layout apply if not having own layout
        return page
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("Link", Link)
            .mount(el)
    },
})

InertiaProgress.init({
    // The delay after which the progress bar will
    // appear during navigation, in milliseconds.
    delay: 250,

    // The color of the progress bar.
    color: '#008000',

    // Whether to include the default NProgress styles.
    includeCSS: true,

    // Whether the NProgress spinner will be shown.
    showSpinner: false,
})
