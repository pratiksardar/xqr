<template>
  <main>
    <div class="flex space-x-4">
      <span v-if="acc.gh" class="p-1">
        <ExternalLink
          label="GitHub"
          icon="ph:github-logo-duotone"
          :url="acc.gh"
        />
      </span>
      <span v-if="acc.l" class="p-1">
        <ExternalLink
          label="LinkedIn"
          icon="ph:linkedin-logo-duotone"
          :url="acc.l"
        />
      </span>
      <span v-if="acc.ig" class="p-1">
        <ExternalLink
          label="Instagram"
          icon="ph:instagram-logo-duotone"
          :url="acc.ig"
        />
      </span>
      <span v-if="acc.t" class="p-1">
        <ExternalLink
          label="Twitter"
          icon="ph:twitter-logo-duotone"
          :url="acc.t"
        />
      </span>
      <span v-if="acc.f" class="p-1">
        <ExternalLink
          label="Facebook"
          icon="ph:facebook-logo-duotone"
          :url="acc.f"
        />
      </span>
    </div>
    <ul class="space-y-2">
      <ExternalLink
        v-for="(link, id) in acc.ls"
        :label="link.l"
        :icon="link.i"
        :url="link.u"
        :key="id"
      />
    </ul>
  </main>
</template>

<script setup>
const props = defineProps({
  acc: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>