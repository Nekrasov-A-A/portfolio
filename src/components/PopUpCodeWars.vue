<template>
  <div class="wrap" @click.self="closePopUp">
    <div class="task__info">
      <font-awesome-icon
        icon="times-circle"
        class="icon__times"
        @click="closePopUp"
      />
      <div class="task__desc">
        <h1>{{ task.name[$i18n.locale] }}</h1>
        <p>{{ task.description[$i18n.locale] }}</p>
        <pre
          v-if="task.descriptionCode"
          v-highlightjs="task.descriptionCode"
        ><code class="javascript"></code></pre>
      </div>
      <div class="task__solution">
        <div class="solution__options">
          <div class="solution__variables">
            <label
              v-for="(item, index) of solutionsOptions"
              :key="index"
              :class="{ active__option: selectedSolution === item }"
            >
              <input type="radio" v-model="selectedSolution" :value="item" />
              {{ $t(`codewars.tasks.${item}`) }}
            </label>
          </div>
          <a :href="task.link" target="_blank">{{
            $t("codewars.tasks.taskLink")
          }}</a>
        </div>
        <pre
          v-if="selectedSolution === 'mySolution'"
          v-highlightjs="task.solve"
        ><code class="javascript"></code></pre>

        <pre
          v-else
          v-highlightjs="task.bestPractice"
        ><code class="javascript"></code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["task"],
  data: () => ({
    solutionsOptions: ["mySolution", "bestPractice"],
    selectedSolution: "mySolution",
  }),
  methods: {
    closePopUp: function() {
      this.$emit("closePopUp");
    },
  },
};
</script>

<style lang="sass" scoped>
.wrap
    position: fixed
    min-height: 100vh
    top: 0
    width: 100%
    background-color: rgba(0,0,0,.5)
    z-index: 10
    display: flex
    justify-content: center
    flex-wrap: wrap
    align-items: center
    backdrop-filter: blur(2px)
    .task__info
      width: 80%
      height: 80vh
      position: relative
      border-radius: 8px
      box-shadow: 0 0 16px 4px rgba(0,0,0,.2)
      background-color: hsl(0,0%,14%)
      color: hsl(0,0%,85%)
      overflow-Y: scroll
      @media screen and (max-width: $mobile)
        width: 90%
        height: 90vh
      .icon__times
        position: sticky
        top: 10px
        left: calc(100% - 40px)
        cursor: pointer
        width: 30px
        height: 30px
        color: hsla(0,0%,85%,.5)
        transition: all .3
        &:hover
          color: hsl(0,0%,85%)
      .task__desc
        padding: 30px 40px 16px
        @media screen and (max-width: $mobile)
          padding: 30px 5px 16px
        > h1
          font-size: 18px
          text-align: center
          margin: 0
          margin-bottom: 16px
          @media screen and (max-width: $mobile)
            font-size: 16px
        > p
          line-height: 20px
          margin: 0
          @media screen and (max-width: $mobile)
            font-size: 14px
            text-align: center
        > pre
          margin: 0
          margin-top: 10px
          @media screen and (max-width: $ipad)
            overflow-y: hidden
            overflow-x: scroll
          > code
            border-radius: 8px
            padding: 10px
      .task__solution
         padding: 0 40px 30px
         position: relative
         @media screen and (max-width: $mobile)
          padding: 0 5px 40px
         .solution__options
          display: flex
          justify-content: space-between
          > a
            text-decoration: none
            color: hsl(0,0%,85%)
            border: 1px solid hsl(19,78%,58%)
            border-bottom-color: transparent
            cursor: pointer
            padding: 5px 10px 2px
            justify-self: end
            margin-right: 5px
            border-top-left-radius: 4px
            border-top-right-radius: 4px
            display: flex
            align-items: center
            justify-content: center
            @media screen and (max-width: $mobile)
              position: absolute
              bottom: 13px
              margin-right: 0
              right: 8px
              border-top-right-radius: 0
              border-top-left-radius: 0
              border-bottom-color: hsl(19,78%,58%)
              border-bottom-left-radius: 4px
              border-bottom-right-radius: 4px
          .solution__variables
            display: flex
            > label
              border: 1px solid hsl(19,78%,58%)
              border-bottom-color: transparent
              cursor: pointer
              opacity: .5
              padding: 5px 10px 2px
              margin-left: 5px
              border-top-left-radius: 4px
              border-top-right-radius: 4px
              display: flex
              align-items: center
              justify-content: center
              &:hover
                opacity: 1
              &.active__option
                opacity: 1
                box-shadow: 0 0 4px 8px rgba(0,0,0,.1)
              > input
                display: none
         > pre
          border: 1px solid hsl(19,78%,58%)
          margin: 0
          border-radius: 8px
          overflow-x: scroll
          overflow-y: hidden
          > code
            padding: 10px 20px
            border-radius: 8px
</style>
