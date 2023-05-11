<template>
  <Nav :is-desktop="true" />

        <PlantView />

        <GrassView />

        <div class="flex md:flex-col md:top-[20%] md:left-[10%] lg:top-[31%] lg:left-[10%] 3xl:left-[3%] absolute w-[350px] lg:w-[400px] 3xl:w-[650px] text-center z-10">
            <h1 class="font-sugar-cane text-7xl text-white 3xl:text-9xl">Happy Spring!</h1>
            <p class="font-quicksand text-xl text-white 3xl:text-4xl">Welcome to my world, click around & have a lovely time!</p>
        </div>

        <div class="bg-[right_-8rem_bottom_0rem] lg:bg-[right_-12rem_bottom_-2rem] xl:bg-[right_-15rem_bottom_-3rem] bottom-0 right-0 w-[1000px] h-[1300px] lg:w-[900px] lg:h-[1000px] xl:w-[1100px] xl:h-[1200px] 2xl:w-[1260px] 2xl:h-[1890px] 3xl:w-[1566px] 3xl:h-[2400px] 4xl:w-[2000px] 4xl:h-[2400px]  bg-no-repeat bg-[url('/src/assets/img/blanky.svg')] absolute">
        </div>

        <ItemView />

        <PopoverItems />

        <Copyright :is-desktop="true" />


</template>
<script setup>
import Nav from "../components/Nav.vue"
import Copyright from "../components/Copyright.vue";
import GrassView from "./GrassView.vue";
import PlantView from "./PlantView.vue";
import ItemView from "./ItemView.vue";
import PopoverItems from "./PopoverItems.vue";
</script>


