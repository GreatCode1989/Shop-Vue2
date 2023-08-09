<template>
  <div class="app">
    <MainWrapper/>
  
  </div>
</template>

<script>
 import MainWrapper from '../src/components/MainWrapper.vue'
 import { mapActions, mapGetters } from 'vuex'
 
export default {
 
  name: 'App',
  components: {
    MainWrapper,
  },
  computed: {
    ...mapGetters([
       'IS_MOBILE',
       'IS_DESKTOP'
  ])
  },
  methods: {
    ...mapActions([
      'SET_MOBILE',
      'SET_DESKTOP'
    ])
  },
  mounted() {
    let vm = this;
    window.addEventListener('resize', function () {
      if(window.innerWidth > 768) {
        vm.SET_DESKTOP()
        console.log(vm.SET_DESKTOP)
      }
      else {
        vm.SET_MOBILE()
        console.log(vm.SET_MOBILE)
      }
    })
  },
}
</script>

<style lang="sass">
@import './assets/styles/main'

.app
  display: flex
  align-items: center
  flex-direction: column
  margin: 5px
</style>
