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

        <p style="column-width: 45ch; line-height: 1.7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet
          mollis mauris, congue lacinia dolor. Pellentesque sit amet diam
          condimentum, dignissim orci vel, pretium lorem. Praesent id finibus
          lacus. Fusce vitae dui elementum, consectetur ipsum vitae, tempor
          turpis. Vivamus facilisis et turpis vestibulum maximus. Praesent
          fermentum nisl quis urna cursus, at porta ligula dignissim. Mauris et
          odio scelerisque, finibus tortor in, hendrerit est. In eget dui
          pulvinar, aliquam mauris a, porttitor magna. Donec suscipit ipsum ut
          magna ultricies consectetur. Nunc vel tellus commodo, elementum sapien
          a, tincidunt massa. Fusce maximus metus vitae purus placerat, non
          tempor ipsum hendrerit. Mauris lobortis odio vel lectus aliquet, non
          auctor elit fermentum. Proin pretium turpis sed purus eleifend, ac
          consectetur nisi aliquet. Ut massa nunc, tristique et rutrum eu,
          varius non ipsum. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Phasellus consequat dui eu
          dapibus dignissim. Etiam felis libero, lacinia quis sapien ultrices,
          imperdiet bibendum erat. Duis at urna magna. Quisque ut congue elit,
          elementum interdum augue. Nullam blandit elit sem, vel mollis nibh
          cursus vitae. Nunc elementum mi eget fermentum semper. Nunc mattis
          vehicula ornare. Etiam scelerisque pulvinar urna, id semper augue
          sodales a. Aliquam erat volutpat. In volutpat, turpis a consequat
          elementum, sapien lacus venenatis nisl, commodo placerat tellus lorem
          quis dolor. Phasellus venenatis scelerisque erat quis suscipit. Ut
          rhoncus, risus id venenatis gravida, leo nunc consectetur urna,
          convallis suscipit ipsum mauris vitae mi. Nunc auctor ultrices nulla
          eget dictum. Donec sit amet enim arcu. Suspendisse aliquam mi in
          feugiat malesuada. Vestibulum nec libero a purus luctus dapibus vel ut
          nisl. Nulla facilisi. Maecenas ut tellus at enim pretium tempor vitae
          vitae velit. Fusce porta nec est vel elementum. Sed non augue congue
          justo consequat porta. Integer luctus metus massa. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed eu vestibulum risus, ut
          posuere metus. Etiam ac nisi id libero fermentum aliquet in id risus.
          Vestibulum volutpat diam sed fringilla auctor. Vestibulum et ligula
          justo. Donec varius elit nisl, vel maximus sem luctus vitae.
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
