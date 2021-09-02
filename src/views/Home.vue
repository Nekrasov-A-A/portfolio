<template>
  <div class="wrapper__cv">
    <!--  -->
    <section class="cv__info">
      <div class="info__image-wrapper"></div>
      <h1>{{ $t("homePage.myFullName") }}</h1>
      <div class="social">
        <a href="https://github.com/Nekrasov-A-A" target="_blank">
          <font-awesome-icon
            :icon="['fab', 'github']"
            :mask="['fa', 'circle']"
          />
        </a>
        <a href="https://t.me/TheRealNekrasov" target="_blank">
          <font-awesome-icon
            :icon="['fab', 'telegram']"
            :mask="['fa', 'circle']"
          />
        </a>
      </div>
    </section>
    <!--  -->
    <ChallengesCard />
    <!--  -->
    <ProjectsCard />
  </div>
</template>

<script>
import ProjectsCard from "../components/ProjectsCard.vue";
import ChallengesCard from "../components/ChallengesCard.vue";
export default {
  components: { ProjectsCard, ChallengesCard },
};
</script>

<style lang="sass" scoped>
.wrapper__cv
  position: relative
  background: url('../assets/bg.svg')
  background-color: hsl(150,2%,13%)
  background-position: center center
  background-size: 120% 120%
  color: hsl(45,9%,100%)
  padding: 50px 0
  @media screen and (max-width: $mobile)
    background: hsl(150,2%,13%)
  .cv__info
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    > .info__image-wrapper
      background: url('../assets/myPhoto.jpg') center center no-repeat
      height: 300px
      width: 300px
      border-radius: 50%
      background-size: 105% 105%
      transition: all .3s
      box-shadow: 0 0 4px 2px rgba(0,0,0,.1)
      margin-bottom: 20px
      border: 4px solid transparent
      &:hover
        box-shadow: 0 0 6px 2px hsl(180,100%,50%)
        border-color: hsl(180,100%,50%)
    > h1
      font-size: 24px
      margin-bottom: 20px
    > .social
      display: flex
      margin-bottom: 40px
      justify-content: center
      align-items: center
      > a
        text-decoration: none
        cursor: pointer
        margin-right: 10px
        border-radius: 50%
        position: relative
        &:last-child
          margin-right: 0
        &::before
          content: ''
          position: absolute
          top: 0
          bottom: 0
          right: 0
          left: 0
          background-color: transparent
          cursor: pointer
          z-index: 5
        &:hover .fa-github, &:hover .fa-telegram
          transform: scale(1.1)
        > *
          cursor: pointer
          width: 32px
          height: 32px
          border-radius: 50%
          box-shadow: 0 0 4px 2px rgba(0,0,0,.3)
          transition: all .5s
        > .fa-github
          color: hsl(0,0%,0%)
          background: hsl(0,0%,100%)
          @media (prefers-color-scheme: dark)
            color: hsl(0,0%,0%)
            background: hsl(0,0%,100%)
        > .fa-telegram
          color: hsl(0,0%,100%)
          background: hsl(199,81%,52%)
  .cv__examples
    > h1
        margin-left: 10%
    .examples__challenges
      display: flex
      align-items: center
      justify-content: center
      margin: 20px 0
      > *
        width: 300px
        height: 200px
        margin-left: 20px
        background-repeat: no-repeat
        background-position: center center
        background-size: 100% 100%
        cursor: pointer
        border-radius: 8px
        box-shadow: 0 0 4px 2px rgba(0,0,0,.2)
        transition: all .5s
        &:hover
          transform: scale(0.98)
        &:hover > h1
          display: block
        > h1
          display: none
      &:first-child
        margin-left: 0
</style>
