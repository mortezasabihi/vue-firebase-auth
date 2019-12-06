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
import firebase from "firebase";
import Navigation from "@/components/layout/Navigation";

export default {
  components: {
    Navigation
  },
  created() {
    firebase
      .auth()
      .onAuthStateChanged(user =>
        this.$store.commit("setLoginStatus", user !== null)
      );
  }
};
</script>
