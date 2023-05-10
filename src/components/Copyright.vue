<template>
    <div v-if="isDesktop" class="absolute left-[1%] lg:left-[16%] bottom-[2%] 3xl:left-[10%] font-quicksand text-white font-extrabold text-xs 3xl:text-base">❥ Created with Tailwind + WebPack</div>
    <div v-else class="absolute right-[2%] bottom-[1%] font-quicksand text-white font-extrabold text-xs">❥ Created with Tailwind + WebPack</div>
</template>

<script setup>
const props = defineProps({
    isDesktop: {
        type: Boolean,
        default: false
    },
})
</script>