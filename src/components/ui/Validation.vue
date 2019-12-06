<template>
  <b-form-invalid-feedback
    force-show
    :id="`${errorKey}-input-feedback`"
    v-if="error && error.code.includes(errorKey)"
  >
    {{ error.message }}
  </b-form-invalid-feedback>
</template>

<script>
export default {
  name: "Validation",
  props: {
    error: {
      default: {},
      required: true
    },
    errorKey: {
      type: String,
      required: true
    }
  }
};
</script>
