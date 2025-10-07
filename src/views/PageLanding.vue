<template>
  <div class="bg-white">
    <main class="pt-8">
      <div class="relative">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div class="absolute inset-0">
              <div
                class="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply"
              />
            </div>
             <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
               <h1
                 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
               >
                 <span class="block text-white">Figma Visual Regression Testing</span>
               </h1>
               <div class="mt-6 max-w-lg mx-auto text-center sm:max-w-3xl">
                 <div class="bg-red-600 text-white p-6 rounded-lg mb-6">
                   <h2 class="text-xl font-bold mb-2">⚠️ This App is No Longer Functional</h2>
                   <p class="text-sm">
                     Due to Figma's updated developer platform policy, this application can no longer authenticate with Figma.
                     All OAuth apps must be re-published with new requirements by November 17, 2025.
                   </p>
                   <p class="text-sm mt-2">
                     <a href="https://developers.figma.com/docs/updates-to-figmas-developer-platform"
                        class="underline hover:no-underline"
                        target="_blank"
                        rel="noopener noreferrer">
                       Learn more about Figma's policy changes →
                     </a>
                   </p>
                 </div>
                 <p class="text-indigo-200 text-lg">
                   This tool was designed to help teams maintain design consistency by comparing visual snapshots of Figma files.
                 </p>
               </div>
             </div>
          </div>
        </div>
      </div>

      <!-- Alternating Feature Sections -->
      <div class="relative pt-16 pb-32 overflow-hidden">
        <div aria-hidden="true" class="absolute inset-x-0 top-0 h-48 from-gray-100" />
        <div class="relative">
          <div
            class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
          >
            <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div class="mt-6">
                  <h2
                    class="text-3xl font-extrabold tracking-tight text-gray-900"
                  >Step 1: Snapshot your current file</h2>
                  <p class="mt-4 text-lg text-gray-500">
                    The first thing you'll want to do is set your baseline. This will go through all of your pages and create snapshot images for each of them.
                    If your file has many pages, you can select or deselect individual pages.
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-12 sm:mt-16 lg:mt-0">
              <div class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:left-0 lg:h-full lg:w-auto"
                  src="/assets/screenshot1.png"
                  alt="first step screenshot"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-24">
          <div
            class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
          >
            <div
              class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2"
            >
              <div>
                <div class="mt-6">
                  <h2
                    class="text-3xl font-extrabold tracking-tight text-gray-900"
                  >Step 2: Go make some changes</h2>
                  <p
                    class="mt-4 text-lg text-gray-500"
                  >Once you've got your baseline snapshots set, go forth and make some changes. For example, you may be curious what will happen if you change a specific color. When you're finished, head back to the app and fetch your comparision screenshots.</p>
                </div>
              </div>
            </div>
            <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
              <div class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/assets/screenshot2.png"
                  alt="second step screenshot"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="relative mt-24">
          <div
            class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
          >
            <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div class="mt-6">
                  <h2
                    class="text-3xl font-extrabold tracking-tight text-gray-900"
                  >Step 3: Compare Results</h2>
                  <p
                    class="mt-4 text-lg text-gray-500"
                  >At a glance, pages that have any visually noticeable changes will be shown as failed. The baseline snapshot is compared against the comparision snapshot to produce a diff image. Any changes will be marked red.</p>
                </div>
              </div>
            </div>
            <div class="mt-12 sm:mt-16 lg:mt-0">
              <div class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:left-0 lg:h-full lg:w-auto"
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
          class="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16"
        >
          <p class="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            Built indifferently by
            <a class="font-bold" href="https://cianfrani.me">Mark Anthony Cianfrani</a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { MenuIcon, XIcon } from "@heroicons/vue/solid";
export default {
  components: {
    MenuIcon,
    XIcon,
  },
  data() {
    return {
      open: false,
    };
  },
  
  mounted () {
  },

};
</script>

