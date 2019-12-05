<template>
  <div>
    <navigation />

    <b-container>
      <b-row class="justify-content-center">
        <router-view />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navigation from "@/components/layout/Navigation";

export default {
  components: {
    Navigation
  }
};
</script>
