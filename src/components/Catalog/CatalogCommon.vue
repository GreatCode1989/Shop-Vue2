<template>
    <div class="catalog-common">

    <router-link 
    :to="{name: 'card', params: {card_data: CARD}}">
    <div class="link_card">Cart: {{ CARD.length}}</div>
    </router-link>

    
    
        <CatalogItem
      v-for="product in this.filteredProducts"
      :key="product.article"
      :product_data="product"
      @addToCard="addToCard"
    />
    

    <div class="filters">
      <SelectCard
     class="select-card1"
     :selected="selected"
     :options="categories"
     @select="sortByCategories"
     :isExpanded="IS_MOBILE"
     />

     <div class="range-slider">
    
    <input 
    class="input-max"
    type="range" 
    min="100" 
    max="10000" 
    step="10"
    v-model.number="minPrice"
    @change="setRangeSlider"
    >
    
    <input 
    class="input-min"
    type="range" 
    min="100" 
    max="10000" 
    step="10"
    v-model.number="maxPrice"
    @change="setRangeSlider"
    >

    </div>
    <div class="range-value">
    <p class="p-min">Min: {{  minPrice }}грн</p>
    <p class="p-max">Max: {{  maxPrice }}грн</p> 
    </div>
    </div>

    
 
    </div>
</template>

<script>
import CatalogItem from '../Catalog/CatalogItem.vue'
import { mapActions, mapGetters } from 'vuex'
import SelectCard from '../SelectCard.vue'

    export default {
        name: 'CatalogCommon',
        components: {
            CatalogItem,
            SelectCard
        },
        data() {
            return {
                 categories: [
                  {name: 'Man', value: 'M'},
                  {name: 'Woman', value: 'W'},
                  {name: 'All', value: 'All'}
                 ],
                 selected: ' Select:',
                 sortedProducts: [],
                 minPrice: 0,
                 maxPrice: 10000
            }
        },
        computed: {
          ...mapGetters([
            'PRODUCTS',
            'CARD',
            'IS_MOBILE',
            'IS_DESKTOP',
            'SEARCH_VALUE'
          ]),
          filteredProducts() {
            if(this.sortedProducts.length) {
              return this.sortedProducts
            }
            else {
              return this.PRODUCTS
            }
          }
        },
        methods: {
          ...mapActions([
             'GET_PRODUCTS_FROM_API',
             'ADD_TO_CARD'
          ]),
          addToCard(data) {
          this.ADD_TO_CARD(data)
          },
          setRangeSlider() {
            if(this.minPrice > this.maxPrice) {
              let tmp = this.maxPrice
              this.minPrice = this.maxPrice
              this.minPrice = tmp
            }
            this.sortByCategories();
          },
          sortByCategories(category) {
            let vm = this
            this.sortedProducts = [...this.PRODUCTS]
            this.sortedProducts = this.sortedProducts.filter(function (item) {
              return item.price >= vm.minPrice && item.price <= vm.maxPrice 
            })
            if(category) {
              this.sortedProducts = this.sortedProducts.filter(function (e) {
                vm.selected === category.name
                return e.category === category.name
            })
          }
        },
          sortProductSearchValue(value) {
            this.sortedProducts = [...this.PRODUCTS]
        if (value) {
          this.sortedProducts = this.sortedProducts.filter(function (item) {
            return item.name.toLowerCase().includes(value.toLowerCase())
          })
        } else {
          this.sortedProducts = this.PRODUCTS;
        }
      }
    },
    watch: {
      SEARCH_VALUE() {
        this.sortProductSearchValue(this.SEARCH_VALUE);
      }
    },
        mounted() {
          this.GET_PRODUCTS_FROM_API()
          .then((response) => {
            if(response.data) {
              console.log('Data arrived!')
              this.sortProductSearchValue(this.SEARCH_VALUE);
              this.sortByCategories();
            }
          })
          
        },
    }
</script>

<style lang="sass">
@import '../../assets/styles/main'

.catalog-common
    display: flex
    flex-wrap: wrap
    justify-content: center
    align-items: center
    padding: 2px

.link_card
    position: fixed
    top: 8px
    right: 5px
    padding: 5px
    color: $text
    margin-right: 30px
    margin-top: 20px
    border: 1px solid
    background-color: $green
    width: 70px
    border-radius: 8%
    font-size: 16px

.select-card1
    position: fixed
    top: 8px
    right: 110px
    width: 70px
    height: 30px
    color: $text
    margin-right: 30px
    margin-top: 20px
    border: 2px solid
    cursor: pointer
    background-color: $green
    border-radius: 10%

.filters 
    display: flex
    justify-content: space-between
    align-items: center
    margin-left: 900 px

.range-slider 
    width: 200px
    margin: auto 16px
    text-align: center
    position: relative
  

.range-slider svg, .range-slider input[type=range] 
    position: absolute
    left: 0
    bottom: 0
    width: 200px

input[type=range]::-webkit-slider-thumb 
    z-index: 2
    position: relative
    top: 2px
    margin-top: -7px
  
.p-min
    color: $blue

.p-max
    color: $blue
 
</style>