<template>
    <Plant
            v-for="(bgImage, index) in plants"
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
import Plant from "../components/Plant.vue";
import {computed} from "vue";

const plants = computed(() => [
    {
        image: "/assets/img/plant-berry.svg",
        left: "left-[15%]",
        top: "top-[-9%]",
        tripleXlTop: "3xl:top-[-10px]",
        zIndex: "10",
        width: "w-[250px]",
        height: "h-[194px]",
        animation: "animate-swaying7"
    },
    {
        image: "/assets/img/plant-pointy-leafs.svg",
        left: "left-[2%]",
        top: "top-[-10%]",
        tripleXlTop: "3xl:top-[-2%]",
        zIndex: "10",
        width: "w-[300px]",
        height: "h-[221px]",
        animation: "animate-swaying8"
    },
    {
        image: "/assets/img/plant-bubbly.svg",
        left: "left-[-2%]",
        top: "top-[-20%]",
        tripleXlTop: "3xl:top-[-3%]",
        width: "w-[200px]",
        height: "h-[352px]",
        animation: "animate-swaying6"
    },
    {
        image: "/assets/img/plant-pointy.svg",
        right: "right-[5%]",
        top: "top-[-10%]",
        tripleXlTop: "3xl:top-[-1%]",
        tripleXlRight: "3xl:right-[-3%]",
        width: "w-[300px]",
        height: "h-[221px]",
        zIndex: "10",
        animation: "animate-swaying8"
    },
    {
        image: "/assets/img/plant-round.svg",
        right: "right-[-10%]",
        top: "top-[-10%]",
        tripleXLTop: "3xl:top-[-4%]",
        tripleXlRight: "3xl:right-[3%]",
        width: "w-[300px]",
        height: "h-[190px]",
        zIndex: "10",
        animation: "animate-swaying6"
    },
    {
        image: "/assets/img/plant-leafs.svg",
        right: "right-[15%]",
        top: "top-[-10%]",
        tripleXLTop: "3xl:top-[-1%]",
        tripleXlRight: "3xl:right-[10%]",
        width: "w-[300px]",
        height: "h-[188px]",
        zIndex: "10",
        animation: "animate-swaying7"
    },
    {
        image: "/assets/img/plant-round-leafs.svg",
        left: "left-[5%]",
        bottom: "bottom-[-10%]",
        tripleXlBottom: "3xl:bottom-0",
        width: "w-[150px]",
        height: "h-[220px]",
        animation: "animate-swaying8"
    },
    {
        image: "/assets/img/plant-pointy-leafs-up.svg",
        left: "left-[5%]",
        bottom: "bottom-[-10%]",
        tripleXlBottom: "3xl:bottom-[-2%]",
        tripleXlLeft: "3xl:left-0",
        width: "w-[150px]",
        height: "h-[304px]",
        animation: "animate-swaying6"
    },
    {
        image: "/assets/img/plant-simple-berries.svg",
        left: "left-[-2%]",
        bottom: "bottom-[25%]",
        tripleXlBottom: "3xl:bottom-[10%]",
        tripleXlLeft: "3xl:left-[-1%]",
        width: "w-[100px]",
        height: "h-[164px]",
        animation: "animate-swaying6",
        zIndex: "10"
    }
])
</script>