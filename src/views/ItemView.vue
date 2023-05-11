<template>
    <Item v-for="(bgImage, index) in items"
            :key="index"
            :image="bgImage.image"
            :left="bgImage.left"
            :top="bgImage.top"
            :right="bgImage.right"
            :bottom="bgImage.bottom"
            :lg-width="bgImage.lgWidth"
            :lg-height="bgImage.lgHeight"
            :xl-width="bgImage.xlWidth"
            :xl-height="bgImage.xlHeight"
            :xl-top="bgImage.xlTop"
            :xl-right="bgImage.xlRight"
            :xl-bottom="bgImage.xlBottom"
            :xl-left="bgImage.xlLeft"
            :double-x-l-height="bgImage.doubleXLHeight"
            :double-x-l-width="bgImage.doubleXLWidth"
            :double-x-l-top="bgImage.doubleXLTop"
            :double-x-l-right="bgImage.doubleXLRight"
            :double-x-l-bottom="bgImage.doubleXLBottom"
            :double-x-l-left="bgImage.doubleXLLeft"
            :triple-x-l-top="bgImage.tripleXlTop"
            :triple-x-l-right="bgImage.tripleXlRight"
            :triple-x-l-left="bgImage.tripleXlLeft"
            :triple-x-l-bottom="bgImage.tripleXLBottom"
            :triple-x-l-height="bgImage.tripleXLHeight"
            :triple-x-l-width="bgImage.tripleXLWidth"
            :z-index="bgImage.zIndex"
            :width="bgImage.width"
            :height="bgImage.height"
    />
</template>

<script setup>
import Item from "../components/Item.vue";
import flowerBouquet from "/src/assets/img/flower-bouquet.svg"
import plate from "/src/assets/img/plate.svg"
import sunglasses from "/src/assets/img/sunglasses.svg"
import guitar from  "/src/assets/img/guitar.svg"
import cheese from  "/src/assets/img/cheese.svg"
import {computed} from "vue";

const items = computed(() => [
    {
        image: flowerBouquet,
        bottom: "bottom-[-5%]",
        right: "right-[-5%]",
        width: "w-[200px]",
        xlWidth: "xl:w-[250px]",
        doubleXLWidth: "2xl:w-[350px]",
        lgHeight: "lg:h-[253px]",
        lgWidth: "lg:w-[100px]",
    },
    {
        image: plate,
        left: "left-[43%]",
        lgLeft: "lg:left-[41%]",
        xlLeft: "xl:left-[47%]",
        doubleXlLeft: "2xl:left-[43%]",
        bottom: "bottom-[7%]",
        doubleXlBottom: "2xl:bottom-[2%]",
        width: "w-[200px]",
        doubleXlWidth: "2xl:w-[350px]",
    },
    {
        image: sunglasses,
        right: "right-[35%]",
        bottom: "bottom-[12%]",
        lgRight: "lg:right-[25%]",
        lgBottom: "lg:bottom-[25%]",
        xlRight: "xl:right-[30%]",
        xlBottom: "xl:bottom-[5%]",
        width: "w-[80px]",
        lgWidth: "lg:w-[125px]",
        doubleXlWidth: "2xl:w-[150px]",
    },
    {
        image: guitar,
        right: "right-[2%]",
        bottom: "bottom-[1%]",
        width: "w-[300px]",
        lgWidth: "lg:w-[325px]",
        xlWidth: "xl:w-[400px]",
        doubleXlWidth: "2xl:w-[500px]",
    },
    {
        image: cheese,
        right: "right-[45%]",
        bottom: "bottom-[32%]",
        mdRight: "md:right-[50%]",
        mdBottom: "md:bottom-[20%]",
        lgRight: "lg:right-[42%]",
        lgBottom: "lg:bottom-[25%]",
        xlRight: "xl:right-[37%]",
        xlBottom: "xl:bottom-[22%]",
        width: "w-[75px]",
        mdWidth: "md:w-[125px]",
        lgWidth: "lg:w-[75px]",
        doubleXlWidth: "2xl:w-[180px]",
        doubleXlBottom: "2xl:bottom-[24%]",
    },
]);
</script>