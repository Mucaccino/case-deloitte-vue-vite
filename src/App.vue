<script setup lang="ts">
import PageHeader from './components/PageHeader.vue'
import InfiniteScroll from './components/InfiniteScroll.vue';
import ItemList from './components/ItemList.vue'
import PostsAPI from './api/resources/Posts.js'
import { ref } from 'vue';
import IconLoading from './components/IconLoading.vue';

// options
let isGrid:boolean = true

// exposed call-api
let posts = ref([])
const loadPosts = async(page, per_page) => {
  console.log('loadPosts(', page, per_page, ')')
  posts.value = posts.value.concat(await PostsAPI.index(page, per_page))
};
</script>

<template>
  <PageHeader />
  <InfiniteScroll :callback="loadPosts" :per_page="20">
    <ItemList :items="posts" :isGrid="isGrid"/>
    <loading class="loading">
      <IconLoading />
    </loading>
  </InfiniteScroll>
</template>

<style>
body {
  place-items: start;
}
header {
  padding: 2em 0;
}
.loading {
  display: flex;
  margin: 2em auto;
}
</style>
