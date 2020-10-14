<template>
  <header>
    <a class="sr-only focus:not-sr-only underline" href="#main">
      Skip to Main Content
    </a>
    <div class="bg-gray-900 text-white flex justify-between h-20">
      <TheHeaderLogo lang="en" class="w-full" />
      <nav></nav>
    </div>
  </header>
</template>

<script>
import TheHeaderLogo from "./TheHeaderLogo";
export default {
  components: {
    TheHeaderLogo
  }
};
</script>
