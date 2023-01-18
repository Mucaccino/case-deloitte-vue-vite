<script setup lang="ts">
    import { ref } from 'vue';

    const loading = ref(null)
    
    let page = 0

    const props = defineProps<{ 
        per_page: number,
        callback: Function 
    }>()
   
    window.onscroll = () => {
        if(loading.value) return

        let bottomOfWindow = Math.ceil(document.documentElement.scrollTop + window.innerHeight) >= document.documentElement.offsetHeight

        if (bottomOfWindow) {
            loadCallback();
        }
    };

    const loadCallback = async() => {
        loading.value = true

        page++
        await props.callback(page, props.per_page);

        loading.value = false
    }

    // first call
    loadCallback()
</script>

<template>
    <slot></slot>
    <slot name="loading" v-if="loading"></slot>
</template>

<style lang="scss">

</style>