<template>
  <div>
    <div class="m-auto flex mb-8">
      <button
        @click="goDiff"
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
          disabled:opacity-50 disabled:cursor-not-allowed
          text-white
          bg-indigo-600
          hover:bg-indigo-700
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-500
        "
      >
        Compare Results
      </button>
    </div>
    <div
      class="mb-4 bg-white overflow-hidden shadow rounded-lg"
      :class="[
        page.diffPercent > 0 ? 'border-red-500 border-2' : 'border-gray-400',
      ]"
      v-for="(page, index) in pages"
      :key="index"
    >
      <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {{ page.name }}
        </h3>
      </div>
      <div class="px-4 py-5 sm:p-6">
        <div class="grid gap-4 grid-cols-3">
          <div>
            <span class="text-sm text-gray-400">Baseline</span>
            <a
              href="#"
              @click.prevent="openImage(page.baselineImage)"
              style="width: 350px; height: 350px"
              class="border-4 hover:border-gray-300 overflow-hidden block"
            >
              <canvas :ref="`${page.nodeId}-baseline`"></canvas>
            </a>
          </div>
          <div>
            <span class="text-sm text-gray-400">Comparision</span>
            <a
              href="#"
              class="overflow-hidden border-4 hover:border-gray-300 block"
              style="width: 350px; height: 350px"
              @click.prevent="openImage(page.comparisionImage)"
            >
              <div
                v-if="!page.comparisionImage"
                class="
                  absolute
                  top-1/2
                  left-1/2
                  transform
                  -translate-x-1/2 -translate-y-1/2
                "
              >
                No Comparision Image
              </div>
              <canvas :ref="`${page.nodeId}-comparision`"></canvas>
            </a>
          </div>
          <div class="relative">
            <span class="text-sm text-gray-400">Difference</span>
            <a
              href="#"
              class="overflow-hidden border-4 hover:border-gray-300 block"
              @click.prevent="openImage(page.diffImage)"
              style="width: 350px; height: 350px"
            >
              <div
                v-if="!page.diffImage"
                class="
                  absolute
                  top-1/2
                  left-1/2
                  transform
                  -translate-x-1/2 -translate-y-1/2
                "
              >
                No Diff
              </div>

              <canvas :ref="`${page.nodeId}-diff`" class="nhidden"></canvas>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pixelmatch from "pixelmatch";
import { CheckIcon } from "@heroicons/vue/solid";
export default {
  name: "StepDiff",
  props: ["pageSet", "pages"],
  components: { CheckIcon },
  data() {
    return {
      loading: false,
      diffComplete: false,
      images: [],
    };
  },
  created() {
    this.pages.forEach((page) => {
      // page.status = "Calculating";
      // page.diffPercent = 0;
    });
  },
  async mounted() {
    await this.loadData();
  },
  methods: {
    async draw(page, context) {
      return new Promise((resolve, reject) => {
        const canvas = this.$refs[`${page.nodeId}-${context}`];
        const baselineImage = new Image();
        baselineImage.addEventListener("load", () => {
          canvas.width = baselineImage.width;
          canvas.height = baselineImage.height;
          canvas.getContext("2d").drawImage(baselineImage, 0, 0);
        });
        if (context === "baseline") {
          baselineImage.src = page.baselineImage;
        }

        if (context === "comparision") {
          baselineImage.src = page.comparisionImage;
        }

        if (context === "diff") {
          baselineImage.src = page.diffImage;
        }
        resolve();
      });
    },
    async loadData() {
      this.loading = true;
      for (const pageData in this.pages) {
        const page = this.pages[pageData];
        await this.draw(page, "baseline");
        await this.draw(page, "comparision");
        if (page.diffImage) {
          await this.draw(page, "diff");
        }
      }
      this.loading = false;
    },

    openImage(imageData) {
      const newWindow = window.open("about:blank");
      const image = new Image();
      image.src = imageData;
      setTimeout(function () {
        newWindow.document.write(image.outerHTML);
      }, 0);
    },
    convertDataURIToBinary(dataURI) {
      var BASE64_MARKER = ";base64,";
      var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
      var base64 = dataURI.substring(base64Index);
      var raw = window.atob(base64);
      var rawLength = raw.length;
      var array = new Uint8Array(new ArrayBuffer(rawLength));

      for (let i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i);
      }
      return array;
    },
    goDiff() {
      this.loading = true;
      this.pages.forEach((page) => {
        page.status = "Calculating...";
        const baselineCanvas = this.$refs[`${page.nodeId}-baseline`];
        const comparisionCanvas = this.$refs[`${page.nodeId}-comparision`];
        const diffCanvas = this.$refs[`${page.nodeId}-diff`];

        const img1Ctx = baselineCanvas.getContext("2d");
        const img2Ctx = comparisionCanvas.getContext("2d");
        const diffCtx = diffCanvas.getContext("2d");
        const { width, height } = baselineCanvas;
        diffCanvas.width = width;
        diffCanvas.height = height;

        const img1 = img1Ctx.getImageData(0, 0, width, height);
        const img2 = img2Ctx.getImageData(0, 0, width, height);
        const diff = diffCtx.createImageData(width, height);

        const diffCount = pixelmatch(
          img1.data,
          img2.data,
          diff.data,
          width,
          height,
          { threshold: 0.1 }
        );

        diffCtx.putImageData(diff, 0, 0);
        page.diffImage = diffCanvas.toDataURL();
        page.diffPercent = diffCount;
        page.status = "Done";
      });
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
