<template>
    <div class="absolute" :class="[left, top, right, bottom, tripleXLTop, tripleXLRight, tripleXLLeft, tripleXLBottom, 'z-' + zIndex]">
        <img :src="image" alt="" :class="[width, height, lgWidth, lgHeight]" class="animate-skew direction-alternate" />
    </div>
</template>

<script setup>
const props = defineProps({
    left: {
        type: String,
        default: ''
    },
    right: {
        type: String,
        default: ''
    },
    top: {
        type: String,
        default: ''
    },
    bottom: {
        type: String,
        default: ''
    },
    tripleXLTop: {
        type: String,
        default: ''
    },
    tripleXLRight: {
        type: String,
        default: ''
    },
    tripleXLLeft: {
        type: String,
        default: ''
    },
    tripleXLBottom: {
        type: String,
        default: ''
    },
    zIndex: {
        type: String,
        default: ''
    },
    image: {
        type: String
    },
    width: {
        type: String
    },
    height: {
        type: String
    },
    lgWidth: {
        type: String
    },
    lgHeight: {
        type: String
    }
})
</script>