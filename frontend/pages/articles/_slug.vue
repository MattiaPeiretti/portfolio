<template>
  <div class="">
    <navbar />
    <div class="centered-page" v-if="articleData">
      <h1 class="text-6xl pt-16">
        {{ articleData.emoji }} {{ articleData.title }}.
      </h1>
      <p class="pt-6 text-gray-600">
        By Mattia Peiretti on {{ articleData.date }}.
      </p>

      <p class="mt-16 text-lg" style="column-width: 45ch; line-height: 1.7">
        {{ articleData.body }}
      </p>
    </div>
    <div class="centered-page" v-else>
      <h1 class="text-6xl pt-16">Whoops, this article does not exist! 🤖</h1>
    </div>

    <global-footer class="mt-72"></global-footer>
  </div>
</template>

<script>
import { getCaseBySlug } from "@/plugins/data.plugin.js";

export default {
  data() {
    return {
      articleData: {},
    };
  },
  fetch() {
    this.articleData = getCaseBySlug(this.$route.params.slug);
  },
};
</script>

<style>
.grid-cases {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, 18rem);
}
</style>
