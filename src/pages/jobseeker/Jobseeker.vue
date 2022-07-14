<template>
  <div class="wrapper">
    <div class="hold">
      <div class="containerr">
        <div class="gridd">
          <div class="grid_left">
            <div class="text-weight-bold wel">Welcome Zarror!</div>
            <div class="text-weight-medium sub_wel">
              Hope you are healthy and happy today...
            </div>

            <div class="grid_items">
              <div class="grid_item">
                <div class="grid_item_top">
                  <i class="ri-bar-chart-fill q-pa-sm bg-dark text-white"></i>
                  <span class="text-dark">Job Response </span>
                </div>

                <q-circular-progress
                  show-value
                  font-size="14px"
                  :value="value"
                  size="120px"
                  :thickness="0.22"
                  color="teal"
                  track-color="grey-3"
                  class="q-ma-md"
                >
                  {{ value }}%
                </q-circular-progress>
              </div>
              <div class="grid_item">
                <div class="grid_item_top">
                  <i
                    class="ri-bar-chart-fill q-pa-sm bg-negative text-white"
                  ></i>
                  <span class="text-negative">Delivery on time </span>
                </div>

                <q-circular-progress
                  show-value
                  font-size="14px"
                  :value="value"
                  size="120px"
                  :thickness="0.22"
                  color="teal"
                  track-color="grey-3"
                  class="q-ma-md"
                >
                  {{ value }}%
                </q-circular-progress>
              </div>
              <div class="grid_item">
                <div class="grid_item_top">
                  <i class="ri-bar-chart-fill bg-accent q-pa-sm text-white"></i>
                  <span class="text-accent">Job completion</span>
                </div>

                <q-circular-progress
                  show-value
                  font-size="14px"
                  :value="value"
                  size="120px"
                  :thickness="0.22"
                  color="teal"
                  track-color="grey-3"
                  class="q-ma-md"
                >
                  {{ value }}%
                </q-circular-progress>
              </div>
            </div>

            <div class="jobseek">
              <header
                class="header row items-center justify-between q-pa-sm bg-primary"
              >
                <div class="logo row items-center">
                  <i class="ri-briefcase-fill"></i> <span>Find Jobs</span>
                </div>

                <div class="right row items-center">
                  <div class="seacrh q-mr-md">
                    <div class="seacrh_wrap">
                      <i class="ri-search-fill"></i>
                      <input type="text" placeholder="Search for jobs" />
                    </div>
                  </div>
                  <div class="sort">
                    <q-btn class="sort_btn">
                      <i class="ri-sort-asc"></i>
                      <span>Sort by filter</span>
                    </q-btn>
                  </div>
                </div>
              </header>
              <div class="jobs_wrap">
                <div class="jobs row items-center justify-between">
                  <div class="jon_img row items-center">
                    <q-avatar class="q-mr-md">
                      <img src="/images/ava.png" alt="" />
                    </q-avatar>

                    <div class="right">
                      <div class="text-weight-bold">Ahmed Sanusi</div>
                      <small> Barnawa </small>
                    </div>
                  </div>

                  <div class="time">
                    <span>2hr ago</span>
                  </div>
                </div>

                <div class="text-weight-bold text_desc">
                  I Need a Photographer for my birthday party
                </div>

                <p>
                  I need a photographer for my birthday party, At barnawa
                  estate. If you’re available ...
                  <q-btn class="text-primary more"> More</q-btn>
                </p>

                <div class="btns row items-center q-my-lg">
                  <div class="left">
                    <i class="ri-thumb-up-fill"></i> <span>Like</span>
                  </div>

                  <div class="right">
                    <q-btn class="apply"> Apply Here </q-btn>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid_right">
            <div class="grider">
              <span>Your earnings this month</span>
              <div class="amt">N00.00</div>
              <small>5th May 2022 at 7:30am</small>

              <q-btn class="withdraw">
                <i class="ri-link q-mr-md"></i> Withdraw all earnings
              </q-btn>
            </div>
            <div class="griderr">
              <div class="top">
                <i class="ri-send-plane-fill"></i>
                <span class="text-weight-bold text-primary"
                  >Weekly Newsletter</span
                >
              </div>
              <div class="tex">
                We’ll keep you updated when the best Opportunities pops up on
                ONEFIVE.
              </div>
              <div class="input">
                <input type="text" placeholder="Enter your email" />
              </div>

              <q-btn class="subscribe"> Subscribe </q-btn>
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
.wrapper {
  background: #e5e5e5;
  padding: 2rem 0;
}

.gridd {
  display: grid;
  grid-template-columns: 4fr 2fr;
  gap: 1rem;
  align-items: center;
}
.grid_items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  align-items: center;
  margin-top: 2rem;
}
.grid_item {
  background: #ffffff;
  border-radius: 24px;
  padding: 2rem;
  min-height: 300px;
  text-align: center;
  width: 100%;
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

.grider {
  background: #1abc9c;
  border-radius: 24px;
  color: white;
  padding: 2rem;
  min-height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.grider span {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 12px;
  color: #ffffff;
}

.grider .amt {
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 48px;
  color: #ffffff;
}

.grider small {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 12px;
  color: #ffffff;
}

.griderr {
  background: rgba(26, 188, 156, 0.14);
  border-radius: 8px;
  padding: 2rem;
  margin: 2rem 0;
}
.griderr .input {
  margin: 2rem 0;
}

.griderr .input input {
  border: none;
  padding: 0.75rem;
  background: #fcfcfe;
  border-radius: 4px;
  width: 100%;
}

.griderr .top {
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 1rem;
}
.griderr .tex {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #404040;
  margin: 3rem 0;
}
.griderr .top i {
  background: rgba(26, 188, 156, 0.2);
  border-radius: 100px;
  color: #1abc9c;
  padding: 0.95rem;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}

.subscribe {
  width: 100%;
  background: #1abc9c;
  padding: 1rem;
  color: #fff;
}

.header {
  color: #fff;
  margin: 2rem 0 0;
}

.time {
  color: #979797;
}

.seacrh_wrap {
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 82.5328px;
  padding: 0.65rem;
  gap: 0.55rem;
  width: 400px;
}
.seacrh_wrap i {
  color: #1abc9c;
}

.sort {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.seacrh_wrap input {
  border: none;
  width: 100%;
}
.seacrh_wrap input:focus {
  outline: none;
}

.btns {
  margin-top: 3rem;
}

.btns i {
  font-size: 2rem;
}

.btns .left {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin-right: 2.5rem;
}

.apply {
  background: #1abc9c;
  border-radius: 3.87967px;
  color: #fff;
  padding: 0.55rem;
}

.jobs_wrap {
  background: #ffffff;
  padding: 1rem;
}

.text_desc {
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  margin: 2rem 0;
}

.jobs p {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin: 1rem 0;
}
</style>
