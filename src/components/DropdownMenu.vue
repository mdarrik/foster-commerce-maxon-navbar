<template>
  <fragment>
    <button
      type="button"
      @click="$emit('button-click', category)"
      class="font-bold tracking-wide text-base uppercase h-12 flex items-center justify-center px-5"
      :aria-expanded="listOpen ? 'true' : 'false'"
    >
      {{ category }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14.739 7.662"
        aria-hidden="true"
        class="w-2 h-2 fill-current absolute mx-auto mt-10"
      >
        <path
          aria-hidden="true"
          d="M8.034 7.409a1 1 0 01-1.329 0L.335 1.747A1 1 0 011 0h12.74a1 1 0 01.664 1.747z"
        ></path>
      </svg>
    </button>
    <DropdownSubmenu :open="listOpen" :subcategories="subcategories" />
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
    }
  }
};
</script>
