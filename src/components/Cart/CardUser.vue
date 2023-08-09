<template>
    <div class="card-user">
    <p class="p-cart">Cart:</p>
    <div class="card_total">
<p>Total:</p>
<p class="p-10">{{ cardTotal | toFix | formattedPrice }}грн</p>
</div>
<p v-if="!card_data.length">There no products in card...</p>
    <router-link 
    :to="{name: 'catalog'}">
    <div class="link_card1">Back to catalog</div>
    </router-link>

<CardItem
v-for="(item, index) in card_data" 
:key="item.article"
:card_item_data="item"
@deleteFromCard="deleteFromCard(index)"
@increment="incrementItem(index)"
@decrement="decrementItem(index)"
/>


    </div>
</template>

<script>
import CardItem from '../Cart/CardItem.vue';
import { mapActions } from 'vuex';
import toFix from '../../filters/toFix'
import formattedPrice from '@/filters/priceFormat';

    export default {
        name: 'CardUser',
        components: {
            CardItem,
            toFix,
            formattedPrice
        },
        props: {
            card_data: {

            type: Array,
            default() {
            return []
          }
            }
        },
        filters: {
           toFix,
           formattedPrice
        },
       methods: {
        ...mapActions([
            'DELETE_FROM_CARD',
            'DECREMENT_ITEM',
            'INCREMENT_ITEM'
        ]),
        decrementItem(index) {
            this.DECREMENT_ITEM(index)
        },
        incrementItem(index) {
            this.INCREMENT_ITEM(index)
        },
        deleteFromCard(index) {
            this.DELETE_FROM_CARD(index)
        },
        
       },
       computed: {
        cardTotal() {
         let result = [];

         if(this.card_data.length) {
            for (let item of this.card_data) {
          result.push(item.price * item.quantity);
          }

          result = result.reduce(function (sum, el) {
          return sum + el;
          }, 0);
          return result;
         }

         else return 0
          
         }
         },
      }
</script>

<style lang="sass">
@import '../../assets/styles/main'

.card_total
    position: fixed
    top: 70px
    right: 5px
    padding: 5px
    color: $text
    margin-right: 30px
    margin-top: 20px
    border: 1px solid
    background-color: $green
    border-radius: 8%

.link_card1
    position: fixed
    top: 8px
    right: 5px
    padding: 5px
    color: $text
    margin-right: 30px
    margin-top: 20px
    border: 1px solid
    background-color: $green
    width: 130px
    border-radius: 8%
    font-size: 16px

.p-cart
    background-color: $green
    width: 300px
    color: $text
    margin-left: 250px
    border-radius: 10px
</style>