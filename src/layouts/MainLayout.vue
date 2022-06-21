<template>
  <q-layout class="hue" view="lHh Lpr lFf">
    <div class="nav container">
      <div class="logo"><span class="text-weight-bold">ONE</span>FIVE</div>

      <nav>
        <ul>
          <q-tabs active-color="primary">
            <q-route-tab class="text-dark nav__links" label="About Us" />
            <q-route-tab class="text-dark nav__links" label="Services" />
            <q-route-tab class="text-dark nav__links" label="Contact Us" />
          </q-tabs>
        </ul>
      </nav>

      <nav>
        <ul>
          <q-tabs>
            <q-route-tab
              class="text-primary q-mr-md login info"
              label="Log in"
            />
            <q-route-tab
              class="text-white sign_up q-px-lg q-py-sm"
              label="Sign Up"
            />
          </q-tabs>
        </ul>
      </nav>

      <q-btn
        flat
        dense
        class="hide"
        round
        icon="menu"
        aria-label="Menu"
        @click="toggleLeftDrawer"
      />
      <q-drawer
        side="right"
        v-model="leftDrawerOpen"
        bordered
        :breakpoint="1208"
      >
        <q-list>
          <q-tabs active-color="primary">
            <div
              style="width: 100%"
              class="column q-py-lg items-center side_bar justify-center"
            >
              <q-route-tab
                class="text-dark nav__links addbor"
                label="About Us"
              />
              <q-route-tab
                class="text-dark nav__links addbor"
                label="Services"
              />
              <q-route-tab
                class="text-dark nav__links addbor"
                label="Contact Us"
              />
            </div>
          </q-tabs>
        </q-list>
      </q-drawer>
    </div>
    <div class="q-pa-xs bg-primary"></div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style scoped>
.q-tab__indicator {
  background: #fed12e !important;
}
.q-drawer-container {
  display: none;
}
.hue {
  box-shadow: -1px 0 4px hsl(190, 64%, 15%, 0.15);
  background: #ffffff;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
}

.addbor {
  border: 1px solid #f4f4f4;
  padding: 0.55rem;
  width: 100%;
  display: flex;
  justify-content: center;
}

.hide {
  display: none;
}

.logo {
  font-style: normal;
  font-size: 38.7916px;
  line-height: 47px;
  color: #1abc9c;
}

.login {
  background: #ffffff;
  border: 1px solid #1abc9c;
  border-radius: 8px;
  width: 140px;
}

.sign_up {
  box-shadow: rgba(26, 188, 156, 0.96) 0px 25px 20px -20px;
  border-radius: 8px;
  width: 140px;
  background: #1abc9c;
}

@media (max-width: 768px) {
  .hide {
    display: block;
    position: absolute;
    /* top: 1px; */
    z-index: 1000;
    right: 20px;
  }

  .q-drawer-container {
    display: block;
  }

  nav {
    display: none;
  }
}
</style>
