<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header
      class="bg-white onboard_nav q-py-md row justify-between items-center"
    >
      <div class="q-pl-lg">
        <q-toolbar-title class="text-primary tool_title">
          <span class="text-weight-bold text-primary"> ONE</span>FIVE.COM
        </q-toolbar-title>
      </div>

      <q-tabs class="text-black navs q-px-md">
        <q-route-tab to="/your/route" replace label="Services" />
        <q-route-tab to="/some/other/route" replace label="About" />
      </q-tabs>
      <q-btn
        class="text-black menu q-mr-sm"
        flat
        round
        dense
        icon="menu"
        @click="toggleLeftDrawer"
      />
    </q-header>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer v-model="leftDrawerOpen" side="left" bordered class="bg-grey-2">
      <!-- QScrollArea is optional -->
      <q-toolbar-title class="text-primary drawer_title q-mt-lg">
        <span class="text-weight-bold text-primary"> ONE</span>FIVE.COM
      </q-toolbar-title>

      <q-scroll-area class="fit q-px-md q-py-xl">
        <q-item clickable class="bg-grey-4 q-my-sm"> Services </q-item>
        <q-item clickable class="bg-grey-4 q-my-sm"> About </q-item>
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
  // name: 'LayoutName',

  setup() {
    const leftDrawerOpen = ref(false);

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
.tool_title {
  font-size: 2.5rem;
}

.menu {
  display: none;
}

@media (max-width: 700px) {
  .menu {
    display: block;
  }

  .navs {
    display: none;
  }
  .drawer_title {
    font-size: 1.5rem;
    text-align: center;
  }
}
@media (max-width: 500px) {
  .tool_title {
    font-size: 1.5rem;
  }
}
</style>
