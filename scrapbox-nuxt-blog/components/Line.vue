<script setup>
const props = defineProps({
  line: Object,
  hasPrevLineQuote: Boolean,
  hasNextLineQuote: Boolean,
})

const lineClass = (line) => {
  const hasImage = line.nodes.some(node => node.type === 'image')
  const isQuote = line.nodes.some(node => node.type === 'quote')
  return {
    'flex': hasImage,
    'text-text-light': isQuote,
    'bg-bg-light': isQuote,
    'px-4': isQuote,
    'pt-2': isQuote && !props.hasPrevLineQuote,
    'pb-2': isQuote && !props.hasNextLineQuote,
    'my-2': !isQuote,
    'leading-relaxed': true,
    'text-justify': true,
    'break-words': true,
  }
}

const indentClass = (line) => {
  const indent = line.indent
  return {
    'ml-4': indent === 2,
    'ml-8': indent === 3,
    'ml-12': indent === 4,
    'ml-16': indent === 5,
    'ml-20': indent === 6,
    'ml-24': indent === 7,
    'ml-28': indent === 8,
  }
}
</script>

<template>
  <div>
    <!-- line -->
    <div v-if="line.type === 'line'" :class="lineClass(line)">
      <!-- 空行 -->
      <div v-if="line.nodes.length === 0" class="my-12"></div>
      <!-- インデント -->
      <Dot v-if="line.indent > 0" :class="indentClass(line)" />
      <!-- ノード -->
      <Node v-for="node in line.nodes" :node="node" />
    </div>
    <!-- table -->
    <LineTable
      v-if="line.type === 'table'"
      :line="line"
      class="w-full my-2"
    />
    <!-- codeBlock -->
    <CodeBlock
      v-if="line.type === 'codeBlock'"
      :code="line.content"
      class="my-2"
    />
  </div>
</template>
