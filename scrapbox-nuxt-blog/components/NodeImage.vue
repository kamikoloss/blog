<script setup>
const props = defineProps({ node: Object })

const imageClass = (node) => {
  return {
    'max-h-80': node.type === 'image',
  }
}
</script>

<template>
  <NuxtLink :to="node.src" target="_blank">
    <img
      :src="node.src"
      class="border border-gray-300"
      :class="imageClass(node)"
    />
  </NuxtLink>
</template>
