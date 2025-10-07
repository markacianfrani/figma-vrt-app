<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="text-center">
      <div v-if="error" class="text-red-500">
        {{ error }}
      </div>
      <div v-else class="text-gray-600">
        Authenticating... Redirecting to settings...
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageAuthCallback",
  data() {
    return {
      error: null,
    };
  },
  created() {
    // Authentication is handled in router beforeEnter guard
    // Just redirect to settings after a brief delay
    setTimeout(() => {
      this.$router.push('/app/settings');
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
</style>