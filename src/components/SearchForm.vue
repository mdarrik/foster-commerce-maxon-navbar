<template>
  <form
    ref="formRef"
    class="lg:absolute mx-auto left-0 right-0 top-0 bottom-0 flex items-center justify-center transition-all ease-in-out duration-200"
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 19.8 20.7"
        focusable="false"
        aria-hidden="true"
        class="w-5 h-5 fill-current"
      >
        <path
          aria-hidden="true"
          d="M14 13.6l5.8 5.8-1.3 1.3-5.9-5.9c-1.3.9-2.9 1.4-4.5 1.4-4.5 0-8.1-3.6-8.1-8.1S3.6 0 8.1 0s8.1 3.6 8.1 8.1c0 2.1-.8 4.1-2.2 5.5zm-5.9.8c3.5 0 6.3-2.8 6.3-6.3s-2.8-6.3-6.3-6.3-6.3 2.8-6.3 6.3 2.8 6.3 6.3 6.3z"
        ></path>
      </svg>
    </button>
  </form>
</template>
<script>
/**Search form for searching within the site  */
export default {
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
