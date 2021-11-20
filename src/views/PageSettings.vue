<template>
  <div>
    <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
      <section aria-labelledby="payment_details_heading">
        <form action="#" method="POST" @submit.prevent="saveSettings">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="bg-white py-6 px-4 sm:p-6">
              <div>
                <h2
                  id="payment_details_heading"
                  class="text-lg leading-6 font-medium text-gray-900"
                >
                  Figma API
                </h2>
                <p class="mt-1 text-sm text-gray-500">
                  Create a
                  <a href="https://www.figma.com/developers/api#access-tokens"
                    >Personal Access Token</a
                  >
                  in Figma.
                </p>
              </div>

              <div class="mt-6 grid grid-cols-4 gap-6">
                <div class="col-span-4 sm:col-span-2">
                  <label
                    for="token"
                    class="block text-sm font-medium text-gray-700"
                    >Access Token</label
                  >
                  <input
                    type="password"
                    name="token"
                    id="token"
                    v-model="token"
                    class="
                      mt-1
                      block
                      w-full
                      border border-gray-300
                      rounded-md
                      shadow-sm
                      py-2
                      px-3
                      focus:outline-none
                      focus:ring-gray-900
                      focus:border-gray-900
                      sm:text-sm
                    "
                  />
                </div>
              </div>

              <div class="mt-6 grid grid-cols-4 gap-6">
                <div class="col-span-4 sm:col-span-2">
                  <label
                    for="file_id"
                    class="block text-sm font-medium text-gray-700"
                    >Figma File ID</label
                  >
                  <input
                    type="text"
                    name="file_id"
                    v-model="file_id"
                    id="file_id"
                    class="
                      mt-1
                      block
                      w-full
                      border border-gray-300
                      rounded-md
                      shadow-sm
                      py-2
                      px-3
                      focus:outline-none
                      focus:ring-gray-900
                      focus:border-gray-900
                      sm:text-sm
                    "
                  />
                  <p class="mt-3 text-sm text-gray-400">
                    Open your Figma file in the browser and copy the part in the
                    url that comes after "/file/". For example:
                    https://www.figma.com/file/<strong>Ax2P3s93c3536a7gSwAlvF</strong>/My-Figma-File
                  </p>
                </div>
              </div>
            </div>

            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                class="
                  bg-gray-800
                  border border-transparent
                  rounded-md
                  shadow-sm
                  py-2
                  px-4
                  inline-flex
                  justify-center
                  text-sm
                  font-medium
                  text-white
                  hover:bg-gray-900
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-gray-900
                "
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: ["settings"],
  data() {
    return {
      token: "",
      file_id: "",
    };
  },
  created() {
    console.log('this.', this.$store.state);
    this.token = this.$store.state.user.token;
    this.file_id = this.$store.state.user.fileId;
  },
  methods: {
    saveSettings() {
      this.$store.commit("user/addToken", this.token);
      this.$store.commit("user/addFileId", this.file_id);
      alert('settings saved')
    },
  },
};
</script>

<style lang="scss" scoped></style>
