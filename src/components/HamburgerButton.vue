<template>
  <button
    aria-label="Open Menu"
    :aria-expanded="active"
    class="bg-transparent w-10 h-12 px-2 transition-all ease-in-out duration-200 relative transform text-white"
    :class="{ '-rotate-180': active }"
    @click="$emit('click')"
  >
    <span class="block w-full h-full transform transition-all duration-200"
      ><span
        class="burger-bar burger-bar--1 transform transition-all duration-200"
        :class="{
          'rotate-45 translate-y-0': active,
          '-translate-y-2': !active
        }"
      ></span>
      <span
        class="burger-bar burger-bar--2"
        :class="{ 'opacity-0 transform transition-all duration-200': active }"
      ></span>
      <span
        class="burger-bar burger-bar--3 transform transition-all duration-200"
        :class="{
          '-rotate-45 translate-y-0': active,
          'translate-y-2': !active
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
.burger-bar {
  @apply block absolute left-0 right-0 bg-opacity-100 bg-white h-2px w-auto;
  top: 50%;
}
.burger-bar--2 {
  transform-origin: 100% 50%;
}
</style>
