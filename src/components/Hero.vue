<template>
  <div class="wrapper">
    <div class="hero container">
      <q-btn class="hero_btn"
        ><span>New</span> Over 10K + Assistian
        <i
          style="font-size: 1.2rem"
          class="ri-arrow-right-line text-primary text-weight-bold q-mx-sm"
        ></i
      ></q-btn>

      <div class="hero_title">
        <span class="text-weight-bold">ONE</span>FIVE
      </div>

      <div class="hero_desc">
        Get professional artisans to your <br />
        doorstep at your
        <span class="text-primary">finger tips</span>
      </div>

      <div class="hero_sub">
        Get your sevices for nothing less than
        <span class="text-primary">N1500</span> .
      </div>

      <div class="btns flex items-center">
        <q-btn class="get_started"> Get Started </q-btn>
        <q-btn class="find"> Find Jobs </q-btn>
      </div>
    </div>

    <div class="img container q-pt-lg">
      <img src="/images/hero-onefive.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  display: grid;
  place-items: center;
  padding: 3rem 0;
}
.hero_btn {
  padding: 9px 20px 9px 15px;
  /* width: 216px; */

  background: rgba(1, 221, 178, 0.13);
  border-radius: 20px;
}

.hero_btn span {
  background: #1abc9c;
  border-radius: 20px;
  padding: 0.65rem 1rem;
  margin-right: 0.75rem;
  color: #ffffff;
  font-size: 12px;
}

.hero_title {
  font-style: normal;
  font-size: 74.8475px;
  line-height: 91px;

  color: #1abc9c;
  margin: 1rem;
}
.hero_desc {
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 116.64%;
  /* or 75px */

  text-align: center;

  color: #000000;
  margin-top: 0.75rem;
  margin-bottom: 2rem;
}

.btns {
  margin-top: 1.5rem;
  gap: 1rem;
}

.get_started {
  box-shadow: rgba(26, 188, 156, 0.96) 0px 25px 20px -20px;
  border-radius: 8px;
  width: 140px;
  background: #1abc9c;
  color: #ffffff;
  padding: 0.75rem;
}

.find {
  background: #ffffff;
  border: 1px solid #2f4858;
  border-radius: 8px;
  width: 140px;
  color: #2f4858;
  padding: 0.75rem;
}

.img {
  position: relative;
  z-index: 2;
}
</style>
