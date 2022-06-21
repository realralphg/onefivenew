<template>
  <div class="q-mt-xl wrapper bg-positive">
    <div class="join">
      <div class="text-center join_head">
        <span class="text-weight-bold">Join our community of ONE</span>FIVE
      </div>

      <img src="/images/join.png" alt="" />

      <p class="text-center">
        Make connections, take action and move forward with <br />
        a community of Artisans
      </p>

      <q-btn class="bg-primary text-white q-py-md q-px-xl"> Join us now </q-btn>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.join img {
  width: 30%;
  margin: 3rem 0;
}
.join {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
}

.join_head {
  font-style: normal;
  /* font-weight: 700; */
  font-size: 48px;
  line-height: 111%;
  /* or 53px */

  color: #2f4858;
}

@media (max-width: 768px) {
  .join {
    padding: 2rem 1rem;
    margin: 2rem 0;
  }
}
</style>
