<template>
  <ul
    ref="listRef"
    class="flex flex-1 self-center justify-evenly"
    aria-labelledby="primary-nav-label"
    @focusout="focusOut"
    @keydown.esc="openListIndex = null"
  >
    <li
      v-for="(category, index) in categories"
      :key="category.name"
      class="relative"
    >
      <DropdownMenu
        v-if="category.subcategories"
        ref="dropdownRefs"
        :category="category.name"
        :subcategories="category.subcategories"
        :list-open="openListIndex === index"
        @button-click="dropdownButtonClicked(index)"
      />
      <a
        v-else
        :href="category.url"
        class="font-bold tracking-wide text-base uppercase h-12 flex items-center"
        ref="buttonRef"
      >
        <span class="mx-5">{{ category.name }}</span>
      </a>
    </li>
  </ul>
</template>
<script>
import DropdownMenu from "./DropdownMenu";
export default {
  /** */
  props: { categories: Array },
  components: {
    DropdownMenu
  },
  data() {
    return {
      openListIndex: null
    };
  },
  methods: {
    dropdownButtonClicked(index) {
      if (this.openListIndex === index) {
        this.openListIndex = null;
      } else {
        this.openListIndex = index;
      }
    },
    focusOut(event) {
      const listRef = this.$refs.listRef;
      if (this.openListIndex && !listRef.contains(event.relatedTarget)) {
        this.openListIndex = null;
      }
    }
  }
};
</script>
