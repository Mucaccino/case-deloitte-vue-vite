<script setup lang="ts">
import PageHeader from './components/PageHeader.vue'
import CardItem from './components/CardItem.vue'
</script>

<template>
  <PageHeader />
  <div class="cards">
    <CardItem :data="{title:'título', body:'corpo'}" />
  </div>
</template>

<style scoped>

</style>
