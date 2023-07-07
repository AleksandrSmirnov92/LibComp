<template>
  <div
    class="form-control"
    :style="labelColor ? `color:${labelColor}` : 'color:black'"
  >
    <label for="input" v-if="label">{{ label }}</label>
    <input
      :type="typeInput"
      id="input"
      v-model="inputComputed"
      :placeholder="placeholder"
    />
    <div class="form-control__error" v-if="error">
      <span>{{ error }}</span>
    </div>
  </div>
</template>
<script setup>
import { computed, toRefs } from "vue";
const props = defineProps({
  label: String,
  labelColor: String,
  modelValue: String,
  placeholder: { type: String, default: "" },
  typeInput: { type: String, default: "text" },
  error: String,
});
const { label, labelColor, modelValue, placeholder, typeInput, error } =
  toRefs(props);
const emit = defineEmits("update:modelValue");
const inputComputed = computed({
  get() {
    return modelValue.value;
  },
  set(newVal) {
    emit("update:modelValue", newVal);
  },
});
</script>
<style scoped>
.form-control {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: black;
}
.form-control > label {
  font-size: 1.5em;
  margin-bottom: 0.5rem;
}
.form-control > input {
  display: block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  padding: 0.375rem;
  outline: none;
  height: 2rem;
  border: 2px solid #009ee3;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
}
.form-control > input:hover {
  border-color: #0070d2;
}
.form-control__error {
  margin-bottom: 0.5rem;
}
.form-control__error > span {
  font-weight: 400;
  font-size: 1rem;
  color: red;
  overflow-wrap: break-word;
}
</style>
