<template>
  <section class="section-one q-py-xl">
    <h6 class="text-center q-py-lg q-px-lg">
      Trusted By 5000+ Companies worldwide
    </h6>
    <div class="com container">
      <div class="sponsor__content">
        <img src="/images/msme.png" alt="" class="sponsor__img" />
      </div>
      <div class="sponsor__content">
        <img src="/images/greyhobb.png" alt="" class="sponsor__img" />
      </div>
      <div class="sponsor__content">
        <img src="/images/mc.png" alt="" class="sponsor__img" />
      </div>

      <div class="sponsor__content">
        <img src="/images/gt.png" alt="" class="sponsor__img" />
      </div>
      <div class="sponsor__content">
        <img src="/images/nin.png" alt="" class="sponsor__img" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.section-one {
  margin-top: 4rem;
  /* background-color: #e5e5e5; */
}

.sponsor__img {
  opacity: 0.4;
  width: 90px;
  /* filter: invert(0.7); */
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}

.sponsor__img:hover {
  opacity: 1;
  width: 90px;
  /* filter: invert(0.7); */
  transition: all 0.5s ease-in-out;
}

.com {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  justify-items: center;
  align-items: center;
  row-gap: 3.5rem;
}
</style>
