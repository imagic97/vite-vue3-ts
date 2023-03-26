<template>
  <div @click="onValueChange">{{ val }}</div>

  <p>{{ arr[0] }}</p>
  <button type="submit" @click="onArrayChange">reactive add</button>

  <p>{{ shallow }}</p>
  <button type="submit" @click="onShallowChange">reactive add</button>

  <p>store: {{ user.getStateValue }}</p>
  <button type="submit" @click="user.valAdd()">store add</button>


  <p>getShallowVal: {{ getShallowVal }}</p>
  <button type="submit" @click="onShallowRefChange">onShallowRefChange add</button>

  <MgSpinner :spinning="true"></MgSpinner>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted, reactive, ref, shallowReactive, shallowRef, triggerRef } from 'vue';
import { userStore } from '@/store/user-store'
import { onBeforeRouteLeave } from "vue-router";



const user = userStore();

// ref 基础数据类型的响应式，获取值需加上 .value
let val = ref<number>(0)
// reactive 引用数据类型的响应式，本质上是个proxy代理对象，解决vue2在对象或者数组上的双重绑定问题
let arr = reactive([0])
// shallowReactive 是reactive的浅层响应，只对当前对象第一层属性进行响应式代理，深层属性变更可使用 triggerRef
let shallow = shallowReactive({ val: { a: 2 } })

let shallowRefVal = shallowRef(0)

let getShallowVal = computed(() => {
  return shallowRefVal.value
})

function onValueChange() {
  val.value++
  console.log(val.value)
}

function onShallowChange() {
  shallow.val.a++
  console.log(shallow)
}

function onShallowRefChange() {
  shallowRefVal.value++
  console.log(shallow)
  triggerRef(shallowRefVal)
}

function onArrayChange() {
  arr[0]++
  console.log(arr[0])
}

onMounted(() => {
  console.log('onMounted')
})

onUnmounted(() => {
  console.log('onUnmounted')
})

onBeforeRouteLeave((to, from) => {
  console.log("to", to)
  console.log("from", from)
})
</script>
