<template>
  <b-col lg="6">
    <b-card title="login" class="mt-5">
      <b-form @submit.prevent="login">
        <b-form-group
          id="email-input-group"
          label="Email address:"
          label-for="email-input"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="email-input"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>

          <validation :error="this.getErrors" error-key="email" />
        </b-form-group>

        <b-form-group
          id="password-input-group"
          label="Password:"
          label-for="password-input"
        >
          <b-form-input
            id="password-input"
            v-model="form.password"
            type="password"
            required
            placeholder="Enter password"
          ></b-form-input>

          <validation :error="this.getErrors" error-key="password" />
        </b-form-group>

        <loading-button
          variant="primary"
          :loading="this.getLoading"
          text="Login"
        />
      </b-form>
    </b-card>
  </b-col>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "login",
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapGetters(["getLoading", "getErrors"])
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.form);
    }
  }
};
</script>
