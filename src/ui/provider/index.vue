<script setup lang="ts">
import useSettingsStore from '@/store/modules/settings'
import { Locale, StyleProvider, Themes } from '@varlet/ui'

const settingsStore = useSettingsStore()

watch(() => settingsStore.currentColorScheme, (val) => {
  if (val === 'light') {
    StyleProvider(null)
  }
  else {
    StyleProvider(Themes.dark)
  }
})
</script>

<template>
  <VarLocaleProvider locale="zh-CN" :messages="Locale.zhCN" class="min-h-vh supports-[(min-height:100dvh)]:min-h-dvh">
    <slot />
  </VarLocaleProvider>
</template>
