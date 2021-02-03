<template>
  <div class="home">
    <v-container>
      <Header />
      <v-row class="ma-5">
        <v-col xs="12">
          <h3>Coming Soon</h3>
          <div class="content">
            <span class="red--text">Alert !</span> Soon there will be a new super awesome website available live for you to Join the community likely to you. Get the early access to receive the updates of launch. We will notify you soon !
          </div>
          <v-form
            @submit.prevent="saveEmail"
            ref="form"
            lazy-validation
            v-model="isValid"
            v-if="!hasEmail"
          >
            <v-card width="600px" class="form" flat color="white">
              <v-card-title>Get Early access</v-card-title>
              <v-card-text>
                <v-text-field
                  persistent-hint
                  hint="Send us your email to get early access"
                  solo
                  outlined
                  shaped
                  clearable
                  :rules="emailRules"
                  required
                  v-model="email"
                  type="email"
                  label="Email"
                ></v-text-field>
              </v-card-text>
              <v-card-actions class="d-flex justify-end">
                <v-btn type="submit" color="primary">Join</v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
          <h4
            class="mt-5"
            v-else
          >Thank you for registering for early aceess. We will get back to you soon.</h4>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Header from "@/components/Header";
import { contactsCollection } from "@/firebaseConfig.js";

let emailRegEx = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export default {
  name: "Home",
  components: {
    Header,
  },
  data() {
    return {
      isValid: false,
      email: null,
      hasEmail: false,
      emailRules: [
        (v) => !!v || "Please enter email",
        (v) => emailRegEx.test(v) || "Please enter valid email",
      ],
    };
  },
  mounted() {
    let email = localStorage.getItem("email");
    if (email) {
      this.hasEmail = true;
    }
  },
  methods: {
    saveEmail() {
      if (this.$refs.form.validate()) {
        contactsCollection.doc().set({ email: this.email });
        localStorage.setItem("email", this.email);
        this.hasEmail = true;
      }
    },
  },
};
</script>
