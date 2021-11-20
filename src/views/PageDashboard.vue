<template>
  <div>
    <base-steps @step-changed="onStepChange" :steps="steps"></base-steps>
    <div v-if="currentStep.id == 1">
      <step-baseline
        class="mt-4"
        :loading="loading"
        @fetch="submitSnapshotFetch('baseline')"
      ></step-baseline>
    </div>

    <div v-if="currentStep.id == 2">
      <step-comparision
        :loading="loading"
        :branches="branches"
        @fetch="submitSnapshotFetch('comparision')"
        @selectBranch="selectBranch"
      ></step-comparision>
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
import BaseSteps from "../components/BaseSteps.vue";
import StepDiff from "../components/StepDiff.vue";
import { Client } from "../client";
import { PageSet } from "../model/PageSet";
import { Page } from "../model/Page";
import StatusList from "../components/StatusList.vue";
import StepSelectPages from "../components/StepSelectPages.vue";
import StepBaseline from "../components/StepBaseline.vue";
import StepComparision from "../components/StepComparision.vue";
export default {
  name: "PageDashboard",
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
      branches: [],
      client: null,
      selectedBranch: null,
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
    this.selectedBranch = null
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
    selectBranch(e) {
      this.selectedBranch = e
    },
    saveSelectedPages(pages) {
      this.checkedPages = pages;
      this.setStep(1);
    },

    onStepChange(step) {
      this.setStep(step);
    },
    async getPages() {
      this.loading = true;
      this.pageSet.clearPages();
      this.checkedPages = [];
      const data = await this.client.getPages();
      const pages = data.pages
      console.log('data', data);
      if (data.branches) {
        this.branches = data.branches
      }
      for (const nodeId in pages) {
        const page = new Page(pages[nodeId], nodeId);
        this.pageSet.addPage(page);
      }
      this.loading = false;
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
    fetchAndSaveSnapshot(page, context) {
      return new Promise((resolve, reject) => {
        page.status = "Snapshotting...";
        if (this.selectedBranch) {
          this.client.setBranchId(this.selectedBranch)
        }
        this.client
          .getNodeAsPng(page.nodeId)
          .then((urlResponse) => {
            const url = Object.values(urlResponse)[0];
            this.client
              .getBase64(url)
              .then((imageBase64) => {
                if (context === "baseline") {
                  page.setBaselineImage(imageBase64);
                }

                if (context === "comparision") {
                  page.setComparisionImage(imageBase64);
                }

                page.status = "";
                resolve();
              })
              .catch((e) => {
                page.status = "Failed to fetch Snapshot";
                reject(e);
              });
          })
          .catch((e) => {
            page.status = "Failed to fetch Snapshot";
            reject(e);
          })
          .finally(() => {
            this.client.restoreMainFileId()
          })
      });
    },
    async submitSnapshotFetch(context) {
      this.loading = true;
      const images = this.filteredPages.map((page) =>
        this.fetchAndSaveSnapshot(page, context)
      );

      Promise.all(images)
        .then(() => {
          if (context === "baseline") {
            this.setStep(2);
          }

          if (context === "comparision") {
            this.setStep(3);
          }
          this.loading = false;
        })
        .catch((e) => {
          console.log("Error occurred fetching a Page", e);
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
