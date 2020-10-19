<template>
  <header ref="headerRef" class="relative w-full">
    <a class="sr-only focus:not-sr-only underline" href="#main">
      Skip to Main Content
    </a>
    <div
      class="bg-gray-900 text-white flex justify-between h-20 items-center px-10 font-display relative"
      :inert="!searchActive"
    >
      <TheHeaderLogo :lang="lang" class="w-1/3" />
      <nav class="contents uppercase">
        <span class="hidden" id="primary-nav-label">Primary Nav</span>
        <TheDesktopPrimaryNav
          :categories="primaryNavCategories"
          class="w-1/3"
          :class="{ hidden: searchActive }"
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
    <SearchForm :active="searchActive" @focus-exited="focusExitedSearchForm" />
  </header>
</template>

<script>
import TheHeaderLogo from "./TheHeaderLogo";
import TheDesktopPrimaryNav from "./TheDesktopPrimaryNav";
import SecondaryNavList from "./SecondaryNavList";
import SearchForm from "./SearchForm";
export default {
  components: {
    TheHeaderLogo,
    TheDesktopPrimaryNav,
    SecondaryNavList,
    SearchForm
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
      searchActive: false
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
.search-active {
  @apply w-1/2 opacity-100;
}
.search-inactive {
  @apply opacity-0 w-1/4;
}
</style>
