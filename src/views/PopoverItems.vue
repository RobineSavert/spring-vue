<template>
    <img id="popover-book" data-template="popover-book-left" src="../assets/img/book.svg" class="cursor-pointer absolute right-[27%] top-[20%] md:right-[14%] md:top-[40%] lg:right-[10%] lg:top-[36%] xl:right-[10%] xl:top-[26%] 2xl:top-[15%] w-[125px] lg:w-[175px] 2xl:w-[250px] z-10" alt="" />

    <img id="popover-bread-top" data-template="popover-bread" src="../assets/img/bread.svg" class="cursor-pointer absolute left-[20%] bottom-[45%] md:left-[20%] md:bottom-[38%] lg:left-[45%] lg:bottom-[35%] xl:left-[50%] w-[200px] md:w-[250px] lg:w-[200px] xl:w-[300px] 2xl:w-[400px] 2xl:bottom-[50%] 2xl:left-[48%] z-20" alt="" />
    <img id="popover-me-left" data-template="popover-me" src="../assets/img/phone.svg" class="cursor-pointer hover:animate-ringing drop-shadow-md absolute md:left-[5%] md:bottom-[30%] left-[5%] bottom-[35%] lg:left-[36%] lg:bottom-[25%] xl:left-[46%] xl:bottom-[35%] 2xl:left-[40%] w-[80px] 2xl:w-[125px] z-20" alt="" />

    <img id="popover-strawberry-1" data-template="popover-strawberry1" src="../assets/img/strawberry-1.svg" class="animate-falldown1 cursor-pointer absolute right-[81%] bottom-[9%] lg:right-[52%] lg:bottom-[9%] xl:right-[48%] xl:bottom-[9%] 2xl:right-[51%] z-40 h-[35px] w-[35px] 2xl:h-[60px] 2xl:w-[60px]" alt="" />
    <img id="popover-strawberry-2" data-template="popover-strawberry2" src="../assets/img/strawberry-2.svg" class="animate-falldown2 cursor-pointer absolute right-[84%] bottom-[12%] lg:right-[54%] lg:bottom-[13%] xl:right-[49%] xl:bottom-[13%] 2xl:right-[53%] z-40 h-[35px] w-[35px] 2xl:h-[60px] 2xl:w-[60px]" alt="" />
    <img id="popover-strawberry-3" data-template="popover-strawberry3" src="../assets/img/strawberry-3.svg" class="animate-falldown3 cursor-pointer absolute right-[79%] bottom-[15%] md:bottom-[13%] lg:right-[50%] lg:bottom-[14%] xl:right-[46%] xl:bottom-[14%] 2xl:right-[48%] z-40 h-[35px] w-[35px] 2xl:h-[60px] 2xl:w-[60px]" alt="" />

</template>

<script setup>
import { onMounted } from "vue";
import tippy, {roundArrow, sticky} from "tippy.js";


onMounted(() => {
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
})





</script>