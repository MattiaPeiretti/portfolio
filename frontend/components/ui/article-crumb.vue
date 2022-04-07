<template>
  <li class="w-72 py-6">
    <a :href="`/articles/${articleData.slug}`">
      <div
        class="
          thumbnail
          h-56
          w-72
          bg-red-300
          rounded-xl
          hover:ring-2 hover:ring-blue-300
        "
      ></div>
    </a>
    <h2 class="title text-2xl pt-4 pb-2">{{ articleData.title }}</h2>
    <span> {{ articleData.except }}</span>
  </li>
</template>

<script>
export default {
  props: {
    articleData: {
      type: Object,
      required: true,
    },
  },
};
</script>
