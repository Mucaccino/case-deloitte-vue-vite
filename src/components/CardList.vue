<script setup lang="ts">
import CardItem from './CardItem.vue';
import { defineProps } from 'vue';

defineProps<{ items: object }>()
</script>

<template>
    <div class="cards">
        <CardItem :id="`card_${index}`" v-for="(item, index) in items">            
            <h3>{{ item[`title`] }}</h3>
            <p>{{ item[`body`] }}</p>
            <small>{{ index + 1 }}</small>
        </CardItem>
    </div>
</template>

<style scoped lang="scss">
.cards {
    display: grid;
    grid-auto-rows: auto;
    row-gap: 1em;
}
</style>