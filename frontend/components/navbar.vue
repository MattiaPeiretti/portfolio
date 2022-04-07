<template>
  <div>
    <nav class="centered-page z-50">
      <div class="flex flex-wrap justify-between items-center">
        <div class="logo text-2xl bg-white"><h2>Mattia Peiretti</h2></div>
        <div
          class="
            bg-white
            open-navbar
            flex
            hover:bg-black hover:text-white
            duration-300
            p-2
            rounded-md
            cursor-pointer
          "
          @click="toggleNavbar"
        >
          MENU <icon-burger class="ml-1" />
        </div>
      </div>
      <div
        v-if="isOpen"
        class="
          navbar-opened
          bg-red-400
          z-50
          top-0
          left-0
          right-0
          bottom-0
          text-white
          overflow-hidden
          h-screen
          fixed
        "
      >
        <div
          class="
            centered-page
            flex flex-wrap
            justify-between
            items-center
            text-white
          "
        >
          <div class="logo text-2xl"><h2>Mattia Peiretti</h2></div>
          <div
            class="
              open-navbar
              flex
              hover:bg-black hover:text-white
              duration-300
              p-2
              rounded-md
              cursor-pointer
            "
            @click="toggleNavbar"
          >
            CLOSE <icon-close class="ml-1" />
          </div>
        </div>
        <div class="flex centered-page" style="height: 90vh">
          <div class="nav-links text-6xl flex flex-col">
            <a href="#" class="max-w-sm font-bold pb-6">
              <span class="link link-underline link-underline-black">
                About Me
              </span>
            </a>
            <a href="#" class="max-w-sm font-bold pb-6">
              <span class="link link-underline link-underline-black">
                Works
              </span>
            </a>
            <a href="#" class="max-w-sm font-bold pb-6">
              <span class="link link-underline link-underline-black">
                Blogs
              </span>
            </a>
            <a href="#" class="max-w-sm font-bold pb-6">
              <span class="link link-underline link-underline-black">
                Contact
              </span>
            </a>
          </div>
        </div>
        <div
          class="absolute text-red-500 opacity-30"
          style="font-size: 20vw; bottom: -15%; right: -5%"
        >
          <span>DISCOVER</span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
