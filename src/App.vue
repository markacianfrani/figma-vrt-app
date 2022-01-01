<template>
  <router-view></router-view>
</template>

<script>
import { MenuIcon, XIcon } from "@heroicons/vue/solid";

export default {
  components: {
    MenuIcon,
    XIcon,
  },
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style scoped>
.link:not(.router-link-active) {
  @apply text-gray-300 hover:bg-gray-700 hover:text-white;
}
.link.router-link-active {
  @apply bg-gray-900 text-white;
}
</style>
