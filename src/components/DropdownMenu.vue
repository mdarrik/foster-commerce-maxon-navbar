<template>
  <fragment>
    <button
      ref="buttonRef"
      type="button"
      class="font-bold tracking-wide text-base uppercase h-12 flex items-center justify-center px-5"
      :aria-expanded="listOpen ? 'true' : 'false'"
      :aria-controls="`${category}-menu`"
      @click="$emit('button-click')"
    >
      {{ category }}
      <svg
        v-if="hasChevron"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14.739 7.662"
        aria-hidden="true"
        class="w-2 h-2 fill-current absolute mx-auto mt-10 chevron transform transition ease-in-out duration-200 "
      >
        <path
          aria-hidden="true"
          d="M8.034 7.409a1 1 0 01-1.329 0L.335 1.747A1 1 0 011 0h12.74a1 1 0 01.664 1.747z"
        ></path>
      </svg>
    </button>
    <DropdownSubmenu
      :open="listOpen"
      :subcategories="subcategories"
      :id="`${category}-menu`"
      @keyup.esc.native="focusButton"
    />
  </fragment>
</template>
<script>
import DropdownSubmenu from "./DropdownSubmenu";
export default {
  components: {
    DropdownSubmenu
  },
  props: {
    category: { type: String, required: true },
    subcategories: { type: Array, required: true },
    listOpen: {
      type: Boolean,
      default: false
    },
    /**prop to determine whether the dropdown item should have a chevron when expanded */
    hasChevron: { type: Boolean, default: true }
  },
  methods: {
    /**set focus on the button for this dropdown */
    focusButton() {
      this.$refs.buttonRef.focus();
    }
  }
};
</script>
<style scoped>
/*if list collapsed, hide chevron and move it up
* opacity used so that chevron can be animated
*/
[aria-expanded="false"] .chevron {
  @apply opacity-0 -translate-y-2;
}
/*if list expanded, make chevron solid and translate it to default position */
[aria-expanded="true"] .chevron {
  @apply opacity-100 translate-y-0;
}
</style>
