<template>
    <div class="flex h-screen">
            <div class="absolute right-[-34%] top-[-10%]">
                <img src="../assets/img/plant-pointy.svg" class="w-[280px] h-[207px] animate-swaying8" alt="" />
            </div>

            <div class="absolute right-[5%] top-[-10%]">
                <img src="../assets/img/plant-leafs.svg" class="w-[240px] h-[150px] animate-swaying7" alt="" />
            </div>

            <div class="absolute left-[25%] bottom-[-10%]">
                <img src="../assets/img/plant-round-leafs.svg" class="w-[130px] h-[190px] animate-swaying8" alt="" />
            </div>

            <div class="absolute left-0 bottom-[-10%]">
                <img src="../assets/img/plant-pointy-leafs-up.svg" class="w-[130px] h-[263px] animate-swaying6" alt="" />
            </div>

            <div class="absolute left-[-5%] bottom-[10%]">
                <img src="../assets/img/plant-simple-berries.svg" class="w-[80px] h-[131px] animate-swaying6" alt="" />
            </div>

            <div class="absolute top-[1%] left-[7%]">
                <img src="../assets/img/grass-speck.svg" class="w-[50px] h-[58px] animate-skew direction-alternate" alt="" />
            </div>

            <div class="absolute right-[8%] top-[11%]">
                <img src="../assets/img/grass-speck-2.svg" class="w-[50px] h-[62px] animate-skew direction-alternate" alt="" />
            </div>

            <div class="absolute right-[10%] bottom-[15%]">
                <img src="../assets/img/grass-speck-3.svg" class="w-[50px] h-[44px] animate-skew direction-alternate" alt="" />
            </div>

            <div class="m-auto text-center z-[100]">
                <Nav />

                <h1 class="font-sugar-cane text-7xl text-white mb-4 z-50">Happy Spring!</h1>
                <p class="px-6 font-quicksand text-xl text-white z-50">Welcome to my portfolio! Click the buttons to find out more about me!</p>
                <Copyright />

            </div>
        </div>
</template>
<script setup>
import Nav from "../components/Nav.vue";
import Copyright from "../components/Copyright.vue";
</script>