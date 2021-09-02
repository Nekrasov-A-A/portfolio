<template>
  <div class="popUp__wrapper" @click.self="closePopUp">
    <div class="popUp__card">
      <font-awesome-icon icon="times-circle" @click="closePopUp" />
      <h1>{{ dataChallenge.name }}</h1>
      <p>{{ dataChallenge.description[$i18n.locale] }}</p>

      <Stack :item="dataChallenge"
        ><p>{{ $t("homePage.stack") }}</p></Stack
      >
      <div class="control__tools">
        <div class="sup__link">
          <a :href="dataChallenge.originalLink" target="_blank"
            ><button>{{ $t("homePage.originalLink") }}</button></a
          >
          <a :href="dataChallenge.githubLink" target="_blank"
            ><button>GitHub</button></a
          >
        </div>
        <div class="main__link">
          <a :href="dataChallenge.myWebSiteLink" target="_blank"
            ><button>
              {{ $t("homePage.myWebSite") }}
            </button></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Stack from "./StackIcons.vue";
export default {
  props: ["dataChallenge"],
  methods: {
    closePopUp: function() {
      this.$emit("closePopUp");
    },
  },
  components: { Stack },
};
</script>

<style lang="sass" scoped>
.popUp__wrapper
    position: fixed
    top: 0
    bottom: 0
    right: 0
    left: 0
    background: linear-gradient(180deg, hsla(217,10%,15%,.3), hsla(217,6%,23%,.3))
    backdrop-filter: blur(2px)
    z-index: 15
    display: flex
    align-items: center
    justify-content: center
    > .popUp__card
        width: 80%
        position: relative
        background: linear-gradient(30deg, hsl(217,10%,15%), hsl(217,6%,23%))
        border-radius: 8px
        box-shadow: 0 0 4px 2px hsla(180,100%,50%,.2)
        padding: 50px 5%
        @media screen and (max-width: $mobile)
          width: 94%
          padding: 60px 5% 30px
        > h1
          font-size: 1.6em
          margin-bottom: 30px
          text-align: center
        > p
          font-size: 1.15em
          margin-bottom: 20px
          line-height: 24px
        > .fa-times-circle
            width: 30px
            height: 30px
            position: absolute
            top: 20px
            right: 20px
            cursor: pointer
            color: hsl(0,0%,82%)
        > .control__tools
          display: flex
          justify-content: center
          align-items: center
          margin-top: 30px
          flex-wrap: wrap
          > .main__link
            display: flex
            justify-content: center
            align-items: center
            width: 100%
            > a
              text-decoration: none
              width: 210px
              > button
                padding: 15px 20px
                width: 100%
                box-shadow: 0 0 4px 2px hsla(327,100%,53%,.4)
                border-radius: 50px
                border: 1px solid hsl(327,100%,53%)
                background-color: transparent
                color: hsl(327,100%,53%)
                transition: all .3s
                font-size: 18px
                &:hover
                  background-color: hsl(327,100%,53%)
                  border-color: transparent
                  color: hsl(0,0%,100%)
          > .sup__link
            display: flex
            width: 100%
            align-items: center
            justify-content: center
            margin-bottom: 20px
            > a
              text-decoration: none
              width: 140px
              margin-left: 20px
              &:first-child
                margin-left: 0
              > button
                padding: 15px 20px
                width: 100%
                border-radius: 50px
                box-shadow: 0px 0px 4px 2px rgba(0,0,0,.1)
                transition: all .3s
                color: hsl(92,68%,40%)
                background-color: transparent
                border: 1px solid hsl(92,68%,40%)
                font-size: 18px
                &:hover
                  background-color: hsl(92,68%,40%)
                  color: hsl(0,0%,100%)
                  border-color: transparent
</style>
