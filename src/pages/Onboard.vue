<template>
  <q-page class="bg-white">
    <div class="wrapper">
      <div class="hold container">
        <div class="title">
          Join as a
          <span class="text-weight-bold">Job Provider or Job Seeker</span>
        </div>

        <div style="gap: 2rem" class="row no-wrap justify-center items-center">
          <div class="left">
            <i class="ri-contacts-book-2-fill"></i>
            <p>
              Become a <br />
              <span class="text-weight-bold"> Job Provider</span>
            </p>
          </div>
          <div class="right">
            <i class="ri-archive-fill"></i>
            <p>
              Become a <br />
              <span class="text-weight-bold"> Job Seeker</span>
            </p>
          </div>
        </div>

        <div class="response row items-center">
          <i class="ri-information-fill"></i>
          <p class="q-pl-lg">
            You can always choose to become a Job provider and hire for your
            jobs
          </p>
        </div>

        <div class="row justify-between">
          <q-btn> Back </q-btn>
          <q-btn class="continue"> Continue as a job seeker </q-btn>
        </div>
      </div>
    </div>
    <Footer />
  </q-page>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  components: {
    Footer,
  },
};
</script>

<style scoped>
p {
  margin-bottom: 0;
}

.wrapper {
  background: #fff;
  height: 100%;
  padding: 5rem 0;
}
.hold {
  border: 1px solid #c4c4c4;
  border-radius: 20px;
  padding: 4rem 2rem;
  /* margin: 3rem auto; */
}

.left,
.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid #2f4858;
  border-radius: 9.74194px;
  min-height: 300px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.left i,
.right i {
  font-size: 3rem;
  color: #2f4858;
}

.left p,
.right p {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 34px;
  text-align: center;
  color: #2f4858;
}

.left span,
.right span {
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 34px;
  text-align: center;
  color: #2f4858;
}
.title {
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 34px;
  text-align: center;
  color: #2f4858;
  margin: 3rem 0;
}

.response {
  background: rgba(26, 188, 156, 0.09);
  border: 1px solid #1abc9c;
  border-radius: 10px;
  margin-bottom: 5rem;
}

.response i {
  background: #1abc9c;
  color: white;
  padding: 0.65rem;
  font-size: 1.3rem;
}

.continue {
  background: #2f4858;
  border-radius: 100px;
  padding: 0.75rem;
  color: #fff;
}
</style>
