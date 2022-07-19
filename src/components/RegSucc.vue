<template>
  <div class="wrapper bg-white">
    <div class="hold">
      <i class="ri-check-double-fill"></i>
      <p class="text-weight-bold">Registration successful</p>
      <small class="q-mb-lg">Signing you in</small>
      <q-linear-progress style="width: 20%" size="10px" :value="progress" />
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      progress: 0.4,
    };
  },
};
</script>

<style scoped>
.wrapper {
  height: 100vh;
}
.hold {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

i {
  background: #16c79a;
  color: white;
  padding: 1rem;
  border-radius: 50%;
  width: 50px;
  font-size: 2rem;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

p {
  font-size: 1.3rem;
}
</style>
