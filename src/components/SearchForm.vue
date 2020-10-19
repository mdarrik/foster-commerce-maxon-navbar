<template>
  <form
    ref="formRef"
    class=" flex items-center justify-center transition-all ease-in-out duration-200 relative"
    :class="{
      'search-active': active,
      'search-inactive': !active
    }"
    :aria-hidden="!active"
    :inert="!active"
    @focusout="focusout"
  >
    <input
      id="desktop-nav-search-input"
      ref="searchInputRef"
      type="search"
      class="w-full h-14 rounded-full px-10"
      :class="{ hidden: !active }"
      aria-label="Search"
      placeholder="Search"
    />
    <button
      class="absolute right-0 left-auto mr-5 text-gray-600"
      :class="{ hidden: !active }"
      type="submit"
    >
      <span class="sr-only">Submit Search</span>
      <SearchIconSvg />
    </button>
  </form>
</template>
<script>
import SearchIconSvg from "./SearchIconSvg";
/**Search form for searching within the site  */
export default {
  components: {
    SearchIconSvg
  },
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    focusout(event) {
      if (this.active && !this.$refs.formRef.contains(event.relatedTarget)) {
        this.$emit("focus-exited");
      }
    }
  },
  watch: {
    active(newValue) {
      if (newValue) {
        this.$nextTick(() => {
          //takes 2 dom ticks for the inputRef to be focusable.
          //1 to update search active
          // then another to remove inert
          this.$nextTick(() => {
            this.$refs.searchInputRef.focus();
          });
        });
      }
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
