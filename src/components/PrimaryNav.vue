<template>
  <ul
    ref="listRef"
    class="flex flex-1 self-center justify-evenly"
    :class="{ 'child-open': isListOpen }"
    @focusout="focusOut"
    @keydown.esc="closeDropdown"
  >
    <li class="lg:hidden">
      <DropdownMenu
        :list-open="searchOpen"
        :hasChevron="false"
        @button-click="() => (searchOpen = !searchOpen)"
      >
        <template v-slot:default> Search <SearchIconSvg /> </template>
        <template v-slot:disclosed-content="slotProps">
          {{ slotProps }}
          <div
            :class="[
              'w-full bg-gray-700',
              slotProps.open ? 'active bottom-auto' : null,
              slotProps.openClass
            ]"
          >
            <SearchForm
              class="mx-0 relative"
              :id="slotProps.Id"
              :active="slotProps.open"
            />
          </div>
        </template>
      </DropdownMenu>
    </li>
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
        class="lg:font-bold tracking-wide text-base uppercase h-12 flex items-center"
      >
        <span class="mx-5">{{ category.name }}</span>
      </a>
    </li>
  </ul>
</template>
<script>
import DropdownMenu from "./DropdownMenu";
import SearchIconSvg from "./SearchIconSvg";
import SearchForm from "./SearchForm";
/**The primary set of nav options for the site on large screens.
 * Also manages the state of any child dropdown elements. */
export default {
  components: {
    DropdownMenu,
    SearchIconSvg,
    SearchForm
  },
  props: {
    /**The array of categories that make up the nav items. if the category is a dropdown,
     * needs to have a subcategories property.
     * Otherwise it needs to have a url for the link to target.
     */
    categories: Array
  },
  data() {
    return {
      /**A numerical index to keep track of which dropdown element is open
       * If no dropdowns are open, assign to null
       */
      openListIndex: null,
      /**if the search disclosure widget is open */
      searchOpen: false
    };
  },
  computed: {
    /**returns a bool specifying if any of the disclosure items on the page are open */
    isListOpen() {
      return this.searchOpen || this.openListIndex !== null;
    }
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
      if (this.isListOpen && !listRef.contains(event.relatedTarget)) {
        this.openListIndex = null;
        this.searchOpen = false;
      }
    },
    /**closes all disclosure panels open. */
    closeDropdown(event) {
      if (this.isListOpen) {
        event.stopPropagation();
      }
      this.openListIndex = null;
      this.searchOpen = false;
    }
  }
};
</script>
<style scoped lang="postcss">
.child-open {
  @apply transform -translate-x-full;
}
.child-open .active {
  @apply w-full;
}
@screen lg {
  .child-open {
    @apply transform-none;
  }
}
.left-full {
  left: 100%;
}
</style>
