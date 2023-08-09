<template>
  <div class="popup-wraper" ref="popup-wrapper">
    <div class="popup-menu">
      <div class="popup_header">
        <span>{{ popupTitle }}</span>
        <span>
          <i class="material-icons" @click="closePopup"> close </i>
        </span>
      </div>

      <div class="popup_content">
        <slot></slot>
      </div>
      <div class="popup_footer">
        <button class="close-modal" @click="closePopup">Close</button>

        <button class="add-to-cart" @click="rightBtnAction">
          {{ rightBtnTitle }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupMenu",
  props: {
    rightBtnTitle: {
      type: String,
      default: "ok",
    },
    popupTitle: {
      type: String,
      default: "",
    },
  },
  methods: {
    rightBtnAction() {
      this.$emit("rightBtnAction");
    },
    closePopup() {
      this.$emit("closePopup");
    },
  },
  mounted() {
    let vm = this;
    document.addEventListener("click", function (item) {
      if (item.target === vm.$refs["popup-wrapper"]) {
        vm.closePopup();
      }
    });
  },
};
</script>

<style lang="sass">
@import '../../assets/styles/main'

.popup-menu
    position: fixed
    top: 93px
    width: 300px
    box-shadow: 1px 1px 3px $violet
    left: 880px
    background-color: $green
    color: #fff

.popup_header
    display: flex
    justify-content: space-between
    align-items: center

.popup_content
    display: flex
    justify-content: center
    align-items: center

.popup_footer
    display: flex
    justify-content: space-between
    align-items: center

.add-to-cart
    padding: 8px
    color: $grey

.close-modal
    background-color: $violet
    padding: 8px
    color: $grey

.close-modal:hover
    background-color: $red

.material-icons
    cursor: pointer
    color: $violet

.popup_header
    padding: 7px

.popup-wraper
    display: flex
    position: absolute
    justify-content: center
    align-items: center
    right: 0
    left: 0
    top: 0
    bottom: 0
    background: rgba(64,64,64, .4)
    width: full
    height: full
</style>
