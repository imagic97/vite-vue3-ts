<template>
  <template v-if="state === 'error' || state === null">
    <PtAlert type="error" show-icon>
      <template #title>
        <strong>错误</strong>
      </template>

      <pre style="white-space: initial;">{{ message }}</pre>

      <div style="margin-top: 1rem;">
        <PtBtn @click="load">点此重试</PtBtn>
      </div>
    </PtAlert>
  </template>

  <template v-else>
    <PtSpinner class="PtLoader" :spinning="state === 'loading' || loading" :style="inline ? '' : 'min-height: 168px;'">
      <slot />
    </PtSpinner>
  </template>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

type PromiseCallFn = () => Promise<any>;

const props = withDefaults(defineProps<{
  loader: PromiseCallFn | null,
  inline: boolean,
  loading: boolean
}>(), { inline: false, loading: false, loader: null })

const UNKNOWN_ERROR = 'unknown error'

let state = ref('unstable')
let message = ref(UNKNOWN_ERROR)

function load() {
  if (props.loader == null) return Promise.resolve()
  state.value = 'loading'
  props.loader().then(() => {
    state.value = 'complete'
  }).catch((error: any) => {
    state.value = 'error'
    message.value = error.message || UNKNOWN_ERROR
  })
}

onMounted(() => {
  load()
})
</script>
