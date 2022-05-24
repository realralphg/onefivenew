<template>
  <q-layout class="hue" view="lHh Lpr lFf">
    <div class="nav container">
      <div class="logo"><span class="text-weight-bold">ONE</span>FIVE</div>

      <nav>
        <ul>
          <q-tabs active-color="primary">
            <q-route-tab
              class="text-dark nav__links"
              to="/page2"
              label="About Us"
            />
            <q-route-tab
              class="text-dark nav__links"
              to="/page3"
              label="Services"
            />
            <q-route-tab
              class="text-dark nav__links"
              to="/page3"
              label="Contact Us"
            />
          </q-tabs>
        </ul>
      </nav>

      <nav>
        <ul>
          <q-tabs>
            <q-route-tab
              class="text-primary q-mr-md login info"
              to="/page1"
              label="Log in"
            />
            <q-route-tab
              class="text-white sign_up q-px-lg q-py-sm"
              to="/page2"
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
          <q-item-label header> Essential Links </q-item-label>

          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
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
