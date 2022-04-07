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
            <a href="#WORKS" class="primary-button mt-8">Discover</a>
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

    <section id="ABOUT">
      <div class="pt-64 centered-page">
        <h2 class="text-4xl pb-6">Who am I?</h2>

        <p class="text-lg" style="column-width: 45ch; line-height: 1.7">
          Hello there, dear internet surfer! 🏄‍ I am Mattia Peiretti, currently
          a full stack developer commercially, and a whatever-does-the-job
          developer in my free time. Here on this website you can find little
          stories about my journey. How I approached programming for the first
          time and why. The technologies that I have played with, some cool
          projects I worked on and so on. If I tickle your fancy, make sure to
          follow me on
          <a class="lnk" href="https://github.com/mattiapeiretti">GitHub</a>, we
          devs must stick together after all.
        </p>
      </div>
    </section>

    <section id="WORKS">
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

    <section id="BLOGS">
      <div class="pt-64 centered-page">
        <div
          class="
            h-72
            w-full
            text-white text-3xl
            rounded-xl
            bg-red-500
            flex
            justify-center
            items-center
          "
        >
          <h2 class="mx-3">
            Check my
            <a
              href="https://blog.mattiapeiretti.com/"
              style="width: 4ch"
              class="font-bold pb-6"
            >
              <span class="link link-underline link-underline-black"
                >Blog</span
              ></a
            >
            for interesting stories! 🚀
          </h2>
        </div>
      </div>
    </section>
    <global-footer id="FOOTER" class="mt-72"></global-footer>
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
