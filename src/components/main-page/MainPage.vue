<template>
    <div class="main-page">
     <h1>Online-shop</h1>
     <p>
     
     <router-link 
     :to="{name: 'catalog'}"
     >
     to Catalog
     </router-link>
     
     </p>
    </div>
</template>

<script>
    export default {
        name: 'mainPage'
    }
</script>

<style lang="sass" scoped>

</style>