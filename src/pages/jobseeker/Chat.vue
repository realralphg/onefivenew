<template>
  <div class="wrapper">
    <div class="hold">
      <div class="containerr">
        <div class="gridd">
          <div class="grid_left">
            <div class="row items-center justify-between">
              <div class="logo text-primary text-weight-bold">Chat</div>

              <q-btn class="dots"> ... </q-btn>
            </div>

            <div class="search_wrap">
              <div class="search_hold">
                <i class="ri-search-line text-primary"></i>
                <input type="text" placeholder="Search" />
              </div>
            </div>

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
                  </div>
                </div>

                <q-item clickable v-ripple class="">
                  I need a photographer for...
                  <q-badge
                    transparent
                    floating
                    align="top"
                    class="q-pa-sm"
                    color="primary"
                  >
                    4
                  </q-badge>
                </q-item>
              </div>
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
                  </div>
                </div>

                <q-item clickable v-ripple class="">
                  I need a photographer for...
                  <q-badge
                    transparent
                    floating
                    align="top"
                    class="q-pa-sm"
                    color="primary"
                  >
                    4
                  </q-badge>
                </q-item>
              </div>
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
                  </div>
                </div>

                <q-item clickable v-ripple class="">
                  I need a photographer for...
                  <q-badge
                    transparent
                    floating
                    align="top"
                    class="q-pa-sm"
                    color="primary"
                  >
                    4
                  </q-badge>
                </q-item>
              </div>
            </div>
          </div>

          <div class="grid_right">
            <div
              class="right_hold bg-primary q-pa-sm row items-center justify-between"
            >
              <div class="row items-center">
                <q-avatar size="40px">
                  <img src="/images/ava.png" alt="" />
                </q-avatar>
                <span class="text-white q-ml-sm">Rufus Giwa</span>
              </div>
              <div class="icon_wrap">
                <i class="ri-menu-add-fill"></i>
              </div>
            </div>

            <div class="q-pa-lg row justify-center">
              <div style="width: 100%">
                <q-chat-message
                  :text="['Have you seen Quasar?']"
                  sent
                  text-color="black"
                  bg-color="white"
                >
                  <template v-slot:name>me</template>
                  <template v-slot:stamp>7 minutes ago</template>
                  <template v-slot:avatar>
                    <img
                      class="q-message-avatar q-message-avatar--sent"
                      src="/images/ava.png"
                    />
                  </template>
                </q-chat-message>

                <q-chat-message bg-color="dark" text-color="white">
                  <template v-slot:name>Mary</template>
                  <template v-slot:avatar>
                    <img
                      class="q-message-avatar q-message-avatar--received"
                      src="/images/ava.png"
                    />
                  </template>

                  <div>
                    Already building an app with it...
                    <img
                      src="https://cdn.quasar.dev/img/discord-qeart.png"
                      class="my-emoji"
                    />
                  </div>
                  <div>
                    Already building an app with it...
                    <img
                      src="https://cdn.quasar.dev/img/discord-qeart.png"
                      class="my-emoji"
                    />
                  </div>
                  <div>
                    Already building an app with it...
                    <img
                      src="https://cdn.quasar.dev/img/discord-qeart.png"
                      class="my-emoji"
                    />
                  </div>
                  <div>
                    Already building an app with it... Lorem .
                    <img
                      src="https://cdn.quasar.dev/img/discord-qeart.png"
                      class="my-emoji"
                    />
                  </div>

                  <q-spinner-dots size="2rem" />
                </q-chat-message>

                <q-chat-message
                  :text="['Have you seen Quasar?']"
                  sent
                  text-color="black"
                  bg-color="white"
                >
                  <template v-slot:name>me</template>
                  <template v-slot:stamp>7 minutes ago</template>
                  <template v-slot:avatar>
                    <img
                      class="q-message-avatar q-message-avatar--sent"
                      src="/images/ava.png"
                    />
                  </template>
                </q-chat-message>
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

.gridd {
  display: grid;
  grid-template-columns: 2fr 4fr;
  gap: 1rem;
  align-items: center;
}

.grid_left {
  background: #ffffff;
  border-radius: 20px;
  padding: 1rem;
}

.search_hold {
  background: rgba(1, 221, 178, 0.06);
  border: 1px solid #1abc9c;
  border-radius: 82.5328px;
  padding: 0.35rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;
}

.search_hold input {
  border: none;
  background: transparent;
}

.grid_item {
  background: #ffffff;
  padding: 1rem 0;
  width: 100%;
  border-top: 1px solid #dadada;
  margin: 2rem 0 0;
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

.wel {
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 145%;
  color: #000000;
}

.sub_wel {
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 170%;
  color: #626262;
}

.header {
  color: #fff;
  margin: 2rem 0 0;
}
.icon_wrap i {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 100px;
  padding: 0.75rem;
  color: #fff;
}
.grid_right {
  background: #f2f2f2;
  border-radius: 20px;
  height: 100%;
}
.right_hold {
  border-radius: 20px 20px 0 0;
}
</style>
