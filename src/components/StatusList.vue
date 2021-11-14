<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-md mb-8">
    <ul class="divide-y divide-gray-200">
      <li v-for="page in pages" :key="page.nodeId">
        <div class="px-4 py-4 sm:px-6">
          <div class="flex items-center justify-between">
            <p class="flex items-center">
              <span class="text-sm font-medium text-indigo-600 truncate">
                {{ page.name }}
              </span>
              <span
                class="
                  ml-4
                  inline-flex
                  items-center
                  px-2
                  py-0.5
                  rounded
                  text-xs
                  font-medium
                "
                :class="[
                  page.baselineImage
                    ? 'text-green-800 bg-green-100 hover:cursor-pointer hover:bg-green-200'
                    : 'text-gray-800 bg-gray-100',
                ]"
              >
                <CheckIcon
                  v-if="page.baselineImage"
                  class="mr-2 w-4 h-4 text-green-800"
                  aria-hidden="true"
                />
                Baseline
              </span>
              <span
                class="
                  ml-4
                  inline-flex
                  items-center
                  px-2
                  py-0.5
                  rounded
                  text-xs
                  font-medium
                "
                :class="[
                  page.comparisionImage
                    ? 'text-green-800 bg-green-100 hover:cursor-pointer hover:bg-green-200'
                    : 'text-gray-800 bg-gray-100',
                ]"
              >
                <CheckIcon
                  v-if="page.comparisionImage"
                  class="mr-2 w-4 h-4 text-green-800"
                  aria-hidden="true"
                />
                Comparision
              </span>
            </p>

            <div class="ml-2 flex-shrink-0 flex">
              <p
                v-if="page.status === 'Done'"
                class="
                  px-2
                  inline-flex
                  text-xs
                  leading-5
                  font-semibold
                  rounded-full
                "
                :class="[
                  page.diffPercent > 10
                    ? 'text-red-800 bg-red-100'
                    : 'text-green-800 bg-green-100',
                ]"
              >
                <template v-if="page.diffPercent > 10">
                  Fail - {{ page.diffPercent }}
                </template>
                <template v-else> Pass </template>


              </p>
                <div v-else :class="[ page.status.includes('Fail') ? 'text-red-500' :'text-gray-400']">
                {{ page.status }}
                </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { CheckIcon } from "@heroicons/vue/solid";
export default {
  name: "StatusList",
  props: ["pages"],
  components: { CheckIcon },
};
</script>

<style lang="scss" scoped></style>
