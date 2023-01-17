<script setup lang="ts">
import PageHeader from './components/PageHeader.vue'
import CardList from './components/CardList.vue'
import { ref } from 'vue';

const data = ref(null)

data.value = [{title:'a', body:'a'}, {title:'b', body:'b'}]
</script>

<template>
  <PageHeader />
  <CardList :items="data" />
</template>

<style scoped>

</style>
