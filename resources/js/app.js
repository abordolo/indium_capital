import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp, Head, Link } from '@inertiajs/vue3';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import VueSmoothScroll from 'vue3-smooth-scroll';
import 'animate.css';

// layout
import AppLayout from '@/Components/Custom/Base/Layouts/AppLayout/Index.vue';
import Section from '@/Components/Custom/Base/Layouts/Section/Index.vue';
import Container from '@/Components/Custom/Base/Layouts/Container/Index.vue';

// logo
import Logo from '@/Components/Custom/Base/Logo/Index.vue';

// texts
import PreHeading from '@/Components/Custom/Base/PreHeading/Index.vue';
import Heading from '@/Components/Custom/Base/Heading/Index.vue';
import Intro from '@/Components/Custom/Base/Intro/Index.vue';
import BodyText from '@/Components/Custom/Base/BodyText/Index.vue';
import TextBlock from '@/Components/Custom/Base/TextBlock/Index.vue';

// button
import AppButton from '@/Components/Custom/Base/AppButton/Index.vue';

// animate on scroll
import AnimateOnScroll from '@/Components/Custom/Base/AnimateOnScroll/Index.vue';

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
        .use(VueSmoothScroll)

        // inertia
        .component('InertiaHead', Head)
        .component('InertiaLink', Link)

        // layout
        .component('Section', Section)
        .component('Container', Container)

        // logo
        .component('Logo', Logo)

        // texts
        .component('PreHeading', PreHeading)
        .component('Heading', Heading)
        .component('Intro', Intro)
        .component('BodyText', BodyText)
        .component('TextBlock', TextBlock)

        // button
        .component('AppButton', AppButton)

        // animate on scroll
        .component('AnimateOnScroll', AnimateOnScroll)

        // mount
        .mount(el)
    );
  },
  progress: {
    color: '#4B5563',
  },
});
