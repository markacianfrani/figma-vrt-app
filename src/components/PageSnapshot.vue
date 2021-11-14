<template>
  <div>
    <base-steps @step-changed="onStepChange" :steps="steps"></base-steps>
     <div v-if="currentStep.id == 1">
      <step-baseline class="mt-4" :loading="loading" @fetch="fetchBaselines"></step-baseline>
    </div>

    <div v-if="currentStep.id == 2">
      <step-comparision :loading="loading" @fetch="fetchComparisions"></step-comparision>
    </div>
    <status-list class="mt-4" :pages="filteredPages"></status-list>

    <div v-if="currentStep.id === 0">
      <step-select-pages
        @fetch-pages="getPages"
        :pages="pages"
        @update-pages="saveSelectedPages"
        @save="setStep(1)"
        :loading="loading"
        :selected-pages="checkedPages"
      ></step-select-pages>
    </div>

   

    <div v-if="currentStep.id == 3">
      <step-diff :pages="filteredPages" :page-set="pageSet"></step-diff>
    </div>
  </div>
</template>

<script>
import BaseSteps from "./BaseSteps.vue";
import StepDiff from "./StepDiff.vue";
import axios from "axios";
import { Client } from "../client";
import { PageSet } from "../model/PageSet";
import { Page } from "../model/Page";
import StatusList from "./StatusList.vue";
import StepSelectPages from "./StepSelectPages.vue";
import StepBaseline from "./StepBaseline.vue";
import StepComparision from "./StepComparision.vue";
export default {
  name: "PageSnapshot",
  components: {
    BaseSteps,
    StepDiff,
    StatusList,
    StepSelectPages,
    StepBaseline,
    StepComparision,
  },
  data() {
    return {
      client: null,
      pageSet: null,
      steps: [
        { id: 0, name: "Select Pages", href: "#", status: "current" },
        { id: 1, name: "Set Baseline", href: "#", status: "upcoming" },
        { id: 2, name: "Set Comparision", href: "#", status: "upcoming" },
        { id: 3, name: "Diff", href: "#", status: "upcoming" },
      ],
      checkedPages: [],
      loading: false,
    };
  },
  created() {
    this.client = new Client();
    this.pageSet = new PageSet();
  },
  computed: {
    filteredPages() {
      return this.pages.filter((page) =>
        this.checkedPages.includes(page.nodeId)
      );
    },
    pages() {
      return this.pageSet.pages;
    },
    hasPages() {
      return this.pages && this.pages.length > 0;
    },
    currentStep() {
      return this.steps.find((step) => step.status === "current");
    },
  },
  methods: {
    saveSelectedPages(pages) {
      this.checkedPages = pages;
      this.setStep(1);
    },
    openImage(node) {
      let w = window.open("about:blank");
      let image = new Image();
      image.src = node.baselineImage;
      setTimeout(function () {
        w.document.write(image.outerHTML);
      }, 0);
    },
    onStepChange(step) {
      this.setStep(step);
    },
    async fetchComparisions() {
      console.log("fetchin compars");
      this.loading = true;
      for (const pageIndex in this.filteredPages) {
        const page = this.filteredPages[pageIndex];
        page.status = "fetching compare";
        const urlResponse = await this.client.getNodeAsPng(page.nodeId);
        const url = Object.values(urlResponse)[0];
        const imageBase64 = await this.client.getBase64(url);
        page.setComparisionImage(imageBase64);
        page.status = "";
      }
 
      this.setStep(3);
      this.loading = false;
    },
    async getPages() {
      try {
        this.loading = true;
        this.pageSet.clearPages();
        this.checkedPages = [];
        const pages = await this.client.getPages();
        console.log("pages", pages);
        for (const nodeId in pages) {
          const page = new Page(pages[nodeId], nodeId);
          this.pageSet.addPage(page);
          // this.checkedPages.push(nodeId)
        }

        this.loading = false;
      } catch (e) {
        console.log(e);
        this.$router.push("/error");
      }
    },
    setStep(name) {
      this.steps.map((step) => {
        if (step.id === name) {
          step.status = "current";
        } else {
          if (step.id < name) {
            step.status = "complete";
          } else {
            step.status = "upcoming";
          }
        }
      });
    },
    async fetchBaselines() {
      this.loading = true;
      // const images = await this.client.getNodeAsPng(this.checkedPages);
      this.filteredPages.map(page => {
        page.status = 'Preparing...'
      })

      for (const pageIndex in this.filteredPages) {
        const page = this.filteredPages[pageIndex];
        page.status = "Snapshotting...";
        const urlResponse = await this.client.getNodeAsPng(page.nodeId);
        const url = Object.values(urlResponse)[0];
        const imageBase64 = await this.client.getBase64(url);
        page.setBaselineImage(imageBase64);
        page.status = "";
      }

      // for (const image in images) {
      //   if (images[image]) {
      //     const page = this.pageSet.getPageByNodeId(image);
      //     const imagebase = await this.client.getBase64(images[image]);
      //     page.setBaselineImage(imagebase);
      //   }
      // }
      this.setStep(2);
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
