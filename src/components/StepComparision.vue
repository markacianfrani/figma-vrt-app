<template>
  <div class="m-auto flex flex-col mt-4">
    <div
      class="rounded-md mt-4 bg-blue-50 p-4"
      v-if="branches && branches.length > 0"
    >
      <div class="flex">
        <div class="flex-shrink-0">
          <InformationCircleIcon
            class="h-5 w-5 text-blue-400"
            aria-hidden="true"
          />
        </div>
        <div class="ml-3 flex-1 flex-col md:flex md:justify-between">
          <p class="text-sm text-blue-700">
            Looks like your Figma file has some branches. Wanna compare against
            a different branch instead?
          </p>
          <div class="mt-4">
            <label
              for="location"
              class="block text-sm font-medium text-gray-700"
              >Branches</label
            >
            <select
              id="location"
              name="location"
              @change="$emit('selectBranch', $event.target.value)"
              class="
                mt-1
                block
                w-full
                pl-3
                pr-10
                py-2
                text-base
                border-gray-300
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                sm:text-sm
                rounded-md
              "
            >
              <option>Select a Branch</option>
              <option
                v-for="(branch, index) in branches"
                :key="index"
                :value="branch.key"
              >
                {{ branch.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>

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
import { InformationCircleIcon } from "@heroicons/vue/solid";
export default {
  name: "StepComparision",
  components: { InformationCircleIcon },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    branches: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
