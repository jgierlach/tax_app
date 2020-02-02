<template>
  <button
    :disabled="disabled"
    @click="$emit('click')"
    class
    :class="{ 'bg-emerald': !loading, 'bg-emerald-light cursor-not-allowed': loading }"
  >
    <loader v-if="loading" />
    <span v-else>{{ label }}</span>
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style scoped>
.loader {
  animation-name: spin;
  animation-duration: 2000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
