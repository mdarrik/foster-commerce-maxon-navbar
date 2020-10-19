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
        ref="primaryNavSearchButton"
        :list-open="searchOpen"
        :hasChevron="false"
        @button-click="() => (searchOpen = !searchOpen)"
      >
        <template v-slot:default> Search <SearchIconSvg /> </template>
        <template v-slot:disclosed-content="slotProps">
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
              @keydown.esc="primaryNavSearchButton.focusButton()"
            />
          </div>
        </template>
      </DropdownMenu>
    </li>
    <li
      v-for="(category, index) in categories"
      :key="category.name"
      class="lg:relative"
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
    <li class="lg:hidden">
      <DropdownMenu
        :subcategories="languages"
        :list-open="languageDropdownOpen"
        :hasChevron="false"
        @button-click="() => (languageDropdownOpen = !languageDropdownOpen)"
      >
        <span>Choose Language</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.044 21.044"
          aria-hidden="true"
          class="w-5 h-5 fill-current"
        >
          <path
            aria-hidden="true"
            d="M10.54 21.068A10.522 10.522 0 0110.541.024h.001a10.522 10.522 0 11-.002 21.044zM1.819 7.808a9.135 9.135 0 008.587 11.879l.136-.003a9.134 9.134 0 006.547-2.77 1.534 1.534 0 01-.505-.618 1.756 1.756 0 01.088-1.472 1.05 1.05 0 00.06-.145.868.868 0 00-.033-.132 1.454 1.454 0 01.638-1.855c.526-.332.476-.45.428-.565h-.001a1.107 1.107 0 01-.124-.07 1.754 1.754 0 01-.955-1.432l-.042.001a1.738 1.738 0 01-.251.017 1.94 1.94 0 01-1.101-.34 1.497 1.497 0 01-.563-1.315.832.832 0 00-.021-.201c-.03-.02-.068-.04-.103-.059a1.546 1.546 0 01-.965-1.239c-.163-1.583.943-1.844 1.675-2.018a14.03 14.03 0 012.044-.15q.345 0 .69.017a9.035 9.035 0 00-.596-.768 2.109 2.109 0 01-1.507.2.732.732 0 00-.177-.023.743.743 0 00-.127.011 2.247 2.247 0 01-1.245.41 1.675 1.675 0 01-1.373-.695c-.672-.887-.417-1.548.492-2.567q-.293-.1-.591-.182a1.782 1.782 0 01-1.16 1.247 1.588 1.588 0 01-.63.13 1.565 1.565 0 01-1.4-.935 3.463 3.463 0 01-.155-.708q-.219.023-.437.057a2.097 2.097 0 00.39 1.125 2.613 2.613 0 01.467 1.306c0 .595 0 1.664-1.216 1.89a2.258 2.258 0 01-.279.018 2.217 2.217 0 01-.711-.117 1.853 1.853 0 00-.367-.07c-.003-.01-.005-.015-.007-.015a.203.203 0 00-.012.069 1.433 1.433 0 01-.837 1.23 2.094 2.094 0 01-.787.155 2.142 2.142 0 01-.232-.013c.03.023.06.046.087.069a1.385 1.385 0 001.003.238 2.665 2.665 0 01.29-.016 2.696 2.696 0 011.204.286 1.562 1.562 0 01.822 1.492 1.526 1.526 0 00.018.175.41.41 0 00.225.104 1.07 1.07 0 00.34-.124 1.833 1.833 0 01.917-.243 1.878 1.878 0 01.321.028 2.322 2.322 0 012.059 2.208 2.843 2.843 0 01-.483 1.641 1.532 1.532 0 01-1.133.667c-.302.07-.349.1-.39.183-.087.179-.085.187-.058.286a1.715 1.715 0 01.015.947A1.86 1.86 0 019.6 16.18a2.1 2.1 0 00-.439.247 2.24 2.24 0 00.025.416c.05.54.15 1.621-.997 1.96a1.72 1.72 0 01-.49.076 1.366 1.366 0 01-.85-.292 3.233 3.233 0 01-.718-2.654c.015-.28-.009-.306-.11-.415a2.127 2.127 0 01-.52-1.88c.042-.726-.113-.799-.528-.996a1.921 1.921 0 01-1.027-.9 3.089 3.089 0 01-.22-1.467c.014-.488-.017-.503-.068-.529a6.505 6.505 0 01-1.84-1.937zm.682-1.62a6.138 6.138 0 001.818 2.354 1.683 1.683 0 01.78 1.79 1.81 1.81 0 00.095.829c.03.06.116.112.37.232a2.072 2.072 0 011.3 2.417c-.031.557.051.645.165.767a1.719 1.719 0 01.471 1.504c-.06.99.15 1.378.209 1.426l.137-.044c-.012-.001.003-.104-.032-.473a2.464 2.464 0 01.049-1.01 1.941 1.941 0 011.178-1.06 1.24 1.24 0 00.424-.247.378.378 0 00-.012-.205 1.584 1.584 0 01.157-1.294 1.787 1.787 0 011.383-.912 1.756 1.756 0 00.23-.067 1.626 1.626 0 00.245-.8c-.071-.633-.348-.801-.982-.945a.639.639 0 00-.331.1 1.728 1.728 0 01-2.053-.154 1.506 1.506 0 01-.522-1.242c-.01-.218-.01-.218-.118-.28a1.411 1.411 0 00-.553-.11 1.476 1.476 0 00-.174.01 2.635 2.635 0 01-.314.019 2.717 2.717 0 01-1.653-.564c-.068-.056-.143-.106-.223-.16-.404-.273-1.336-.901-.868-1.92a1.047 1.047 0 011.015-.627 2.837 2.837 0 01.71.115 1.09 1.09 0 00.404.082.98.98 0 00.21-.022 1.125 1.125 0 00.026-.15 1.291 1.291 0 01.589-1.032 1.837 1.837 0 01.884-.23 1.814 1.814 0 01.682.132 1.037 1.037 0 00.34.057c.065-.026.086-.142.086-.51a1.413 1.413 0 00-.252-.588 3.626 3.626 0 01-.583-1.55 9.219 9.219 0 00-5.287 4.362zm15.357 9.551a1.1 1.1 0 00.137.095 9.095 9.095 0 00.871-9.063c-.471-.047-.95-.071-1.423-.071a14.37 14.37 0 00-1.838.118c-.634.15-.634.15-.594.518.026.056.165.13.218.16a1.452 1.452 0 01.74.706 2.148 2.148 0 01.138.793 1.375 1.375 0 00.018.22 1.014 1.014 0 00.29.05.688.688 0 00.121-.012 1.17 1.17 0 01.273-.033 1.246 1.246 0 011.249 1.232.42.42 0 00.257.402 1.513 1.513 0 01.718.718c.372.883.044 1.649-.972 2.288a.375.375 0 00-.097.075l.061.217a1.589 1.589 0 01.075.748 2.291 2.291 0 01-.177.51.44.44 0 00-.065.33zM14.854 2.488c-.891.933-.824 1.022-.723 1.155a.317.317 0 00.27.142.954.954 0 00.48-.181 1.695 1.695 0 011.31-.191c.03.008.059.014.088.02a9.161 9.161 0 00-1.425-.945zm-3.849-.847a.197.197 0 00.153.074l.008.01.075-.035a.666.666 0 00.318-.228q-.293-.033-.588-.046c.01.075.021.15.034.225z"
          ></path>
        </svg>
      </DropdownMenu>
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
    categories: Array,
    languages: Array
  },
  data() {
    return {
      /**A numerical index to keep track of which dropdown element is open
       * If no dropdowns are open, assign to null
       */
      openListIndex: null,
      /**if the search disclosure widget is open */
      searchOpen: false,
      languageDropdownOpen: false
    };
  },
  computed: {
    /**returns a bool specifying if any of the disclosure items on the page are open */
    isListOpen() {
      return (
        this.searchOpen ||
        this.languageDropdownOpen ||
        this.openListIndex !== null
      );
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
      this.languageDropdownOpen = false;
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
