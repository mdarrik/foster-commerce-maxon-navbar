<template>
  <ul
    class=" absolute left-0 bg-white text-black transform translate-y-4 rounded-b-md shadow-md ease-in-out duration-100"
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
        return "py-3 h-auto w-32 open";
      } else {
        return " p-0 h-px w-px overflow-hidden closed";
      }
    }
  }
};
</script>
<style scoped>
ul {
  left: theme("spacing.5");
}
ul.closed {
  clip: rect(1px, 1px, 1px, 1px);
}
ul.open {
  clip: auto;
  width: max-content;
}
.open a {
  min-width: 10rem;
}
</style>
