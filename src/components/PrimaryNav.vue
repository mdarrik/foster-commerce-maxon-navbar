<template>
  <ul
    ref="listRef"
    class="flex flex-1 self-center justify-evenly"
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
        :subcategories="category.subcategories"
        :list-open="openListIndex === index"
        @button-click="dropdownButtonClicked(index)"
        >{{ category.name }}</DropdownMenu
      >
      <a
        v-else
        :href="category.url"
        class="font-bold tracking-wide text-base uppercase h-12 flex items-center"
      >
        <span class="mx-5">{{ category.name }}</span>
      </a>
    </li>
  </ul>
</template>
<script>
import DropdownMenu from "./DropdownMenu";
/**The primary set of nav options for the site on large screens.
 * Also manages the state of any child dropdown elements. */
export default {
  props: {
    /**The array of categories that make up the nav items. if the category is a dropdown,
     * needs to have a subcategories property.
     * Otherwise it needs to have a url for the link to target.
     */
    categories: Array
  },
  components: {
    DropdownMenu
  },
  data() {
    return {
      /**A numerical index to keep track of which dropdown element is open
       * If no dropdowns are open, assign to null
       */
      openListIndex: null
    };
  },
  methods: {
    /**method that fires when a dropdown button is clicked.
     * Handles changing the active openListIndex appropriately */
    dropdownButtonClicked(index) {
      if (this.openListIndex === index) {
        this.openListIndex = null;
      } else {
        this.openListIndex = index;
      }
    },
    /**Event that fires when any child element loses focus.
     * This can be used to make sure that any open dropdowns are closed when the list loses focus*/
    focusOut(event) {
      const listRef = this.$refs.listRef;
      //if a nav is open, and the list element doesn't contain the
      //target of the next focus, unset the openListIndex to close the open nav.
      if (this.openListIndex && !listRef.contains(event.relatedTarget)) {
        this.openListIndex = null;
      }
    }
  }
};
</script>
