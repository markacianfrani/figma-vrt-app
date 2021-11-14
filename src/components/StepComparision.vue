<template>
  <div class="m-auto flex mt-4 ">
    <button
      @click.prevent="$emit('fetch')"
      type="button"
      :disabled="loading"
      class="
        inline-flex
        m-auto
        disabled:opacity-50 disabled:cursor-not-allowed
        items-center
        px-6
        py-3
        border border-transparent
        text-base
        font-medium
        rounded-md
        shadow-sm
        text-white
        bg-indigo-600
        hover:bg-indigo-700
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-indigo-500
      "
    >
      Fetch Comparision Snapshots
    </button>
  </div>
</template>

<script>
export default {
  name: "StepComparision",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped></style>
