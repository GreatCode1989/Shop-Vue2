<template>
    <div class="v-header">
    
    <router-link 
    :to="{name: 'mainPage'}"
    >
    <img class="img-1" src="../../assets/img/50px.png" alt="">
    </router-link>

    
    
    <div class="field">
        
    <input 
    type="text"
    class="search-feild"
    placeholder="Search"
    v-model="searchValue"
    >
    
    <button class="search-btn" >
    <i class="material-icons" @click="search(searchValue)">search</i>
    </button>
    
    </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'v-header',
        data() {
            return {
                searchValue: ''
            }
        },
        computed: {
            ...mapGetters([
               'SEARCH_VALUE',
            ])
        },
        methods: {
            ...mapActions([
                'GET_SEARCH_VUEX'
            ]),
            async search(value) {
            try {
            await this.GET_SEARCH_VUEX(value);
               console.log('GET_SEARCH_VUEX вызван успешно');
            if (this.$route.path !== '/catalog') {
               this.$router.push('/catalog');
            }
     }       catch (error) {
                console.error('Ошибка при вызове GET_SEARCH_VUEX:', error);
           }
  }
}
    }
            
        
    
</script>

<style lang="sass" scoped>
@import '../../assets/styles/main'
.v-header
    display: flex
    position: fixed
    justify-content: space-between
    align-items: center
    padding: 10px
    right: 210px
    top: 200px
    width: 50px

.img-1
    width: 35px
    padding: 3px
    padding-bottom: 33px

.search-field
    padding: 8px
    
.search-btn
    padding: 1px 1px
    margin: 5px
    height: 23px
    width: 20px
    background: transparent
    border: none
    margin-left: 90px

.material-icons
    font-size: 18px
    
</style>