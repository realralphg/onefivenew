<template>
  <div class="wrapper">
    <div class="hold">
      <div class="containerr">
        <div class="">
          <div class="grid_left">
            <div class="grid_items">
              <div class="grid_item">
                <div class="row justify-between">
                  <div class="grid_item_top">
                    <q-avatar size="40px">
                      <img src="/images/ava.png" alt="" />
                    </q-avatar>
                    <div class="hold_det">
                      <p class="text-weight-medium">Amhed Sanusi</p>
                      <span class="text-info">Barnawa </span>
                    </div>
                  </div>

                  <div class="rig text-positive">
                    <span>2hr</span>
                    <q-btn style="height: 20px" class="dots"> ... </q-btn>
                  </div>
                </div>

                <p class="text-weight-bold text_head">
                  I Need a Photographer for my birthday party
                </p>

                <p class="text_head text-weight-light q-my-xl">
                  I need a photographer for my birthday party, At barnawa
                  estate. <br />
                  If you’re available please let me know. I will chat you up.
                </p>

                <form action="" class="form">
                  <div class="form_wrap">
                    <div class="input_wrap">
                      <label for="" class="text-primary text-weight-bold"
                        >Price</label
                      >
                      <input placeholder="N30000" type="text" />
                    </div>
                    <div class="input_wrap">
                      <textarea
                        placeholder="Description"
                        name=""
                        id=""
                      ></textarea>
                    </div>
                  </div>
                  <div class="text-center">
                    <q-btn class="create">Create Gig</q-btn>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      value: 81,
    };
  },
};
</script>

<style scoped>
p {
  margin-bottom: 0;
}
.wrapper {
  background: #e5e5e5;
  padding: 2rem 0;
}

.grid_left {
  background: #ffffff;
  border-radius: 20px;
  padding: 1rem;
}

.grid_item {
  background: #ffffff;
  padding: 1rem 0;
  /* border-top: 1px solid #dadada;s */
  margin: 2rem 0 0;
  width: 60%;
  margin: 0 auto;
  height: 80vh;
}
.grid_item_top {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}
.grid_item_top i {
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 8px;
}

.input_wrap {
  margin: 3rem 0;
}

.input_wrap input {
  background: #f7f1f1;
  border: 1px solid #9a9a9a;
  padding: 0.65rem;
  width: 100%;
}
.input_wrap textarea {
  background: #f7f1f1;
  border: 1px solid #9a9a9a;
  padding: 0.45rem;
  width: 100%;
}

.create {
  background: #1abc9c;
  border-radius: 100px;
  padding: 0.65rem;
  width: 200px;
  color: #ffffff;
}

.rig {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}
.dots {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
