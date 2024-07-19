import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp, Head, Link } from '@inertiajs/vue3';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import VueSmoothScroll from 'vue3-smooth-scroll';

// layout
import AppLayout from '@/Components/Custom/Base/Layouts/AppLayout.vue';
import Section from '@/Components/Custom/Base/Layouts/Section.vue';
import Container from '@/Components/Custom/Base/Layouts/Container.vue';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => {
    // name - name of the component
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });
    let page = pages[`./Pages/${name}.vue`];

    page.default.layout = page.default.layout || AppLayout;

    // attach the layout
    page.default.layout = page.default.layout || AppLayout;

    return page;
  },
  setup({ el, App, props, plugin }) {
    return (
      createApp({ render: () => h(App, props) })
        .use(plugin)
        .use(ZiggyVue)
        .mount(el)
        .use(VueSmoothScroll)

        // inertia
        .component('InertiaHead', Head)
        .component('InertiaLink', Link)

        // layout
        .component('Section', Section)
        .component('Container', Container)
    );
  },
  progress: {
    color: '#4B5563',
  },
});
