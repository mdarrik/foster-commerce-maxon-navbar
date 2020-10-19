<template>
  <header ref="headerRef" class="relative w-full h-17">
    <a class="sr-only focus:not-sr-only underline" href="#main">
      Skip to Main Content
    </a>
    <div
      class="bg-gray-900 text-white flex justify-between h-full lg:h-20 items-center px:4 lg:px-10 font-display relative"
      :class="{ 'nav-active': navActive }"
      :inert="searchActive"
      @keydown.esc="navActive = false"
    >
      <HamburgerButton
        class="lg:hidden h-12 px-3"
        :active="navActive"
        @click="navActive = !navActive"
      />
      <TheHeaderLogo :lang="lang" class="lg:w-1/3" :inert="navActive" />
      <nav class="lg:contents uppercase">
        <span class="hidden" id="primary-nav-label">Primary Nav</span>
        <PrimaryNav
          :categories="primaryNavCategories"
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
  data() {
    return {
      primaryNavCategories: [
        {
          name: "Products",
          subcategories: [
            { name: "Cinema 4D", url: "#" },
            { name: "Cinebench", url: "#" },
            { name: "Redshift", url: "#" },
            { name: "C40 + Redshift", url: "#" },
            { name: "Maxon One", url: "#" },
            { name: "Cineware", url: "#" }
          ]
        },
        {
          name: "News",
          subcategories: [
            { name: "Newsroom", url: "#" },
            { name: "Events", url: "#" }
          ]
        },
        {
          name: "Learn",
          subcategories: [
            {
              name: "Cineversity",
              url: "#",
              isExternal: true
            },
            {
              name: "Educational Licensing",
              url: "#"
            },
            {
              name: "Certification",
              url: "#"
            },
            {
              name: "Training Partners",
              url: "#"
            }
          ]
        },
        { name: "Try", url: "#" },
        { name: "Buy", url: "#" }
      ],
      lang: "en",
      languages: [
        {
          name: "english",
          url: "~/en/"
        },
        {
          name: "de",
          url: "~/de/"
        }
      ],
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
    }
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
