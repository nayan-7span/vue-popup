<template>
  <div v-click-outside="hideDropdown" class="relative group">
    <button @click="handlePopup()">
      <slot name="target">
        <div class="bg-blue-500 text-white px-6 rounded py-2">
          {{ label }}
        </div>
      </slot>
    </button>
    <div
      v-if="isPopupOpen"
      class="absolute z-40 bg-white top-10 rounded left-10"
      :class="_popup_class"
    >
      <slot name="content">
        <div class="p-2 shadow-md rounded w-52">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          doloremque optio quisquam odio soluta voluptate natus? Perferendis
          nemo corrupti odio quam, quia eum. Beatae provident velit tempore
          fuga? Adipisci, consequatur.
        </div>
      </slot>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps({
  label: {
    type: String,
    default: "Click",
  },
  _popup_class: {
    type: String,
    default: "top-0 left-4 w-fit h-fit",
  },
});

const isPopupOpen = ref(false);

function handlePopup() {
  isPopupOpen.value = !isPopupOpen.value;
}

function hideDropdown() {
  isPopupOpen.value = false;
}
</script>
