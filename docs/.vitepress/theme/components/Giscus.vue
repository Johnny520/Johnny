<script setup lang="ts">
import GiscusComment from '@giscus/vue'
</script>

<template>
  <ClientOnly>
    <div class="giscus-wrapper">
      <GiscusComment
        repo="Johnny520/Johnny"
        repo-id="R_kgDOH727Ug"
        category="Announcements"
        category-id="DIC_kwDOH727Us4CROOA"
        mapping="pathname"
        term="欢迎来到讨论区"
        strict="0"
        reactions-enabled="1"
        emit-metadata="0"
        input-position="top"
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  </ClientOnly>
</template>

<style scoped>
.giscus-wrapper {
  margin-top: 24px;
}
</style>
