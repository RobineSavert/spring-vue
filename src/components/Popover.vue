<template>
   <div class="tippy-popper z-50" :id="id">
        <div class="flex flex-col items-center rounded">
            <div class="flex items-center w-full justify-center">
                <span class="text-5xl font-sugar-cane">
                    <slot name="title"></slot>
                </span>
            </div>
            <div class="w-full px-2">

                    <slot name="stars"></slot>


                    <slot name="body"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        id: {
            type: String,
            required: true
        },
    })
</script>