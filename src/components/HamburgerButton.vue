<template>
  <button
    aria-label="Open Menu"
    :aria-expanded="active ? 'true' : 'false'"
    class="bg-transparent h-12 px-3 transition-all ease-in-out duration-200 relative transform text-white burger-button"
    :class="{ '-rotate-180': active }"
    @click="$emit('click')"
  >
    <span class="block w-full h-full transform transition-all duration-200"
      ><span
        class="burger-bar burger-bar--1 transform transition-all duration-200"
        :class="{
          'rotate-45 translate-y-0': active
        }"
      ></span>
      <span
        class="burger-bar burger-bar--2"
        :class="{ 'opacity-0 transform transition-all duration-200': active }"
      ></span>
      <span
        class="burger-bar burger-bar--3 transform transition-all duration-200"
        :class="{
          '-rotate-45 translate-y-0': active
        }"
      ></span
    ></span>
  </button>
</template>
<script>
/**Button used to toggle a "hamburger nav" open and closed*/
export default {
  props: {
    /**prop to signify whether the button is in the active position.
     * used for css classes & aria-expanded */
    active: { type: Boolean, default: false }
  }
};
</script>
<style scoped lang="postcss">
.burger-button {
  width: 2.625rem;
}
.burger-bar {
  @apply block absolute left-0 right-0 bg-opacity-100 bg-white w-auto;
  height: 0.125rem;
  top: 50%;
}
[aria-expanded="false"] .burger-bar--1 {
  --transform-translate-y: -0.45rem;
}
[aria-expanded="false"] .burger-bar--3 {
  --transform-translate-y: 0.45rem;
}
.burger-bar--2 {
  transform-origin: 100% 50%;
}
</style>
