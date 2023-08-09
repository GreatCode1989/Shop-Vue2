<template>
  <div class="catalog-item">
    <PopupMenu
      v-if="isInfoPopup"
      @closePopup="closeInfoPopup"
      rightBtnTitle="Add to cart"
      :popupTitle="product_data.name"
      @rightBtnAction="addToCard"
    >
      <img
        :src="require('../../assets/img/' + product_data.image)"
        :alt="product_data.name"
        class="img-2"
      />
      <div class="pop-1">
        <p class="price-item">{{ product_data.name }}</p>
        <p class="price-item">
          Price: {{ product_data.price | toFix | formattedPrice }}грн
        </p>
        <p class="price-item">Category: {{ product_data.category }}</p>
      </div>
    </PopupMenu>

    <img
      :src="require('../../assets/img/' + product_data.image)"
      :alt="product_data.name"
      class="img-1"
    />

    <p class="name-item">{{ product_data.name }}</p>
    <p class="price-item">
      Price: {{ product_data.price | toFix | formattedPrice }}грн
    </p>

    <button class="show-info" @click="showPopupInfo">Show info</button>

    <button class="add-cart" @click="addToCard">Add to cart</button>
  </div>
</template>

<script>
import PopupMenu from "../popup/PopupMenu.vue";
import toFix from "../../filters/toFix";
import formattedPrice from "@/filters/priceFormat";

export default {
  name: "CatalogItem",
  components: {
    PopupMenu,
    toFix,
    formattedPrice,
  },
  data() {
    return {
      isInfoPopup: false,
    };
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    toFix,
    formattedPrice,
  },
  methods: {
    showPopupInfo() {
      this.isInfoPopup = true;
    },
    closeInfoPopup() {
      this.isInfoPopup = false;
    },
    addToCard() {
      this.$emit("addToCard", this.product_data);
    },
  },
};
</script>

<style lang="sass">
@import '../../assets/styles/main'


.catalog-item
    display: flex
    flex-direction: column
    flex-basis: 25%
    padding: 16px
    margin: 16px
    box-shadow: 1px 1px 3px $violet
    align-items: center
    justify-content: center

.img-1
    width: 100px

.img-2
    padding-bottom: 5px
    width: 110px

.name-item
    margin: 10px
    margin-bottom: 5px

.price-item
    margin: 10px
    margin-top: 5px

.show-info
    padding: 2px 10px
    margin-bottom: 5px

.pop-1
    margin-left: 20px
</style>
