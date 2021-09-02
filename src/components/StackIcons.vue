<template>
  <div class="stack">
    <slot></slot>
    <font-awesome-icon :icon="['fab', 'html5']" v-if="item.stack.html" />
    <font-awesome-icon :icon="['fab', 'css3-alt']" v-if="item.stack.css" />
    <font-awesome-icon :icon="['fab', 'sass']" v-if="item.stack.sass" />
    <img src="../assets/logo.png" alt="Vue logo" v-if="item.stack.vue" />
    <img
      src="../assets/vuetify-logo.svg"
      alt="Vuetify Logo"
      v-if="item.stack.vuetify"
    />
    <font-awesome-icon :icon="['fab', 'js-square']" v-if="item.stack.js" />
  </div>
</template>
<script>
export default {
  props: ["item"],
};
</script>
<style lang="sass" scoped>
.stack
    display: flex
    align-items: center
    margin-bottom: 20px
    > p
        line-height: 24px
        margin-right: 20px
        font-size: 1.15em
    > *
        margin-left: 10px
        width: 30px
        height: 30px
        &:nth-child(1)
            margin-left: 0
    > .fa-html5
        color: hsl(13,79%,51%)
    > .fa-css3-alt
        color: hsl(212,69%,40%)
    > .fa-js-square
        color: hsl(53,93%,53%)
    > .fa-sass
        color: hsl(330,50%,60%)
</style>
