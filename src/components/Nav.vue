<template>
    <nav :class="[isDesktop ? 'pr-4 pt-4 justify-end' : 'mb-6 justify-center']" class="flex flex-auto">
        <button aria-label="Code Button" id="popover-code-bottom" data-template="popover-code" class="z-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-4 bg-berry hover:bg-berry active:bg-berry flex h-12 justify-center p-3 rounded-full text-center text-latte w-12">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        </button>

        <button aria-label="Cv Button" id="popover-cv-bottom" data-template="popover-cv" class="z-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-4 bg-berry hover:bg-berry active:bg-berry flex h-12 justify-center p-3 rounded-full text-center text-latte w-12">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        </button>

        <button aria-label="Contact button" id="popover-contact-bottom" data-template="popover-contact" class="z-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-4 bg-berry hover:bg-berry active:bg-berry flex h-12 justify-center p-3 rounded-full text-center text-latte w-12">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
        </button>
    </nav>
</template>

<script setup>
const props = defineProps({
    isDesktop: {
        type: Boolean,
        default: false
    }
})
</script>