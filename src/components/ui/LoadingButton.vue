<template>
  <b-button type="submit" :variant="variant" :disabled="loading">
    <template v-if="loading">
      <b-spinner small type="grow"></b-spinner>
      Loading...
    </template>
    <template v-else>{{ text }}</template>
  </b-button>
</template>

<script>
export default {
  name: "LoadingButton",
  props: {
    variant: {
      type: String,
      default: "primary"
    },
    loading: {
      type: Boolean,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>
