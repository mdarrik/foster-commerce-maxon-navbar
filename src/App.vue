<template>
  <fragment>
    <TheHeader />
    <a href="#">
      This is a test link so closing the search doesn't go to the browser
      chrome.
    </a>
  </fragment>
</template>

<script>
import TheHeader from "./components/TheHeader";
export default {
  name: "App",
  components: { TheHeader }
};
</script>

<style lang="postcss">
@tailwind base;

@tailwind components;

@tailwind utilities;
</style>
