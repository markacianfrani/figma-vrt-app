<template>
  <div class="bg-white">
    <main class="pt-8">
      <div class="relative">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div class="absolute inset-0">
              <div
                class="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-purple-800
                  to-indigo-700
                  mix-blend-multiply
                "
              />
            </div>
            <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1
                class="
                  text-center text-4xl
                  font-extrabold
                  tracking-tight
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                <span class="block text-white"
                  >Figma Visual Regression Testing</span
                >
              </h1>
              <p
                class="
                  mt-6
                  max-w-lg
                  mx-auto
                  text-center text-xl text-indigo-200
                  sm:max-w-3xl
                "
              >
	      	Take snapshots. Make changes. Compare results. 
              </p>
              <div
                class="
                  mt-10
                  max-w-sm
                  mx-auto
                  sm:max-w-none sm:flex sm:justify-center
                "
              >
                <a
                  href="https://figma-vrt-oauth.vercel.app/connect/figma"
                  class="
                    flex
                    items-center
                    justify-center
                    px-4
                    py-3
                    border border-transparent
                    text-base
                    font-medium
                    rounded-md
                    shadow-sm
                    text-indigo-700
                    bg-white
                    hover:bg-indigo-50
                    sm:px-8
                  "
                >
                  Login with Figma
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Alternating Feature Sections -->
      <div class="relative pt-16 pb-32 overflow-hidden">
        <div
          aria-hidden="true"
          class="absolute inset-x-0 top-0 h-48  from-gray-100"
        />
        <div class="relative">
          <div
            class="
              lg:mx-auto
              lg:max-w-7xl
              lg:px-8
              lg:grid
              lg:grid-cols-2
              lg:grid-flow-col-dense
              lg:gap-24
            "
          >
            <div
              class="
                px-4
                max-w-xl
                mx-auto
                sm:px-6
                lg:py-16 lg:max-w-none lg:mx-0 lg:px-0
              "
            >
              <div>
                
                <div class="mt-6">
                  <h2
                    class="text-3xl font-extrabold tracking-tight text-gray-900"
                  >
		  Step 1: Snapshot your current file
                  </h2>
                  <p class="mt-4 text-lg text-gray-500">
			  The first thing you'll want to do is set your baseline. This will go through all of your pages and create snapshot images for each of them. 
			  If your file has many pages, you can select or deselect individual pages.
                  </p>
                </div>
              </div>
              
            </div>
            <div class="mt-12 sm:mt-16 lg:mt-0">
              <div
                class="
                  pl-4
                  -mr-48
                  sm:pl-6
                  md:-mr-16
                  lg:px-0 lg:m-0 lg:relative lg:h-full
                "
              >
                <img
                  class="
                    w-full
                    rounded-xl
                    shadow-xl
                    ring-1 ring-black ring-opacity-5
                    lg:left-0 lg:h-full lg:w-auto
                  "
                  src="/assets/screenshot1.png"
                  alt="first step screenshot"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-24">
          <div
            class="
              lg:mx-auto
              lg:max-w-7xl
              lg:px-8
              lg:grid
              lg:grid-cols-2
              lg:grid-flow-col-dense
              lg:gap-24
            "
          >
            <div
              class="
                px-4
                max-w-xl
                mx-auto
                sm:px-6
                lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2
              "
            >
              <div>
                
                <div class="mt-6">
                  <h2
                    class="text-3xl font-extrabold tracking-tight text-gray-900"
                  >
			Step 2: Go make some changes
                  </h2>
                  <p class="mt-4 text-lg text-gray-500">
			  Once you've got your baseline snapshots set, go forth and make some changes. For example, you may be curious what will happen if you change a specific color. When you're finished, head back to the app and fetch your comparision screenshots.
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
              <div
                class="
                  pr-4
                  -ml-48
                  sm:pr-6
                  md:-ml-16
                  lg:px-0 lg:m-0 lg:relative lg:h-full
                "
              >
                <img
                  class="
                    w-full
                    rounded-xl
                    shadow-xl
                    ring-1 ring-black ring-opacity-5
                    lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none
                  "
                  src="/assets/screenshot2.png"
                  alt="second step screenshot"
                />
              </div>
            </div>
          </div>
        </div>
	<div class="relative mt-24">
          <div
            class="
              lg:mx-auto
              lg:max-w-7xl
              lg:px-8
              lg:grid
              lg:grid-cols-2
              lg:grid-flow-col-dense
              lg:gap-24
            "
          >
            <div
              class="
                px-4
                max-w-xl
                mx-auto
                sm:px-6
                lg:py-16 lg:max-w-none lg:mx-0 lg:px-0
              "
            >
              <div>
                
                <div class="mt-6">
                  <h2
                    class="text-3xl font-extrabold tracking-tight text-gray-900"
                  >
		  Step 3: Compare Results
                  </h2>
                  <p class="mt-4 text-lg text-gray-500">
			  At a glance, pages that have any visually noticeable changes will be shown as failed. The baseline snapshot is compared against the comparision snapshot to produce a diff image. Any changes will be marked red.
			  
                  </p>
                </div>
              </div>
              
            </div>
            <div class="mt-12 sm:mt-16 lg:mt-0">
              <div
                class="
                  pl-4
                  -mr-48
                  sm:pl-6
                  md:-mr-16
                  lg:px-0 lg:m-0 lg:relative lg:h-full
                "
              >
                <img
                  class="
		  w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:left-0 lg:h-full lg:w-auto
                  "
                  src="/assets/screenshot3.png"
                  alt="third step screenshot"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      

      

      
    </main>

    <footer class="bg-gray-50" aria-labelledby="footerHeading">
      <h2 id="footerHeading" class="sr-only">Footer</h2>
      <div class="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:pt-24 lg:px-8">
        <div
          class="
            mt-12
            border-t border-gray-200
            pt-8
            md:flex md:items-center md:justify-between
            lg:mt-16
          "
        >
          <div class="flex space-x-6 md:order-2">
            <a
              v-for="item in footerNavigation.social"
              :key="item.name"
              :href="item.href"
              class="text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
          <p class="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
		  Built indifferently by <a class="font-bold" href="https://cianfrani.me">Mark Anthony Cianfrani</a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { defineComponent, h } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";

const footerNavigation = {
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/markacianfrani",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
            }),
          ]),
      }),
    },
    {
      name: "GitHub",
      href: "https://github.com/markacianfrani",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
  ],
};

export default {
  components: {
    ChevronDownIcon,
  },
  setup() {
    return {
      footerNavigation,
    };
  },
};
</script>