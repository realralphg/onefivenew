<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header
      style="width: 100%"
      elevated
      class="bg-white row justify-between items-center"
    >
      <div style="width: 300px" class="bg-primary q-pa-lg">
        <!-- <q-btn flat round dense icon="menu" @click="toggleLeftDrawer" /> -->

        <q-toolbar-title class="logo">
          <span class="text-weight-bold">ONE</span>FIVE
        </q-toolbar-title>
      </div>

      <div class="search">
        <div class="search_hold">
          <i class="ri-search-line text-primary"></i>
          <input type="text" placeholder="Search for Job" />
        </div>
      </div>

      <div class="profile">
        <div class="notif_icon">
          <i class="ri-notification-fill"></i>
        </div>

        <div class="prof_row">
          <q-avatar size="30px">
            <img src="/images/ava.png" alt="" />
          </q-avatar>

          <span>Job Seeker </span>
        </div>

        <q-btn-dropdown
          class="profile_dropdown text-primary"
          content-class="profile_dropdown"
          no-caps
          size="30px"
          icon=""
        >
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section avatar>
                <img src="/images/nor.jpg" alt="" />
              </q-item-section>
              <q-item-section>
                <q-item-label>New title</q-item-label>
                <q-item-label caption class="text-white"
                  >Here goes the manga one sentences synopsis to entice the user
                  to check it out.</q-item-label
                >
              </q-item-section>
            </q-item>
            <q-separator class="bg-white" />

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section avatar>
                <img src="/images/nor.jpg" alt="" />
              </q-item-section>
              <q-item-section>
                <q-item-label>New chapter</q-item-label>
                <q-item-label caption class="text-white"
                  >Manga Title has a new chapter. Short synopsis about the
                  chapter to entice the reader to check it out.</q-item-label
                >
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>

      <!-- <q-tabs>
        <q-route-tab icon="map" to="/your/route" replace label="One Tab" />
        <q-route-tab
          icon="assignment"
          to="/some/other/route"
          replace
          label="Other Tab"
        />
      </q-tabs> -->
    </q-header>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer
      :width="300"
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="bg-grey-2"
    >
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit">
        <q-list class="drawer q-mt-xl" active-color="accent">
          <div class="first">
            <div class="top">
              <q-item
                active-class="bg-accent text-primary"
                exact
                clickable
                v-ripple
                :to="{ name: 'seekerDashboard' }"
              >
                <div class="wrapp">
                  <i class="ri-dashboard-fill text-positive"></i>
                  <p class="q-ml-md text-positive">Dashboard</p>
                </div>
              </q-item>

              <q-item
                active-class="bg-accent"
                exact
                clickable
                v-ripple
                :to="{ name: 'account' }"
              >
                <div class="wrapp">
                  <i class="ri-star-fill text-positive"></i>
                  <p class="q-ml-md text-positive">Account</p>
                </div>
              </q-item>
              <q-item
                active-class="bg-accent"
                exact
                clickable
                v-ripple
                :to="{ name: 'jobs' }"
              >
                <div class="wrapp">
                  <i class="ri-exchange-funds-line text-positive"></i>
                  <!-- <i class="ri-building-fill text-white"></i> -->
                  <p class="q-ml-md text-positive">Jobs</p>
                </div>
              </q-item>

              <q-item
                active-class="bg-accent"
                exact
                clickable
                v-ripple
                :to="{ name: 'reviews' }"
              >
                <div class="wrapp">
                  <i class="ri-shopping-basket-2-fill text-positive"></i>

                  <p class="q-ml-md text-positive">Reviews</p>
                </div>
              </q-item>

              <q-item
                active-class="bg-accent"
                exact
                clickable
                v-ripple
                :to="{ name: 'payment' }"
              >
                <div class="wrapp">
                  <i class="ri-bank-card-fill text-positive"></i>
                  <p class="q-ml-md text-positive">Payment Methods</p>
                </div>
              </q-item>
              <q-item
                active-class="bg-accent"
                exact
                clickable
                v-ripple
                :to="{ name: 'chat' }"
              >
                <div class="wrapp">
                  <i class="ri-funds-box-fill text-positive"></i>
                  <p class="q-ml-md text-positive">Chat</p>
                </div>
              </q-item>
              <!-- <q-seperator /> -->
              <q-item
                active-class="bg-accent"
                exact
                clickable
                style="border-top: 1px solid #e3e3e3"
                v-ripple
                :to="{
                  name: 'help',
                }"
              >
                <div class="wrapp">
                  <i class="fas fa-box text-positive"></i>
                  <p class="q-ml-md text-positive">Help</p>
                </div>
              </q-item>
            </div>

            <div class="bott">
              <q-item
                active-class="bg-accent"
                exact
                clickable
                v-ripple
                :to="{ name: 'settings' }"
              >
                <div class="wrapp">
                  <i class="ri-dashboard-line text-positive"></i>
                  <p class="q-ml-md text-positive">Settings</p>
                </div>
              </q-item>
              <q-item
                active-class="bg-accent"
                exact
                clickable
                v-ripple
                :to="{ name: 'logout' }"
              >
                <div class="wrapp">
                  <i class="ri-dashboard-line text-positive"></i>
                  <p class="q-ml-md text-positive">Logout</p>
                </div>
              </q-item>
            </div>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  name: "LayoutName",

  setup() {
    const leftDrawerOpen = ref(true);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
<style scoped>
p {
  margin-bottom: 0;
}
.logo {
  font-size: 1.5rem;
}

.search_hold {
  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 100px;
  padding: 0.35rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  /* width: 800px; */
}

.search_hold input {
  border: none;
  width: 100%;
}

.search_hold i {
  font-size: 1.3rem;
}
.search_hold input:focus {
  outline: none;
}

.notif_icon i {
  background: rgba(47, 72, 88, 0.3);
  border: 1.36px solid #2f4858;
  border-radius: 68px;
  padding: 0.75rem;
  color: #2f4858;
}

.profile {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: 1rem;
}

.prof_row {
  display: flex;
  align-items: center;
  background: #2f4858;
  border-radius: 80px;
  padding: 0.35rem;
  gap: 0.75rem;
}

.wrapp {
  display: flex;
  align-items: center;
  color: #000;
  margin: 1.2rem 0;
  padding: 0 1.5rem;
}

.first {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  height: 100%;
}
</style>
