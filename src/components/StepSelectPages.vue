<template>
  <div class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
    <div
      class="
        -ml-4
        -mt-2
        flex
        items-center
        justify-between
        px-4
        py-5
        flex-wrap
        sm:flex-nowrap
        border-b
      "
    >
      <div class="ml-4 mt-2">
        <h3 class="text-lg leading-6 font-medium text-gray-900">Pages</h3>
      </div>
      <div class="ml-4 mt-2 flex-shrink-0">
        <button
          type="button"
          @click.prevent="getPages()"
          class="
            inline-flex
            items-center
            px-3
            py-2
            border border-gray-300
            shadow-sm
            text-sm
            leading-4
            font-medium
            rounded-md
            text-gray-700
            bg-white
            hover:bg-gray-50
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          "
        >
          Refresh
        </button>

        <button
          type="button"
          @click.prevent="update"
          class="
            ml-4
            inline-flex
            items-center
            px-3
            py-2
            border border-transparent
            text-sm
            leading-4
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
          Save
        </button>
      </div>
    </div>
    <div v-if="loading" class="p-8 w-full">
      <svg
        class="h-40 w-40 text-blue-400 m-auto"
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
      >
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(1 1)" stroke-width="2">
            <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </svg>
    </div>
    <ul class="divide-y divide-gray-200" v-else>
      <li>
        <a class="block hover:bg-gray-50 dark:hover:bg-gray-900">
          <div class="px-4 py-4 sm:px-6">
            <div class="flex items-center justify-between">
              <label class="inline-flex items-center">
                <input type="checkbox" @change="selectAll" />
                <span
                  class="ml-2 text-md text-gray-700 dark:text-white md:truncate"
                  >Select All</span
                >
              </label>
            </div>
          </div>
        </a>
      </li>
      <li v-for="page in pages" :key="page.nodeId">
        <a class="block hover:bg-gray-50 dark:hover:bg-gray-900">
          <div class="px-4 py-4 sm:px-6">
            <div class="flex items-center justify-between">
              <label class="inline-flex items-center">
                <input
                  type="checkbox"
                  :value="page.nodeId"
                  v-model="checkedPages"
                />
                <span
                  class="ml-2 text-md text-gray-700 dark:text-white md:truncate"
                  >{{ page.name }}</span
                >
              </label>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "StepSelectPages",
  props: ["pages", "selectedPages", "loading"],
  data() {
    return {
      checkedPages: this.selectedPages,
      all: false,
    };
  },
  created() {
    if (this.pages.length < 1) {
      this.getPages();
    }
  },
  methods: {
    selectAll() {
      if (!this.all) {
        const allIds = this.pages.map((page) => page.nodeId);
        this.checkedPages = allIds;
        this.all = true;
      } else {
        this.checkedPages = [];
        this.all = false;
      }
    },
    update() {
      this.$emit("update-pages", this.checkedPages);
    },
    getPages() {
      this.$emit("fetch-pages");
    },
  },
};
</script>

<style lang="scss" scoped></style>
