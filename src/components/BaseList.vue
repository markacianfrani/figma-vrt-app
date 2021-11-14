<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-md">
    <ul class="divide-y divide-gray-200">
      <li v-for="page in pages" :key="page.nodeId">
        <a href="#" class="block hover:bg-gray-50">
          <div class="px-4 py-4 sm:px-6">
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-indigo-600 truncate">
		      {{page.name}}
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
                  Status
                </p>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  CalendarIcon,
  LocationMarkerIcon,
  UsersIcon,
} from "@heroicons/vue/solid";

export default {
  props: ["pages"],
  components: {
    CalendarIcon,
    LocationMarkerIcon,
    UsersIcon,
  },
  data() {
    return {
      positions: [
        {
          id: 1,
          title: "Back End Developer",
          type: "Full-time",
          location: "Remote",
          department: "Engineering",
          closeDate: "2020-01-07",
          closeDateFull: "January 7, 2020",
        },
        {
          id: 2,
          title: "Front End Developer",
          type: "Full-time",
          location: "Remote",
          department: "Engineering",
          closeDate: "2020-01-07",
          closeDateFull: "January 7, 2020",
        },
        {
          id: 3,
          title: "User Interface Designer",
          type: "Full-time",
          location: "Remote",
          department: "Design",
          closeDate: "2020-01-14",
          closeDateFull: "January 14, 2020",
        },
      ],
    };
  },
};
</script>
