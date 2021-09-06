<template>
  <div>
    <p><slot> Hi, I'm </slot></p>
    <span class="typewriter">
      <span>
        <span
          :style="{
            backgroundPositionX: bgPositionX,
            backgroundPositionY: bgPositionY,
          }"
        >
          <slot name="name">Aleksandr Nekrasov</slot>
        </span>
        <span
          :style="{
            backgroundPositionX: bgPositionX,
            backgroundPositionY: bgPositionY,
          }"
        >
          <slot name="profession">Front-end developer</slot>
        </span>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  props: ["bgPositionX", "bgPositionY"],
};
</script>

<style lang="sass" scoped>
div

  p
    display: inline
    @media screen and (max-width: $mobile)
        text-align: center
        display: block

.typewriter
  display: inline-block
  vertical-align: bottom

.typewriter span
  display: grid
  overflow: hidden
  height: 1.1em
  background: url('../assets/test5.jpg') repeat
  background-position: 50% 40%
  -webkit-background-clip: text
  color: transparent


.typewriter span span
  width: 0%
  max-width: max-content
  overflow: hidden
  height: inherit
  word-break: break-all
  animation: imitationCarriage .5s infinite steps(1), changeWidth 2s linear infinite alternate, changeText 8s steps(2) infinite

.typewriter span span:before
  content: " "
  display: inline-block

@keyframes changeWidth
  90%,100%
    width:100%
@keyframes imitationCarriage
  0%,100%
    box-shadow: 2px 0 0 #0000
  50%
    box-shadow: 2px 0 0 hsl(180,100%,48%)
@keyframes changeText
  100%
    transform: translateY(-200%)
</style>
