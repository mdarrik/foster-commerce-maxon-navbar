<template>
  <fragment>
    <TheHeader />
    <a href="#">
      test
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
