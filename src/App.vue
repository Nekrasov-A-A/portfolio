<template>
  <div id="app">
    <header class="header">
      <nav>
        <div class="control__languages">
          <div
            @click="changeLanguage('ru')"
            :class="{ active: $i18n.locale === 'ru' }"
          >
            RU
          </div>
          <div
            @click="changeLanguage('en')"
            :class="{ active: $i18n.locale === 'en' }"
          >
            EN
          </div>
        </div>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
import "normalize.css";
export default {
  methods: {
    changeLanguage: function(props) {
      this.$i18n.locale = props;
    },
  },
};
</script>

<style lang="sass" scoped>
.header
  width: 100%
  height: 64px
  background: linear-gradient(180deg, hsl(217,10%,15%), hsl(217,6%,23%))
  position: relative
  > nav
    height: 100%
    position: absolute
    right: 5%
    > .control__languages
      display: flex
      height: 100%
      align-items: center
      > *
        height: 20px
        cursor: pointer
        margin-left: 14px
        color: hsla(45,7%,60%,.5)
        &.active
          color: hsl(45,7%,60%)
        &:first-child
          margin-left: 0
          position: relative
          &::after
            content: ''
            position: absolute
            right: -7px
            height: 80%
            top: 10%
            width: 1px
            background-color: hsl(45,7%,60%)
            cursor: default
        > img
          cursor: pointer
          width: 100%
          height: 100%
</style>
