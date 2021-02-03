<template>
  <div class="about">
    <v-container>
      <Header />
      <v-row class="ma-5">
        <v-card flat>
          <v-card-title>
            <v-row>
              <v-col cols="1">
                <v-icon color="red">stars</v-icon>
              </v-col>
              <v-col cols="11">
                <div class="feature-title">Connect with your community</div>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>Using this website you can reach out to your community and join with them. You will also be able to interact with theme using instant messaging. Learn new things from the people of your community and you can share your ideas as well.</v-card-text>
        </v-card>
      </v-row>
      <v-row class="ma-5">
        <v-card flat>
          <v-card-title>
            <v-row>
              <v-col cols="1">
                <v-icon color="red">stars</v-icon>
              </v-col>
              <v-col cols="11">
                <div class="feature-title">Post amazing content in amazing way !</div>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>Awesome ! you will have different types of widgets to share your content. You will be able to create polls to get the opinions as well as you can create a debat over a topic to that other people of your community can interact with you as well as with other members of the community.</v-card-text>
        </v-card>
      </v-row>
      <v-row class="ma-5">
        <v-card flat>
          <v-card-title>
            <v-row>
              <v-col cols="1">
                <v-icon color="red">stars</v-icon>
              </v-col>
              <v-col cols="11">
                <div class="feature-title">Create your own page</div>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>You can create your own pages and share blogs, too. Have interaction with like minded people over your page. You can add more creator for your manage who also can post content to your page. Now doing the promotion will be most easier way to do in this website. Create your art/music gallery and share with the community.</v-card-text>
        </v-card>
      </v-row>
      <v-row class="ma-5">
        <v-card flat>
          <v-card-title>
            <v-row>
              <v-col cols="1">
                <v-icon color="red">stars</v-icon>
              </v-col>
              <v-col cols="11">
                <div class="feature-title">Grow your business</div>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>Small businesses will have lot more chance to grow their business using promotions. You also can hire people by posting job offers using this website and we will take care of your business content and community content saperate. Sounds intersting?</v-card-text>
        </v-card>
      </v-row>
      <v-row class="ma-5">
        <v-card flat>
          <v-card-title>
            <v-row>
              <v-col cols="1">
                <v-icon color="red">stars</v-icon>
              </v-col>
              <v-col cols="11">
                <div class="feature-title">Get Hired :)</div>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>This website provide platform for youngsters to get job/work in any field and apply for job offers for quickly growing businesses. Publish your work on your page if you are a freelancer and get feedback by creating custom widgets/forms. What else we need !</v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "About",
  components: {
    Header
  },
  mounted() {}
};
</script>
