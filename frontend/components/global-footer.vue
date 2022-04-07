<template>
  <footer class="footer-1 bg-gray-100 py-8 sm:py-12">
    <div class="mx-auto px-8 sm:w-full lg:w-11/12 2xl:w-10/12">
      <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
        <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
          <h5 class="text-xl font-bold mb-6">Handy Links</h5>
          <ul class="list-none footer-links">
            <li class="mb-2"></li>
            <li class="mb-2">
              <a href="/about-us" class="lnk">LinkedIn</a>
            </li>
            <li class="mb-2">
              <a href="/about-us" class="lnk">GitHub</a>
            </li>
          </ul>
        </div>
        <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
          <h5 class="text-xl font-bold mb-6">Contact</h5>
          Please contact me at:
          <ul class="list-none footer-links">
            <li class="mb-2">
              <a href="mailto:contact@mattiapeiretti.com" class="lnk"
                >contact@mattiapeiretti.com</a
              >
            </li>
          </ul>
        </div>

        <div class="px-4 md:mt-0 mt-4 sm:w-1/3 xl:w-1/6 xl:mt-0 xl:ml-auto">
          <h5 class="text-xl font-bold mb-6 xl:text-left">Stay Connected</h5>
          <div class="flex justify-start">
            <a
              class="
                w-8
                h-8
                border border-2 border-gray-400
                rounded-full
                py-1
                text-gray-600
                hover:text-white hover:bg-blue-600 hover:border-blue-600
              "
            >
              <i class="fab fa-facebook"></i>
            </a>
            <a
              class="
                w-8
                h-8
                border border-2 border-gray-400
                rounded-full
                py-1
                ml-2
                text-gray-600
                hover:text-white hover:bg-blue-400 hover:border-blue-400
              "
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              class="
                w-8
                h-8
                border border-2 border-gray-400
                rounded-full
                py-1
                ml-2
                text-gray-600
                hover:text-white hover:bg-red-600 hover:border-red-600
              "
            >
              <i class="fab fa-google-plus-g"></i>
            </a>
          </div>
        </div>
      </div>

      <div
        class="
          md:flex
          justify-between
          mt-6
          pt-6
          pb-6
          sm:mt-12 sm:pt-12
          border-t
        "
      >
        <div class="">
          © MattiaPeiretti.com {{ new Date().getFullYear() }}, all rights
          reserved.
          <br />
          General Terms and Privacy Policy available at request.
        </div>
        <div>
          Design and development by
          <a class="lnk" href="http://phobosmedia.com/"> PhobosMedia</a> 🌐
        </div>
      </div>
    </div>
  </footer>
</template>

