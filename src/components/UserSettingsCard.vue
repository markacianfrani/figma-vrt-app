<template>
  <section aria-labelledby="payment_details_heading">
    <div class="shadow sm:rounded-md sm:overflow-hidden">
      <div class="bg-white py-6 px-4 sm:p-6">
        <div class="flex items-center">
          <div
            v-if="!hasToken"
            class="
              flex-shrink-0 flex
              items-center
              justify-center
              h-10
              w-10
              rounded-full
              bg-red-100
              mr-2
            "
          >
            <ExclamationIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
          </div>
          <h2
            id="payment_details_heading"
            class="text-lg leading-6 font-medium text-gray-900"
          >
            Figma Connection Status
          </h2>
          <div class="ml-auto flex items-center">
            <div class="rounded-full h-4 w-4" :class="statusColor"></div>
            <span class="text-gray-400 text-sm ml-2 capitalize">
              {{ status }}
            </span>
          </div>
        </div>

        <div class="mt-6">
          <div class="flex" v-if="hasToken">
            <div class="mr-4 flex-shrink-0">
              <img
                :src="user.userImage"
                alt=""
                class="h-16 w-16 border border-gray-300 bg-white text-gray-300"
              />
            </div>
            <div>
              <h4 class="text-lg font-bold">{{ user.userName }}</h4>
              <p class="mt-1">
                {{ user.userEmail }}
              </p>
            </div>
          </div>
          <div class="flex" v-else>
            <button
              @click.prevent="login"
              class="
                m-auto
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
              Login with Figma
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ExclamationIcon } from "@heroicons/vue/outline";
import { Client } from "../client";

export default {
  name: "UserSettingsCard",
  components: { ExclamationIcon },
  data() {
    return {
      client: null,
      status: "pending",
    };
  },
  created() {
    this.client = new Client();
    this.validateToken();
  },
  computed: {
    statusColor() {
      if (this.status === "connected") {
        return "bg-green-500";
      }

      if (this.status === "failed") {
        return "bg-red-500";
      }
      return "bg-yellow-500";
    },
    hasToken() {
      return this.status === "connected";
    },
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    login() {
      window.location.href =
        "https://figma-vrt-oauth.vercel.app/connect/figma";
    },
    async validateToken() {
      try {
        const me = await this.client.getMe();
        if (me) {
          this.status = "connected";
        }
      } catch (e) {
        this.status = "failed";
      }
    },
  },
};
</script>