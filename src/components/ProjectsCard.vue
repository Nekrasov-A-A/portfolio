<template>
  <div class="projects-card__wrapper">
    <h1>
      {{ $t("homePage.projects") }}
    </h1>
    <div class="cards__container">
      <a
        v-for="(project, index) of getProjects"
        :key="index"
        class="project__card"
        :style="{ backgroundImage: 'url(' + project.image + ')' }"
        :href="project.link"
        target="_blank"
      >
        <div class="project__card__info">
          <h1>{{ project.name }}</h1>
          <StackIcons :item="project" class="info__stack" />
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import StackIcons from "./StackIcons.vue";
import { mapGetters } from "vuex";
export default {
  components: { StackIcons },
  computed: {
    ...mapGetters(["getProjects"]),
  },
};
</script>

<style lang="sass" scoped>
.projects-card__wrapper
    padding: 0 10%
    @media screen and (max-width: $mobile)
      padding: 0 5%
    > h1
      margin-bottom: 20px
      font-size: 1.7em
      font-weight: 600
      @media screen and (max-width: $mobile)
        text-align: center
    > .cards__container
      display: grid
      width: 100%
      grid-template-columns: repeat(4, 1fr)
      grid-gap: 20px
      @media screen and (max-width: $ipad)
        grid-template-columns: repeat(2, 1fr)
      @media screen and (max-width: $mobile)
        grid-template-columns: repeat(1, 1fr)
      > .project__card
          background-size: 99.9% 99.9%
          background-repeat: no-repeat
          background-position: center center
          height: 12.5vw
          cursor: pointer
          position: relative
          border-radius: 4px
          overflow: hidden
          box-shadow: 0px 0px 4px 2px hsla(180,100%,50%,.3)
          border: 2px solid hsla(180,100%,50%,.3)
          transition: all .5s
          @media screen and (max-width: $ipad)
            height: 180px
          @media screen and (max-width: $mobile)
            height: 50vw
          .project__card__info
              display: flex
              flex-direction: column
              align-items: center
              justify-content: center
              position: absolute
              bottom: 0
              left: 0
              background-color: rgba(0,0,0,.7)
              z-index: 10
              width: 100%
              height: 0
              transition: all .7s
              backdrop-filter: blur(1px)
              cursor: pointer
              @media screen and (max-width: $ipad)
                height: auto
                border-radius: 0
              > h1
                  margin-bottom: 20px
                  opacity: 0
                  transition: opacity .5s
                  color: hsl(45,11%,70%)
                  cursor: pointer
                  font-size: 1.7em
                  text-align: center
                  @media screen and (max-width: $ipad)
                    opacity: 1
                    margin: 10px 0
                    font-size: 1.5em
              > .info__stack
                  opacity: 0
                  transition: opacity .6s
                  background-color: hsl(45,7%,60%)
                  padding: 10px
                  border-radius: 50px
                  cursor: pointer
                  box-shadow: 0 0 4px 2px rgba(0,0,0,.2)
                  @media screen and (max-width: $ipad)
                    display: none
          &:hover
            box-shadow: 0px 0px 4px 2px hsla(180,100%,50%,.9)
            border-color: hsla(180,100%,50%,.9)
          &:hover .project__card__info
              height: 100%
              > h1, > .info__stack
                  opacity: 1
</style>
