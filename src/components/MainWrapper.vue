<template>
    <div class="main-wrapper">
    <div class="green-catalog">
       
    <p class="p-1">Catalog</p>

    </div>
       
    <v-header/>
        
        <keep-alive>
            <router-view></router-view> 
        </keep-alive>

    </div>

</template>

<script>
import vHeader from '../components/layout/vHeader'

    export default {
    name: "MainWrapper",
    components: {
        vHeader
    },
    computed: {},
}
</script>


<style lang="sass">
@import '../assets/styles/main'

.main-wrapper
    max-width: 900px
    margin: 0 auto
    text-align: center
    font-size: 15px
    flex-direction: column
    

.p-1
    font-size: 27px
    color: $text
    margin: 7px
    
    
.green-catalog
    background-color: $green
    width: 700px
    margin-left: 100px
    border-radius: 1%
</style>