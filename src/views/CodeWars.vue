<template>
  <div>
    <transition name="popup-fade">
      <PopUp :task="popUpProps" v-if="isShowPopUp" @closePopUp="closePopUp" />
    </transition>
    <div class="wrapper">
      <header class="header">
        <img src="../assets/codewars-logo.png" alt="CodeWars Logo" />
        <div class="header__card">
          <p>{{ $t("codewars.description") }}</p>
          <p>{{ $t("codewars.myGoal") }}</p>
          <p>{{ $t("codewars.myComment") }}</p>
          <div class="header__links">
            <a
              href="https://www.codewars.com/users/Nekrasov.A.A"
              class="header__link kyu__four"
              >4 kyu</a
            >
            <a
              href="https://www.codewars.com/users/Nekrasov-A-A"
              class="header__link kyu__five"
              >5 kyu</a
            >
          </div>
        </div>
      </header>

      <section class="kyu__select">
        <label
          v-for="(kyu, index) of kyus"
          :key="index"
          class="kyu"
          :class="{
            'purple__svg-border': kyu === '2kyu' || kyu === '1kyu',
            'blue__svg-border': kyu === '3kyu' || kyu === '4kyu',
            'yellow__svg-border': kyu === '5kyu' || kyu === '6kyu',
            'white__svg-border': kyu === '8kyu' || kyu === '7kyu',
            active__kyu: selectedKyu === kyu,
          }"
        >
          <input type="radio" v-model="selectedKyu" :value="kyu" />
          {{ addSpace(kyu) }}
        </label>
      </section>

      <section class="tasks" v-if="getTasks[selectedKyu]">
        <div
          v-for="(task, index) of getTasks[selectedKyu]"
          :key="index"
          class="task"
          :class="{
            purple__border: selectedKyu === '2kyu' || selectedKyu === '1kyu',
            blue__border: selectedKyu === '3kyu' || selectedKyu === '4kyu',
            yellow__border: selectedKyu === '5kyu' || selectedKyu === '6kyu',
            white__border: selectedKyu === '8kyu' || selectedKyu === '7kyu',
          }"
          @click="openPopUp(task)"
        >
          <div class="task__description">
            <h1>{{ task.name[$i18n.locale] }}</h1>
            <p>{{ task.description[$i18n.locale] }}</p>
          </div>
        </div>
      </section>
      <section v-else class="joke">
        <h1>{{ $t("codewars.tasks.gendalf") }}</h1>
        <img src="../assets/CodeWarsPage/not-pass.jpg" alt="Gendalf!" />
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PopUp from "../components/PopUpCodeWars.vue";
export default {
  data: () => ({
    kyus: ["8kyu", "7kyu", "6kyu", "5kyu", "4kyu", "3kyu", "2kyu", "1kyu"],
    selectedKyu: "4kyu",
    isShowPopUp: false,
    popUpProps: "",
  }),
  components: { PopUp },
  computed: {
    ...mapGetters(["getTasks"]),
  },
  methods: {
    addSpace: function(word) {
      return word[0] + " " + word.slice(1);
    },
    openPopUp: function(props) {
      this.popUpProps = props;
      this.isShowPopUp = true;
    },
    closePopUp: function() {
      this.isShowPopUp = false;
    },
  },
};
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Source+Code+Pro&display=swap')

*
 font-family: 'Roboto'
 font-size: 16px



.wrapper
  background-color: hsl(0,0%,22%)
  min-height: 100vh
  padding: 0 10%
  @media screen and (max-width: $mobile)
    padding: 0 5%
  .header
    display: flex
    width: 100%
    align-items: center
    padding: 30px 0
    @media screen and (max-width: $mobile)
      flex-direction: column
    > img
      max-width: 100%
      height: 200px
      border-radius: 8px
      margin-right: 40px
      @media screen and (max-width: $mobile)
        margin: 0
        margin-bottom: 20px
        height: 240px
    .header__card
      color: hsl(0,0%,85%)
      > p
        margin-bottom: 10px
      .header__links
        display: flex
        margin-top: 20px
        @media screen and (max-width: $mobile)
          justify-content: center
        .header__link
          display: flex
          background-size: cover
          width: 80px
          height: 32px
          align-items: center
          justify-content: center
          text-decoration: none
          cursor: pointer
          &:first-child
            margin-right: 10px
          &.kyu__four
            background: url('../assets/CodeWarsPage/blue-border.svg') no-repeat
            color: hsl(208,51%,48%)
          &.kyu__five
            background: url('../assets/CodeWarsPage/yellow-border.svg') no-repeat
            color: hsl(45,85%,50%)

  .kyu__select
    margin-bottom: 30px
    display: flex
    flex-wrap: wrap
    justify-content: center
    @media screen and (max-width: $ipad)
      display: grid
      grid-template-columns: repeat(4, 1fr )
      grid-gap: 10px 0
    @media screen and (max-width: $mobile)
      grid-template-columns: repeat(2, 1fr)
      justify-items: center
    .kyu
      margin: 0 10px
      text-align: center
      display: flex
      width: 80px
      height: 32px
      align-items: center
      justify-content: center
      font-size: 14px
      font-weight: 700
      cursor: pointer
      opacity: .5
      transition: all .3
      > input
        display: none
    .white__svg-border
      background: url('../assets/CodeWarsPage/white-border.svg') no-repeat
      background-size: cover
      color: hsl(0,0%,100%)
    .yellow__svg-border
      background: url('../assets/CodeWarsPage/yellow-border.svg') no-repeat
      background-size: cover
      color: hsl(45,85%,50%)
    .blue__svg-border
      background: url('../assets/CodeWarsPage/blue-border.svg') no-repeat
      background-size: cover
      color: hsl(208,51%,48%)
    .purple__svg-border
      background: url('../assets/CodeWarsPage/purple-border.svg') no-repeat
      background-size: cover
      color: hsl(257,44%,60%)
    .active__kyu, .kyu:hover
      opacity: 1

  .tasks
    display: grid
    grid-template-columns: repeat(4, 1fr)
    grid-gap: 20px
    @media screen and (max-width: $ipad-pro)
      grid-template-columns: repeat(3,1fr )
    @media screen and (max-width: $ipad)
      grid-template-columns: repeat(2,1fr )
    @media screen and (max-width: $mobile)
      grid-template-columns: repeat(1,1fr )
    .task
      background-color: hsla(0,0%,17%,.8)
      color: hsl(0,0%,85%)
      display: flex
      border-radius: 32px
      cursor: pointer
      border: 2px solid transparent

      &.blue__border
        border-color: hsla(208,51%,48%,.3)
        box-shadow: 0 0 2px 1px hsla(208,51%,48%,.3)
      &.blue__border:hover
        border-color: hsl(208,51%,48%)
        box-shadow: 0 0 2px 2px hsla(208,51%,48%,.5)
      &.white__border
        border-color: hsla(0,0%,100%,.3)
        box-shadow: 0 0 2px 1px hsla(0,0%,100%,.3)
      &.white__border:hover
        border-color: hsl(0,0%,100%)
        box-shadow: 0 0 2px 1px hsla(0,0%,100%,.5)
      &.yellow__border
        border-color: hsla(45,85%,50%,.3)
        box-shadow: 0 0 2px 1px hsla(45,85%,50%,.3)
      &.yellow__border:hover
        border-color: hsl(45,85%,50%)
        box-shadow: 0 0 2px 1px hsla(45,85%,50%,.5)
      &.purple__border
        border-color: hsla(257,44%,60%,.3)
        box-shadow: 0 0 2px 1px hsla(257,44%,60%,.3)
      &.purple__border:hover
        border-color: hsl(257,44%,60%)
        box-shadow: 0 0 2px 1px hsla(257,44%,60%,.5)
      .task__description
        padding: 10px 15px

        > h1
          font-weight: 700
          color: hsl(0,0%,95%)
          text-align: center
          font-size: 18px
          cursor: pointer
          @media screen and (max-width: $mobile)
            font-size: 16px
        > p
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 3
          -webkit-box-orient: vertical
          line-height: 20px
          cursor: pointer
          @media screen and (max-width: $mobile)
            font-size: 14px
      .solution
        color: hsl(0,0%,85%)
  .joke
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    padding-bottom: 20px
    > img
      max-width: 100%
    > h1
      margin: 0
      margin-bottom: 16px
      color: hsl(0,0%,85%)
      font-size: 18px
</style>
