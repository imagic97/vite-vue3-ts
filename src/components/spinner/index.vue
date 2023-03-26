<template>
  <div class="mg-spinner" :class="{ 'is-spinning': spinning }">
    <slot />
  </div>
</template>

<script setup lang="ts">
const name = 'MgSpinner'
const props = withDefaults(defineProps<{ spinning: boolean }>(), { spinning: false })
</script>

<style lang="less">
.mg-spinner {
  &.is-spinning {
    position: relative;

    &::before {
      content: '';
      display: block;
      background-color: rgba(255, 255, 255, 0.5);

      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: var(--zIndex-spinner);
    }

    &::after {
      content: '';
      display: block;
      width: 48px;
      height: 48px;
      background-image: url('@/assets/images/spinner.svg');
      background-size: 100% 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: var(--zIndex-spinner);

      transform: translate(-50%, -50%);
    }
  }
}</style>
