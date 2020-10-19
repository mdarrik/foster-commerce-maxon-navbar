<template>
  <fragment>
    <button
      ref="buttonRef"
      type="button"
      class="lg:font-bold tracking-wide text-base uppercase w-full lg:w-auto h-12 flex items-center justify-between lg:justify-center px-5"
      :aria-expanded="listOpen ? 'true' : 'false'"
      :aria-controls="submenuId"
      @click="$emit('button-click')"
    >
      <slot></slot>
      <template v-if="hasChevron">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14.739 7.662"
          aria-hidden="true"
          focusable="false"
          class="hidden lg:block w-2 h-2 fill-current absolute mx-auto mt-10 chevron transform transition ease-in-out duration-200 "
        >
          <title>Down Chevron</title>
          <path
            aria-hidden="true"
            d="M8.034 7.409a1 1 0 01-1.329 0L.335 1.747A1 1 0 011 0h12.74a1 1 0 01.664 1.747z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 8.5 14.1"
          focusable="false"
          aria-hidden="true"
          class="w-5 h-5 fill-current lg:hidden"
        >
          <title class="hidden">Right Chevron</title>
          <path
            d="M1.4 14.1L8.5 7 1.4 0 0 1.4l5.7 5.7L0 12.7l1.4 1.4z"
            aria-hidden="true"
          ></path>
        </svg>
      </template>
    </button>
    <slot
      name="disclosed-content"
      :open="listOpen"
      :id="submenuId"
      :open-class="'absolute top-0 left-full'"
      @keyup.esc.native="focusButton"
    >
      <DropdownSubmenuList
        :open="listOpen"
        :subcategories="subcategories"
        :id="submenuId"
        class="absolute top-0 lg:top-auto left-full text-white lg:text-black"
        @keyup.esc.native="focusButton"
      />
    </slot>
  </fragment>
</template>
<script>
import DropdownSubmenuList from "./DropdownSubmenuList";
//used to generate unique ids per each component instance
let idNum = 0;
/**
 * a dropdown/disclosure menu. Doesn't handle opening/closing the menu itself, instead emits a button-click event
 * and receives a listOpen prop. This allows a parent to orchestrate multiple dropdowns at a time.
 */
export default {
  components: {
    DropdownSubmenuList
  },
  props: {
    subcategories: { type: Array },
    listOpen: {
      type: Boolean,
      default: false
    },
    /**prop to determine whether the dropdown item should have a chevron when expanded */
    hasChevron: { type: Boolean, default: true }
  },
  data() {
    return {
      /** Calculate an id for the dropdown-menu. By incrementing idNum which persists outside of the component,
       * it should be for each component instance.
       * A more robust solution may be to use something like nanoid.
       */
      submenuId: Object.freeze(`dropdown-menu-${idNum++}`)
    };
  },
  methods: {
    /**set focus on the button for this dropdown */
    focusButton() {
      this.$refs.buttonRef.focus();
    }
  }
};
</script>
<style scoped lang="postcss">
.left-full {
  left: 100%;
}
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
@screen lg {
  .left-full {
    left: auto;
  }
}
</style>
