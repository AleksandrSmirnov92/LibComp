<template>
  <button class="btn btn__text btn__outline" @click="$emit('submit', true)">
    {{ btnText }}
  </button>
</template>
<script setup>
const props = defineProps({
  btnText: { type: String, default: "button" },
});
</script>
<style lang="css" scoped>
.btn {
  padding: 0.375rem;
  margin: 0.25rem;
  background-color: #009ee3;
  cursor: pointer;
}
.btn__text {
  font-weight: 400;
  font-size: 1rem;
  color: white;
}
.btn__outline {
  border: none;
  border-radius: 0.25rem;
}
.btn:hover {
  background-color: #0070d2;
}
</style>
