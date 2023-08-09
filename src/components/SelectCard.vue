<template>
    <div class="select-card">
    <p class="sel-p2"
    @click="areOptionsVisible = !areOptionsVisible"
    >
    {{ selected }}
    </p>
    
    <div 
    class="options"
    v-if="areOptionsVisible || isExpanded"
    >
    
    <p class="sel-p"
    v-for="option in options" 
    :key="option.value"
    @click="selectOption(option)"
    >
    {{  option.name }}
    </p>

    </div>
    </div>
</template>

<script>
    export default {
        name: 'select-card',
        props: {
            options: {
                type: Array,
                default() {
                    return []
                }
            },
            selected: {
                type: String,
                default: ''
            },
            isExpanded: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                areOptionsVisible: false
            }
        },
        methods: {
            selectOption(option) {
                this.$emit('select', option)
                this.areOptionsVisible = false
            },
            hideSelect() {
                this.areOptionsVisible = true
            }
        },
    }
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'

.sel-p
    border: 1px solid
    background-color: $green
    border-radius: 10%
    margin: 1px
    margin-bottom: 4px
.sel-p2
    margin-top: 3px
    font-size: 16px

</style>