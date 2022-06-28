<template>
  <div class="challenges__wrapper">
    <transition name="popup-fade">
      <PopUp
        v-if="isShowPopUp"
        @closePopUp="closePopUp"
        :dataChallenge="dataChallenge"
      />
    </transition>
    <h1>{{ $t("homePage.challenges") }}</h1>
    <div class="cards__box">
      <div
        class="card"
        v-for="(challenge, index) of getChallenges"
        :key="index"
        :style="{ backgroundImage: 'url(' + challenge.image + ')' }"
        @click="openPopUp(challenge)"
      >
        <div class="card__description">
          <h1>{{ challenge.name }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PopUp from "./PopUpChallenge.vue";
export default {
  components: { PopUp },
  computed: {
    ...mapGetters(["getChallenges"]),
  },
  data: () => ({
    isShowPopUp: false,
    dataChallenge: {},
  }),
  methods: {
    closePopUp: function() {
      this.isShowPopUp = false;
    },
    openPopUp: function(props) {
      this.dataChallenge = props;
      this.isShowPopUp = true;
    },
  },
};
</script>

<style lang="sass" scoped>
.challenges__wrapper
    padding: 0 10%
    margin-bottom: 20px
    @media screen and (max-width: $mobile)
      padding: 0 5%
    > h1
      margin-bottom: 20px
      font-size: 1.7em
      font-weight: 600
      @media screen and (max-width: $mobile)
        text-align: center
    > .cards__box
        display: grid
        grid-template-columns: repeat(3, 1fr )
        grid-gap: 0 20px
        @media screen and (max-width: $ipad)
          grid-template-columns: repeat(2, 1fr )
          grid-gap: 20px
        @media screen and (max-width: $mobile)
          grid-template-columns: repeat(1, 1fr )
        > .card
            background-size: 100% 100%
            background-repeat: no-repeat
            background-position: center center
            height: 17.4vw
            border-radius: 8px
            position: relative
            overflow: hidden
            transition: all .3s
            cursor: pointer
            border: 2px solid hsla(327,100%,53%,.5)
            box-shadow: 0 0 4px 2px hsla(327,100%,53%,.5)
            @media screen and (max-width: $ipad)
              height: 200px
            @media screen and (max-width: $mobile)
              height: 60vw
            &:first-child
                background-image: url('../assets/codewars-logo.png')
                background-color: hsl(0,0%,16%)
                background-size: 30% 50%
            > .card__description
                position: absolute
                left: 0
                top: 0
                bottom: 0
                width: 0
                overflow: hidden
                transition: width .7s
                background: linear-gradient(180deg, hsl(217,10%,15%), hsl(217,6%,23%))
                cursor: pointer
                display: flex
                align-items: center
                justify-content: center
                flex-direction: column
                @media screen and (max-width: $ipad)
                  top: auto
                  bottom: 0
                  width: 100%
                  font-size: 14px

                > h1
                    cursor: pointer
                    opacity: 0
                    transition: opacity .7s
                    color: hsl(45,7%,60%)
                    white-space: nowrap
                    margin-bottom: 10px
                    font-size: 1.7em
                    @media screen and (max-width: $ipad)
                      opacity: 1
                      white-space: normal
                      margin-top: 10px

            &:hover
              box-shadow: 0 0 4px 2px hsla(327,100%,53%,.8)
              border-color: hsla(327,100%,53%,.9)
            &:hover > .card__description
                width: 100%
                > h1
                    opacity: 1
</style>
