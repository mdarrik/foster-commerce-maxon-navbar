import { action } from "@storybook/addon-actions";

import HamburgerButton from "../components/HamburgerButton";

export default {
  component: HamburgerButton,
  title: "HamburgerButton",
  argTypes: { onClick: { action: "clicked" } }
};

export const defaultStory = () => ({
  components: { HamburgerButton },
  template: `<div class="bg-gray-900 w-full h-full"><HamburgerButton :active="active" @click="onClick" /></div>`,
  data() {
    return {
      active: false
    };
  },
  methods: {
    onClick() {
      action("clicked");
      this.active = !this.active;
    }
  }
});
