<template>
  <a href="#" class="block hover:bg-gray-50">
    <div class="px-4 py-4 sm:px-6">
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium text-indigo-600 truncate">
          {{ position.title }}
        </p>
        <div class="ml-2 flex-shrink-0 flex">
          <p
            class="
              px-2
              inline-flex
              text-xs
              leading-5
              font-semibold
              rounded-full
              bg-green-100
              text-green-800
            "
          >
            {{ position.type }}
          </p>
        </div>
      </div>
      <div class="mt-2 sm:flex sm:justify-between">
        <div class="sm:flex">
          <p class="flex items-center text-sm text-gray-500">
            <UsersIcon
              class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            {{ position.department }}
          </p>
          <p
            class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6"
          >
            <LocationMarkerIcon
              class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            {{ position.location }}
          </p>
        </div>
        <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
          <CalendarIcon
            class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <p>
            Closing on
            {{ " " }}
            <time :datetime="position.closeDate">{{
              position.closeDateFull
            }}</time>
          </p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import { CalendarIcon, LocationMarkerIcon, UsersIcon } from '@heroicons/vue/solid'
export default {
  name: "BaseListItem",
  props: ["position"],
    components: {
    CalendarIcon,
    LocationMarkerIcon,
    UsersIcon
  },
};
</script>

<style lang="scss" scoped></style>
