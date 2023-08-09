<template>
    <div class="card-item">
    <img class="img-item"
    :src="require('../../assets/img/' + card_item_data.image)"
    alt="">

<div class="card-item-info">
   <p>{{ card_item_data.name }}</p>
   <p>{{ card_item_data.price | toFix | formattedPrice }}</p>
   <p>{{ card_item_data.article }}</p>
   </div>
   <div class="card-item-quantity">
   <p>Added:</p>
   <span class="span_0">
    <span class="span_1" @click="decrementItem">-</span>
    {{ card_item_data.quantity }}
    <span class="span_2" @click="incrementItem">+</span>
   </span>
   
</div>

<button @click="deleteFromCard">Delete</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import toFix from '../../filters/toFix'
import formattedPrice from '@/filters/priceFormat';

    export default {
        name: 'CardItem',
        components: {
            toFix,
            formattedPrice
        },
        props: {
           card_item_data: {
            type: Object,
            default() {
            return {}
        }
           }
        },
        filters: {
           toFix,
           formattedPrice
        },
        methods: {
            ...mapActions([
                
            ]),
            decrementItem() {
                this.$emit('decrement')
            },
            incrementItem() {
                this.$emit('increment')
            },
            deleteFromCard() {
                this.$emit('deleteFromCard')
            }
        },
        mounted() {
            this.$set(this.card_item_data, 'quantity', 1)
        },
    }
</script>

<style lang="sass">
@import '../../assets/styles/main'

.card-item
    display: flex
    flex-wrap: nowrap
    justify-content: space-around
    align-items: center
    padding: 16px
    margin: 16px
    box-shadow: 1px 1px 3px $violet
    width: 720px

.img-item
    max-width: 70px
   
.card-item-quantity
    padding: 15px

.card-item-info
    padding: 15px

.span_1
    cursor: pointer

.span_2
    cursor: pointer

.span_0
    font-size: 17px
</style>