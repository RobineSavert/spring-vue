<template>
    <Plant v-for="(bgImage, index) in plants"
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
import plantBerry from "/src/assets/img/plant-berry.svg"
import plantPointyLeafs from "/src/assets/img/plant-pointy-leafs.svg"
import plantBubbly from "/src/assets/img/plant-bubbly.svg"
import plantPointy from "/src/assets/img/plant-pointy.svg"
import plantRound from "/src/assets/img/plant-round.svg"
import plantLeafs from "/src/assets/img/plant-leafs.svg"
import plantRoundLeafs from "/src/assets/img/plant-round-leafs.svg"
import plantPointyLeafsUp from "/src/assets/img/plant-pointy-leafs-up.svg"
import plantSimpleBerries from "/src/assets/img/plant-simple-berries.svg"
import {computed} from "vue";

const plants = computed(() => [
    {
        image: plantBerry,
        left: "left-[15%]",
        top: "top-[-9%]",
        tripleXlTop: "3xl:top-[-10px]",
        zIndex: "10",
        width: "w-[250px]",
        height: "h-[194px]",
        animation: "animate-swaying7"
    },
    {
        image: plantPointyLeafs,
        left: "left-[2%]",
        top: "top-[-10%]",
        tripleXlTop: "3xl:top-[-2%]",
        zIndex: "10",
        width: "w-[300px]",
        height: "h-[221px]",
        animation: "animate-swaying8"
    },
    {
        image: plantBubbly,
        left: "left-[-2%]",
        top: "top-[-20%]",
        tripleXlTop: "3xl:top-[-3%]",
        width: "w-[200px]",
        height: "h-[352px]",
        animation: "animate-swaying6"
    },
    {
        image: plantPointy,
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
        image: plantRound,
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
        image: plantLeafs,
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
        image: plantRoundLeafs,
        left: "left-[5%]",
        bottom: "bottom-[-10%]",
        tripleXlBottom: "3xl:bottom-0",
        width: "w-[150px]",
        height: "h-[220px]",
        animation: "animate-swaying8"
    },
    {
        image: plantPointyLeafsUp,
        left: "left-[5%]",
        bottom: "bottom-[-10%]",
        tripleXlBottom: "3xl:bottom-[-2%]",
        tripleXlLeft: "3xl:left-0",
        width: "w-[150px]",
        height: "h-[304px]",
        animation: "animate-swaying6"
    },
    {
        image: plantSimpleBerries,
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