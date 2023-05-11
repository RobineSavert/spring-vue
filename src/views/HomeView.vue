<template>

    <section v-if="isMobile" class="overflow-hidden relative w-full h-screen justify-center bg-[url('/src/assets/img/bunting.svg')] bg-no-repeat bg-[top_18%_center]">
        <MobileView />
    </section>

    <section v-else class="overflow-hidden relative w-full h-screen justify-center">
        <DesktopView />
    </section>

    <Popovers />
</template>
<script setup>
import DesktopView from "./DesktopView.vue";
import MobileView from "./MobileView.vue";
import Popovers from "../components/Popovers.vue";
import { ref, computed, onMounted, onUnmounted } from 'vue';

const w = ref(window.innerWidth);

const isMobile = computed(() => {
    return w.value < 764;
});

const updateWindowWidth = () => {
    w.value = window.innerWidth;
};

onMounted(() => {
    window.addEventListener('resize', updateWindowWidth);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateWindowWidth);
});
</script>