<template>
  <div class="m-auto flex">
    <button
      @click.prevent="$emit('fetch')"
      type="button"
      :disabled="loading"
      class="
        inline-flex
	m-auto
        items-center
        px-6
        py-3
        border border-transparent
        text-base
        font-medium
        rounded-md
        shadow-sm
	disabled:opacity-50
	disabled:cursor-not-allowed
        text-white
        bg-indigo-600
        hover:bg-indigo-700
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-indigo-500
      "
    >
      Fetch Baseline Snapshots
    </button>
  </div>
</template>

<script>
export default {
  name: "StepBaseline",
  props: {
	  loading: {
		  type: Boolean,
		  default: false
	  },
  },
};
</script>

<style lang="scss" scoped></style>
