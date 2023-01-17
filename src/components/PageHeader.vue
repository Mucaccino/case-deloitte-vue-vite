<script setup lang="ts">
import LogoDeloitte from './LogoDeloitte.vue';
</script>

<template>
    <header>
        <a class="logo" href="http://www.deloitte.com/" target="_blank"><logo-deloitte /></a>
        <h1>Case Desenvolvedor Front-End</h1>
        <p>Utilize o Framework Vue.js para criar uma homepage que contenha uma lista (contendo no máximo 20 elementos por vez) com Paginação Infinite Scroll com Cards, retornando as informações de uma API de sua escolha.</p>
    </header>
</template>

<style scoped lang="scss">
.logo {
    display: block;
    max-width: 18em;
    margin: auto;

    &:hover {
        filter: drop-shadow(0 0 2em #ffffffaa);
    }
}
</style>