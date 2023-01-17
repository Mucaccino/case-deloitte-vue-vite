<script setup lang="ts">
defineProps<{ title: string, body: string }>()

</script>

<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
.card {
    transition: 0.3s;
    border-radius: 5px;
    color: black;
    background-color: #fcffdb;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
</style>