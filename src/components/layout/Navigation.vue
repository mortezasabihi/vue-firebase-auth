<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav v-if="this.getLoginStatus">
          <b-nav-item disabled>{{ getUser.email }}</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right v-if="!this.getLoginStatus">
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item :to="{ name: 'login' }">Login</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'register' }"
              >Sign up</b-dropdown-item
            >
          </b-nav-item-dropdown>

          <b-navbar-nav v-else>
            <b-nav-item @click="logout">Logout</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navigation",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  },
  computed: {
    ...mapGetters(["getUser", "getLoginStatus"])
  }
};
</script>
