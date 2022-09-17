<template>
  <div class="wrapper">
    <div class="choose container">
      <div class="head_text">
        Choose Different <span class="text-primary">Category</span>
      </div>
      <div class="head_subtext">
        The smart way to search for a job near you.
      </div>

      <div class="tabs q-py-xl">
        <q-tabs
          v-model="tab"
          dense
          autoplay
          class="text-weight-bold q-mb-lg"
          active-color="dark"
          active-bg-color="accent"
          indicator-color="accent"
          align="justify"
          narrow-indicator
          mobile-arrows
          outside-arrows
        >
          <q-tab class="text-dark" name="All" label="All" />
          <q-tab class="text-dark" name="Plumbing" label="Plumbing" />
          <q-tab class="text-dark" name="Electricians" label="Electricians" />
          <q-tab class="text-dark" name="Remodelling" label="Remodelling" />
          <q-tab
            class="text-dark"
            name="Appliance Repair"
            label="Appliance Repair"
          />
          <q-tab class="text-dark" name="Cleaning" label="Cleaning" />
          <q-tab class="text-dark" name="Creative" label="Creative" />
          <q-tab class="text-dark" name="Car Washing" label="Car Washing" />
        </q-tabs>

        <!-- <q-separator /> -->

        <q-tab-panels class="bg-grey-11" v-model="tab" animated>
          <q-tab-panel name="All">
            <div class="big_banner_jobs">
              <div
                :class="job.big ? 'big each_job' : 'small'"
                v-for="job in bigBanner"
                :key="job.id"
              >
                <img :src="job.img" alt="" />
                <div class="job_details">
                  <p class="text-weight-bold">{{ job.name }}</p>
                  <q-btn class="view_job"> View More </q-btn>
                </div>
              </div>
            </div>
            <div class="jobs">
              <div
                :class="job.big ? 'big each_job' : 'small'"
                v-for="job in jobs"
                :key="job.id"
              >
                <img :src="job.img" alt="" />
                <div class="job_details">
                  <p class="text-weight-bold">{{ job.name }}</p>
                  <q-btn class="view_job"> View More </q-btn>
                </div>
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Plumbing"> </q-tab-panel>
          <q-tab-panel name="Electricians"> </q-tab-panel>
          <q-tab-panel name="Remodelling"> </q-tab-panel>
          <q-tab-panel name="Appliance Repair"> </q-tab-panel>
          <q-tab-panel name="Cleaning"> </q-tab-panel>
          <q-tab-panel name="Creative"> </q-tab-panel>
          <q-tab-panel name="Car Washing"> </q-tab-panel>
        </q-tab-panels>
      </div>
      <div class="get-started text-center">
        <q-btn
          style="border-radius: 8px"
          class="bg-primary q-px-xl q-py-sm text-white"
          >Get Started</q-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      tab: ref("All"),

      bigBanner: [
        {
          id: 3,
          img: "/images/fam.jpeg",
          name: "Farming Services",
          title: "",
          big: true,
        },
        {
          id: 1,
          img: "/images/first-serv.png",
          name: "Carpentary Services",
          title: "",
          big: true,
        },
        {
          id: 2,
          img: "https://images.unsplash.com/photo-1565689876697-e467b6c54da2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774",
          name: "Car Washing Services",
          title: "",
          big: true,
        },
      ],
      jobs: [
        {
          id: 3,
          img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740",
          name: "Cleaning Services",
          title: "",
          big: false,
        },
        {
          id: 4,
          img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1796",
          name: "Event Planning",
          title: "",
          big: false,
        },
        {
          id: 5,
          img: "https://media.istockphoto.com/photos/party-dj-picture-id184936708?k=20&m=184936708&s=612x612&w=0&h=0AJeZ8L4Tbj5meILAeXHRM5oDV1EDaFvOWLZJ9OyemY=",
          name: "Disk Jockey",
          title: "",
          big: false,
        },
        {
          id: 6,
          img: "/images/sixth.png",
          name: "Photography",
          title: "",
          big: false,
        },
        {
          id: 7,
          img: "/images/eight.png",
          name: "Modelling",
          title: "",
          big: false,
        },
        {
          id: 8,
          img: "/images/ninth.png",
          name: "Electrician Services",
          title: "",
          big: false,
        },
        {
          id: 9,
          img: "/images/tenth.png",
          name: "Painting",
          title: "",
          big: false,
        },
        {
          id: 10,
          img: "/images/eleven.png",
          name: "Plumbing Services",
          title: "",
          big: false,
        },
        {
          id: 11,
          img: "/images/twelve.png",
          name: "Makeup Artist Services",
          title: "",
          big: false,
        },
        {
          id: 12,
          img: "/images/thirteen.png",
          name: "Cinematography",
          title: "",
          big: false,
        },
        {
          id: 13,
          img: "/images/fourteen.png",
          name: "Tile Services",
          title: "",
          big: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.wrapper {
  padding: 4rem 0;
  position: relative;
  z-index: 2;
  margin-top: 7rem;
}
.head_text {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 25px;
  margin-bottom: 1rem;
  text-align: center;

  color: #2f4858;
}

.head_subtext {
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */

  text-align: center;

  color: #333333;
}

.big_banner_jobs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  /* grid-template-columns: repeat(3, 1fr); */
  margin: 3rem 0;
  gap: 1rem;
}
.big_banner_jobs img {
  object-fit: cover;
  width: 100%;
  height: 329.66px;
  border-radius: 7.60021px;
}

.jobs {
  display: grid;
  /* grid-template-columns: repeat(5, 1fr); */
  margin: 3rem 0;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
.jobs img {
  object-fit: cover;
  width: 100%;
  height: 177.65px;
  border-radius: 7.60021px;
}

.each_job {
  position: relative;
}

.big .job_details {
  position: absolute;
  bottom: 0%;
  padding: 2rem;
  width: 100%;
  height: 40%;
  background: linear-gradient(
    180.89deg,
    rgba(0, 0, 0, 0) 0.76%,
    #000000 99.24%
  );
}

.small .job_details {
  position: absolute;
  bottom: 0%;
  padding: 1rem;
  width: 100%;
  height: 60%;
  color: #fff;
  background: linear-gradient(
    180.89deg,
    rgba(0, 0, 0, 0) 0.76%,
    #000000 99.24%
  );
}

.big .job_details p {
  color: #fff;
}

.big .job_details .view_job {
  border: 1.90005px solid #1abc9c;
  border-radius: 95.0026px;
  width: 133px;
  color: #fff;
}
.small .job_details .view_job {
  border: 1.90005px solid #1abc9c;
  border-radius: 95.0026px;
  width: 133px;
  color: #fff;
}

.big {
  position: relative;
}

.small {
  position: relative;
}

@media (max-width: 600px) {
  .big_banner_jobs {
    display: grid;
    margin: 1rem 0;
    gap: 1rem;
  }
  .head_text {
    line-height: 35px;
  }
}
</style>
