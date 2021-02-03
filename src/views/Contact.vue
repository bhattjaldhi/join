<template>
  <div class="contact">
    <v-container>
      <Header />
      <v-card flat outlined class="mt-3">
        <v-container>
          <v-row>
            <v-col md="3">
              <v-avatar size="100%">
                <v-img src="@/assets/images/profile.jpg"></v-img>
              </v-avatar>
            </v-col>
            <v-col md="9">
              <v-card-text class="text-detail">
                <div class="font-weight-bold">Jaldhi Bhatt</div>
                <div>Software Developer</div>
                <div>Contact: +919409079856</div>
                <div>Email: bhattjaldhi27@gmail.com</div>
                <div>LinkedIn: <a href="https://www.linkedin.com/in/jaldhi-bhatt/" target="_blank">https://www.linkedin.com/in/jaldhi-bhatt/</a></div>
              </v-card-text>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "Contact",
  components: {
    Header,
  },
  mounted() {},
};
</script>
