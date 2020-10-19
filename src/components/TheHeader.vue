<template>
  <header>
    <a class="sr-only focus:not-sr-only underline" href="#main">
      Skip to Main Content
    </a>
    <div
      class="bg-gray-900 text-white flex justify-between h-20 items-center px-10 font-display"
    >
      <TheHeaderLogo :lang="lang" class="w-1/3" />
      <nav class="contents uppercase">
        <span class="hidden" id="primary-nav-label">Primary Nav</span>
        <TheDesktopPrimaryNav
          :categories="primaryNavCategories"
          class="w-1/3"
          aria-labelledby="primary-nav-label"
        />
        <SecondaryNavList />
      </nav>
    </div>
  </header>
</template>

<script>
import TheHeaderLogo from "./TheHeaderLogo";

import TheDesktopPrimaryNav from "./TheDesktopPrimaryNav";
import SecondaryNavList from "./SecondaryNavList";
export default {
  components: {
    TheHeaderLogo,
    TheDesktopPrimaryNav,
    SecondaryNavList
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
      lang: "en"
    };
  }
};
</script>
