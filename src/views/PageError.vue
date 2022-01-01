<template>
  <div class="rounded-md bg-red-50 p-4">
    <div class="">
      <div class="ml-3 text-center">
        <h3 class="text-lg font-medium text-red-800 text-center">
          {{ errorTitle }}
        </h3>
        <p class="mt-2 text-red-700">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    errorTitle: {
      type: String,
      default:
        "Whoops there was an error and I'm too lazy to do proper error handling.",
    },
    errorMessage: {
      type: String,
      default: "You might want to make sure your token and file ID are good.",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>