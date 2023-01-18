<template>
    <div class="icon-loading"></div>
</template>

<style scoped lang="scss">
.icon-loading {
    width: 3rem;
    height: 3rem;
    border: 5px solid #f3f3f3;
    border-top: 6px solid #cddc39;
    border-radius: 100%;
    margin: auto;
    animation: spin 1s infinite linear;
}
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>