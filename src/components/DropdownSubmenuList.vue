<template>
  <ul
    class="lg:absolute lg:left-0 bg-gray-700 w-full lg:bg-white lg:text-black rounded-b-md shadow-md ease-in-out duration-100"
    :class="listClasses"
    :aria-hidden="!open"
  >
    <li
      v-for="subcategory in subcategories"
      :key="subcategory.name"
      class="mr-0"
      aria-hidden="!open"
    >
      <a
        :href="subcategory.url"
        class="tracking-wide font-normal px-5 py-1 flex items-center"
        :tabindex="!open ? '-1' : null"
      >
        {{ subcategory.name }}
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["open", "subcategories"],
  computed: {
    listClasses() {
      if (this.open) {
        return "lg:py-3 h-auto lg:w-32 open";
      } else {
        return " p-0 h-px w-px overflow-hidden closed";
      }
    }
  }
};
</script>
<style scoped lang="postcss">
@screen lg {
  ul {
    left: theme("spacing.5");
  }
  ul.closed {
    clip: rect(1px, 1px, 1px, 1px);
    @apply transform translate-y-4;
  }
  ul.open {
    clip: auto;
    width: max-content;
    @apply transform translate-y-4;
  }
  .open a {
    min-width: 10rem;
  }
}
</style>
