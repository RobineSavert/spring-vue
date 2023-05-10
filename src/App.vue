<template>
    <MobileView />
    <DesktopView />

</template>

<script setup>
import DesktopView from "./views/DesktopView.vue";
import MobileView from "./views/MobileView.vue";
import 'tippy.js/dist/tippy.css';
import tippy, { sticky } from 'tippy.js';
import { roundArrow } from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/dist/svg-arrow.css';

const mounted = () => {
        tippy('#popover-code-bottom', {
            content(reference) {
                const id = reference.getAttribute('data-template');
                const template = document.getElementById(id);
                return template.innerHTML;
            },
            allowHTML: true,
            animation: 'perspective',
            trigger: 'click',
            placement: 'bottom',
            theme: 'basket',
            arrow: roundArrow,
            interactive: true
        });

        tippy('#popover-cv-bottom', {
            content(reference) {
                const id = reference.getAttribute('data-template');
                const template = document.getElementById(id);
                return template.innerHTML;
            },
            allowHTML: true,
            animation: 'perspective',
            trigger: 'click',
            placement: 'bottom',
            theme: 'berry',
            arrow: roundArrow,
            interactive: true
        });

        tippy('#popover-contact-bottom', {
            content(reference) {
                const id = reference.getAttribute('data-template');
                const template = document.getElementById(id);
                return template.innerHTML;
            },
            allowHTML: true,
            animation: 'perspective',
            trigger: 'click',
            placement: 'bottom',
            theme: 'night',
            arrow: roundArrow,
            interactive: true
        });

        tippy('#popover-me-left', {
            content(reference) {
                const id = reference.getAttribute('data-template');
                const template = document.getElementById(id);
                return template.innerHTML;
            },
            allowHTML: true,
            animation: 'perspective',
            trigger: 'click',
            placement: 'top',
            theme: 'berry',
            sticky: true,
            plugins: [sticky],
            arrow: roundArrow,
            interactive: true
        });

        tippy('#popover-book', {
            content(reference) {
                const id = reference.getAttribute('data-template');
                const template = document.getElementById(id);
                return template.innerHTML;
            },
            allowHTML: true,
            animation: 'perspective',
            trigger: 'click',
            placement: 'left',
            theme: 'basket',
            sticky: true,
            plugins: [sticky],
            arrow: roundArrow,
            interactive: true

        });

        tippy('#popover-strawberry-1', {
            content(reference) {
                const id = reference.getAttribute('data-template');
                const template = document.getElementById(id);
                return template.innerHTML;
            },
            allowHTML: true,
            animation: 'perspective',
            trigger: 'click',
            placement: 'top',
            theme: 'night',
            arrow: roundArrow,
            interactive: true,
            maxWidth: 500
        });

        tippy('#popover-strawberry-2', {
            content(reference) {
                const id = reference.getAttribute('data-template');
                const template = document.getElementById(id);
                return template.innerHTML;
            },
            allowHTML: true,
            animation: 'perspective',
            trigger: 'click',
            placement: 'top',
            theme: 'basket',
            arrow: roundArrow,
            interactive: true,
            maxWidth: 500
        });

        tippy('#popover-strawberry-3', {
            content(reference) {
                const id = reference.getAttribute('data-template');
                const template = document.getElementById(id);
                return template.innerHTML;
            },
            allowHTML: true,
            animation: 'perspective',
            trigger: 'click',
            placement: 'top',
            theme: 'berry',
            arrow: roundArrow,
            interactive: true,
            maxWidth: 500,
        });

        tippy('#popover-bread-top', {
            content(reference) {
                const id = reference.getAttribute('data-template');
                const template = document.getElementById(id);
                return template.innerHTML;
            },
            allowHTML: true,
            animation: 'perspective',
            trigger: 'click',
            placement: 'top',
            theme: 'basket',
            arrow: roundArrow,
            interactive: true,
            maxWidth: 250
        });
    }

</script>


