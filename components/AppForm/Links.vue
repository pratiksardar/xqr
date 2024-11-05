<template>
  <div class="mt-4 border-b border-gray-400 -ml-4 mb-4 p-2"></div>
  <base-form-section title="Custom Links" description="Add some links here and drag to arrange" class="text-xl">
    <template #helpertext>
      <p class="mt-1 text-xs text-gray-600">
        Icon keys can be found in
        <a class="underline" href="https://icones.js.org/"
          >https://icones.js.org/</a
        >.
      </p>
    </template>
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-medium text-gray-900 flex items-center">
      Add Link
      <button @click="appendLink" class="ml-2">
        <Icon icon="fluent:add-circle-24-regular" class="h-7 w-7 text-blue-500" />
      </button>
      </h3>
    </div>
    <draggable
      :list="modelValue"
      item-key="link"
      class="list-group"
      ghost-class="ghost"
      handle=".drag-handle"
    >
      <template #item="{ element: link, index }">
        <div class="relative mb-6 group">
          <div class="flex items-center space-x-2">
            <input
              type="text"
              v-model="link.l"
              placeholder="Label"
              class="block w-1/3 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <input
              type="text"
              v-model="link.i"
              placeholder="Icon"
              class="block w-1/3 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <input
              type="url"
              v-model="link.u"
              placeholder="URL"
              class="block w-1/3 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <button class="ml-2 mt-2 drag-handle">
              <Icon
                icon="radix-icons:drag-handle-dots-2"
                class="h-6 w-6 text-slate-500"
              />
            </button>
          </div>
          <button @click="removeLink(index)" class="ml-2 mt-2">
            <Icon
              icon="radix-icons:trash"
              class="h-6 w-6 text-red-500"
            />
          </button>
        </div>
      </template>
    </draggable>
  </base-form-section>
</template>

<script setup>
import draggable from 'vuedraggable'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: Array,
})
const appendLink = () => {
  props.modelValue.push({
    l: '',
    i: '',
    u: '',
  })
  emit('update:modelValue', props.modelValue)
}
const removeLink = (index) => {
  props.modelValue.splice(index, 1)
  emit('update:modelValue', props.modelValue)
}
</script>

<style scoped>
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>