<template>

    <Grass
            v-for="(bgImage, index) in grass"
            :key="index"
            :image="bgImage.image"
            :left="bgImage.left"
            :top="bgImage.top"
            :right="bgImage.right"
            :bottom="bgImage.bottom"
            :triple-x-l-top="bgImage.tripleXlTop"
            :triple-x-l-right="bgImage.tripleXlRight"
            :triple-x-l-left="bgImage.tripleXlLeft"
            :triple-x-l-bottom="bgImage.tripleXlBottom"
            :z-index="bgImage.zIndex"
            :width="bgImage.width"
            :height="bgImage.height"
            :animation="bgImage.animation"
    />
</template>
<script setup>
import Grass from "../components/Grass.vue";
import {computed} from "vue";
const grass = computed(() => [
    {
        image: "/assets/img/grass-speck.svg",
        top: "top-[50%]",
        left: "left-[8%]",
        width: "w-[50px]",
        lgHeight: "h-[116px]",
        lgWidth: "w-[100px]",
    },
    {
        image: "/assets/img/grass-speck-2.svg",
        top: "top-[15%]",
        left: "left-[10%]",
        width: "w-[50px]",
        lgHeight: "h-[124px]",
        lgWidth: "w-[100px]",
    },
    {
        image: "/assets/img/grass-speck-3.svg",
        top: "top-[15%]",
        right: "right-[10%]",
        width: "w-[50px]",
        lgHeight: "h-[88px]",
        lgWidth: "w-[100px]",
    },
    {
        image: "/assets/img/grass-speck-3.svg",
        top: "top-[15%]",
        left: "left-[25%]",
        width: "w-[50px]",
        lgHeight: "h-[88px]",
        lgWidth: "w-[100px]",
    },
    {
        image: "/assets/img/grass-speck-3.svg",
        top: "top-[15%]",
        bottom: "bottom-[15%]",
        width: "w-[50px]",
        lgHeight: "h-[88px]",
        lgWidth: "w-[100px]",
    },
    {
        image: "/assets/img/grass-speck-3.svg",
        top: "top-[35%]",
        left: "left-[15%]",
        width: "w-[50px]",
        lgHeight: "h-[88px]",
        lgWidth: "w-[100px]",
    },
    {
        image: "/assets/img/grass-speck-3.svg",
        top: "top-[15%]",
        bottom: "bottom-[5%]",
        width: "w-[50px]",
        lgHeight: "h-[88px]",
        lgWidth: "w-[100px]",
    },
    {
        image: "/assets/img/grass-speck.svg",
        top: "top-[40%]",
        left: "left-[38%]",
        width: "w-[50px]",
        lgHeight: "h-[116px]",
        lgWidth: "w-[100px]",
    },
    {
        image: "/assets/img/grass-speck-2.svg",
        top: "bottom-[23%]",
        left: "left-[15%]",
        width: "w-[50px]",
        lgHeight: "h-[124px]",
        lgWidth: "w-[100px]",
    },
    {
        image: "/assets/img/grass-speck-3.svg",
        bottom: "bottom-[15%]",
        left: "left-[25%]",
        width: "w-[50px]",
        lgHeight: "h-[124px]",
        lgWidth: "w-[100px]",
    },
])
</script>