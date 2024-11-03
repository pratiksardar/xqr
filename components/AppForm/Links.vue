<template>
  <base-form-section title="Links" description="Add some links here">
    <template #helpertext>
      <p class="mt-1 text-xs text-gray-600">
        Icon keys can be found in
        <a class="underline" href="https://icones.js.org/"
          >https://icones.js.org/</a
        >.
      </p>
    </template>
    <draggable
      :list="modelValue"
      item-key="link"
      class="list-group"
      ghost-class="ghost"
    >
      <template #item="{ element: link }">
        <div class="relative mb-6 group">
          <button class="absolute top-2 -left-8">
            <Icon
              icon="radix-icons:drag-handle-dots-2"
              class="h-6 w-6 text-slate-500 drag-handle"
            />
          </button>
          <button @click="removeLink(link)" class="absolute top-2 -right-8">
            <Icon
              icon="radix-icons:trash"
              class="h-6 w-6 text-slate-500"
            />
          </button>
          <ExternalLink
            :label="link.label"
            :icon="link.icon"
            :url="link.url"
          />
        </div>
      </template>
    </draggable>
    <button @click="appendLink" class="mt-4">
      <Icon icon="fluent:add-circle-24-regular" class="h-6 w-6" />
    </button>
  </base-form-section>
</template>

<script setup>
import draggable from 'vuedraggable'
import { Icon } from '@iconify/vue'
import ExternalLink from '../ExternalLink.vue'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: Array,
})

const appendLink = () => {
  props.modelValue.push({
    label: '',
    icon: '',
    url: '',
  })
  emit('update:modelValue', props.modelValue)
}

const removeLink = (link) => {
  const index = props.modelValue.indexOf(link)
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