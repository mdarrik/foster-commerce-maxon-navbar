<template>
  <header ref="headerRef" class="relative w-full h-17">
    <a class="sr-only focus:not-sr-only underline" href="#main">
      Skip to Main Content
    </a>
    <div
      ref="wrapperRef"
      class="bg-gray-900 text-white flex justify-between h-full lg:h-20 items-center px:4 lg:px-10 font-display relative"
      :class="{ 'nav-active': navActive }"
      :inert="searchActive"
      @keydown.esc="navActive = false"
      @focusout="focusout"
    >
      <HamburgerButton
        class="lg:hidden h-12 px-3"
        :active="navActive"
        @click="navActive = !navActive"
      />
      <TheHeaderLogo
        :lang="currentLanguage"
        class="lg:w-1/3"
        :inert="navActive"
      />
      <nav class="lg:contents uppercase">
        <span class="hidden" id="primary-nav-label">Primary Nav</span>
        <PrimaryNav
          :categories="primaryNavCategories"
          :languages="languages"
          class="primary-nav hidden text-white lg:flex lg:w-1/3"
          :class="{ 'lg:hidden': searchActive }"
          aria-labelledby="primary-nav-label"
        />
        <SecondaryNavList
          ref="secondaryNav"
          :languages="languages"
          store-url="#"
          account-url="#"
          search-input-id="desktop-nav-search-input"
          @search-clicked="searchOpened"
        />
      </nav>
    </div>
    <SearchForm
      :active="searchActive"
      @focus-exited="focusExitedSearchForm"
      class="lg:absolute lg:mx-auto left-0 right-0 top-0 bottom-0"
    />
  </header>
</template>

<script>
import TheHeaderLogo from "./TheHeaderLogo";
import PrimaryNav from "./PrimaryNav";
import SecondaryNavList from "./SecondaryNavList";
import SearchForm from "./SearchForm";
import HamburgerButton from "./HamburgerButton";
export default {
  components: {
    TheHeaderLogo,
    PrimaryNav,
    SecondaryNavList,
    SearchForm,
    HamburgerButton
  },
  props: {
    currentLanguage: { default: "en" }
  },
  data() {
    return {
      searchActive: false,
      navActive: false
    };
  },
  methods: {
    focusExitedSearchForm() {
      this.searchActive = false;
      //takes 2 dom ticks for the search button to be focusable.
      //1 tick to update searchActive = false
      // then another to wait for inert to be cleared
      this.$nextTick(() =>
        this.$nextTick(() => this.$refs.secondaryNav.focusSearchButton())
      );
    },
    searchOpened() {
      this.searchActive = true;
    },
    focusout(event) {
      if (
        this.navActive &&
        !this.$refs.wrapperRef.contains(event.relatedTarget)
      ) {
        this.navActive = false;
      }
    }
  },
  created() {
    /**simulate fetching data from an api.
     * It might be better to pass in as props depending on how the site is setup*/
    let navData = require("../../NavData.json");
    this.primaryNavCategories = navData.primaryNavCategories;
    this.languages = navData.languages;
  }
};
</script>
<style scoped lang="postcss">
.nav-active .primary-nav {
  @apply flex absolute flex-col left-0 bg-gray-700 w-full border-gray-400 border-t-2;
  top: 100%;
}
.nav-active .primary-nav >>> li {
  @apply border-gray-600 border-t;
}
</style>
