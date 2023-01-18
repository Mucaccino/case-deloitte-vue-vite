<script setup lang="ts">
import PageHeader from './components/PageHeader.vue'
import InfiniteScroll from './components/InfiniteScroll.vue';
import Grid from './components/Grid.vue'
import PostsAPI from './api/resources/Posts.js'
import { ref } from 'vue';

const posts = ref([])
const loadPosts = async(page, per_page) => {
  console.log('loadPosts(', page, per_page, ')')
  let data = await PostsAPI.index(page, per_page)
  posts.value = posts.value.concat(data)
};
</script>

<template>
  <PageHeader />
  <InfiniteScroll :callback="loadPosts" :per_page="20">
    <Grid :items="posts" />
    <loading>
      Aguarde...
    </loading>
  </InfiniteScroll>
</template>

<style scoped>

</style>
