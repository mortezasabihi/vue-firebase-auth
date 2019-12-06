<template>
  <b-col lg="6">
    <b-card title="Sign Up" class="mt-5">
      <b-form @submit.prevent="register">
        <b-form-group
          id="email-input-group"
          label="Email address:"
          label-for="email-input"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="email-input"
            v-model="form.email"
            type="text"
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
            placeholder="Enter password"
          ></b-form-input>

          <validation :error="this.getErrors" error-key="password" />
        </b-form-group>

        <loading-button
          variant="success"
          :loading="this.getLoading"
          text="Sign Up"
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
    ...mapGetters(["getErrors", "getLoading"])
  },
  methods: {
    register() {
      this.$store.dispatch("register", this.form);
    }
  }
};
</script>
