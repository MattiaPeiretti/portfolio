<template>
  <div class="">
    <navbar />
    <section>
      <div class="centered-page">
        <div
          class="flex w-full justify-between items-center relative"
          style="height: 90vh"
        >
          <div class="w-3/6 lg:w-2/6">
            <h1 class="text-4xl">
              Hello, I'm Mattia. I develop, design, and have fun!
            </h1>
            <a href="" class="primary-button mt-8">Discover</a>
          </div>
          <div
            class="relative w-3/6 xl:scale-100 lg:scale-75 scale-50"
            style="z-index: -1 overflow-hidden"
          >
            <solar-system
              style="transform: translateY(-10vh); pointer-events: none"
            />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="pt-64 centered-page">
        <h2 class="text-4xl pb-6">My Works.</h2>
        <ul class="grid-cases w-full">
          <ui-article-crumb
            v-for="(data, index) in cases"
            v-bind:key="index"
            :articleData="data"
            class="mr-6"
          />
        </ul>
      </div>
    </section>
    <global-footer class="mt-72"></global-footer>
  </div>
</template>

<script>
import { getAllCases } from "@/plugins/data.plugin.js";

export default {
  data() {
    return {
      cases: [],
    };
  },
  fetch() {
    this.cases = getAllCases();
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
