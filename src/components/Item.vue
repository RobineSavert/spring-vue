<template>
    <div class="absolute" :class="[left, top, right, bottom, tripleXlTop, tripleXlRight, tripleXlLeft, tripleXLBottom, 'z-' + zIndex]">
        <img :src="image" :class="[width, height, lgWidth, lgHeight, xlWidth, xlHeight, doubleXLWidth, doubleXLHeight ]" />
    </div>
</template>

<script setup>
const props = defineProps({
    image: {
        type: String,
        required: true
    },
    left: {
        type: String,
        default: ""
    },
    top: {
        type: String,
        default: ""
    },
    right: {
        type: String,
        default: ""
    },
    bottom: {
        type: String,
        default: ""
    },
    lgWidth: {
        type: String,
        default: ""
    },
    lgHeight: {
        type: String,
        default: ""
    },
    xlWidth: {
        type: String,
        default: ""
    },
    xlHeight: {
        type: String,
        default: ""
    },
    xlTop: {
        type: String,
        default: ""
    },
    xlRight: {
        type: String,
        default: ""
    },
    xlBottom: {
        type: String,
        default: ""
    },
    xlLeft: {
        type: String,
        default: ""
    },
    doubleXLHeight: {
        type: String,
        default: ""
    },
    doubleXLWidth: {
        type: String,
        default: ""
    },
    doubleXLTop: {
        type: String,
        default: ""
    },
    doubleXLRight: {
        type: String,
        default: ""
    },
    doubleXLBottom: {
        type: String,
        default: ""
    },
    doubleXLLeft: {
        type: String,
        default: ""
    },
    tripleXLHeight: {
        type: String,
        default: ""
    },
    tripleXLWidth: {
        type: String,
        default: ""
    },
    tripleXlTop: {
        type: String,
        default: ""
    },
    tripleXlRight: {
        type: String,
        default: ""
    },
    tripleXLBottom: {
        type: String,
        default: ""
    },
    tripleXlLeft: {
        type: String,
        default: ""
    },
    zIndex: {
        type: Number,
        default: ""
    },
    width: {
        type: String,
        default: ""
    },
    height: {
        type: String,
        default: ""
    }
})
</script>