<template>
  <div class="q-pa-md job_table">
    <q-table title="Jobs" :rows="rows" :columns="columns" row-key="name">
      <template v-slot:body-cell-job_provider="props">
        <!-- {{ props }} -->
        <q-td :props="props" class="row items-center">
          <q-avatar size="50px" class="shadow-10">
            <img :src="props.row.image_url" />
          </q-avatar>
          <div class="hold q-ml-md">
            <p class="text-weight-medium">{{ props.row.name }}</p>
            <small class="text-info">{{ props.row.locate }}</small>
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-amount="props">
        <q-td :props="props" class="text-weight-medium">
          {{ props.row.amount }}</q-td
        >
      </template>
      <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <div
            v-if="props.row.status === 'Completed'"
            :class="props.row.status === 'Completed' ? 'completed' : ''"
          >
            <span>{{ props.row.status }}</span>
            <span v-if="props.row.status === 'Completed'"
              ><i class="ri-check-double-fill q-ml-lg"></i
            ></span>
          </div>
          <div
            v-if="props.row.status === 'failed'"
            :class="props.row.status === 'failed' ? 'failed' : ''"
          >
            <span>{{ props.row.status }}</span>
          </div>
          <div
            v-if="props.row.status === 'pending'"
            :class="props.row.status === 'pending' ? 'pending' : ''"
          >
            <span>{{ props.row.status }}</span>
          </div>
          <div
            v-if="props.row.status === 'inProgress'"
            :class="props.row.status === 'inProgress' ? 'in_prog' : ''"
          >
            <span>{{ props.row.status }}</span>
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
const columns = [
  {
    name: "job_provider",
    required: true,
    label: "Job Provider",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "amount",
    align: "center",
    label: "Amount",
    field: "amount",
    sortable: true,
  },
  //   {
  //     name: "image_url",
  //     align: "center",
  //     label: "Image",
  //     field: "image_url",
  //     sortable: true,
  //   },
  { name: "job_title", label: "Job Title", field: "job_title", sortable: true },
  { name: "created_at", label: "Created at", field: "created_at" },
  { name: "paid_at", label: "Paid at", field: "paid_at" },
  { name: "status", label: "Status", field: "status" },
];

const rows = [
  {
    name: "Amhed Sanusi",
    image_url:
      "https://avatars3.githubusercontent.com/u/34883558?s=400&u=09455019882ac53dc69b23df570629fd84d37dd1&v=4",
    amount: "₦500",
    job_title: "Farming",
    created_at: "10TH March,2022 10:00:20 AM",
    paid_at: "12TH March,2022 05:00:20 PM",
    status: "pending",
    locate: "Barnawa",
  },
  {
    name: "Amhed Sanusi",
    image_url:
      "https://avatars3.githubusercontent.com/u/34883558?s=400&u=09455019882ac53dc69b23df570629fd84d37dd1&v=4",
    amount: "₦500",
    job_title: "Farming",
    created_at: "10TH March,2022 10:00:20 AM",
    paid_at: "12TH March,2022 05:00:20 PM",
    status: "Completed",
    locate: "Barnawa",
  },
  {
    name: "Amhed Sanusi",
    image_url:
      "https://avatars3.githubusercontent.com/u/34883558?s=400&u=09455019882ac53dc69b23df570629fd84d37dd1&v=4",
    amount: "₦500",
    job_title: "Farming",
    created_at: "10TH March,2022 10:00:20 AM",
    paid_at: "12TH March,2022 05:00:20 PM",
    locate: "Barnawa",
    status: "inProgress",
  },
  {
    name: "Amhed Sanusi",
    image_url:
      "https://avatars3.githubusercontent.com/u/34883558?s=400&u=09455019882ac53dc69b23df570629fd84d37dd1&v=4",
    amount: "₦500",
    job_title: "Farming",
    created_at: "10TH March,2022 10:00:20 AM",
    paid_at: "12TH March,2022 05:00:20 PM",
    status: "failed",
    locate: "Barnawa",
  },
  {
    name: "Amhed Sanusi",
    image_url:
      "https://avatars3.githubusercontent.com/u/34883558?s=400&u=09455019882ac53dc69b23df570629fd84d37dd1&v=4",
    amount: "₦500",
    job_title: "Farming",
    created_at: "10TH March,2022 10:00:20 AM",
    paid_at: "12TH March,2022 05:00:20 PM",
    status: "Completed",
    locate: "Barnawa",
  },
  {
    name: "Amhed Sanusi",
    image_url:
      "https://avatars3.githubusercontent.com/u/34883558?s=400&u=09455019882ac53dc69b23df570629fd84d37dd1&v=4",
    amount: "₦500",
    job_title: "Farming",
    created_at: "10TH March,2022 10:00:20 AM",
    paid_at: "12TH March,2022 05:00:20 PM",
    status: "Completed",
    locate: "Barnawa",
  },
  {
    name: "Amhed Sanusi",
    image_url:
      "https://avatars3.githubusercontent.com/u/34883558?s=400&u=09455019882ac53dc69b23df570629fd84d37dd1&v=4",
    amount: "₦500",
    job_title: "Farming",
    created_at: "10TH March,2022 10:00:20 AM",
    paid_at: "12TH March,2022 05:00:20 PM",
    status: "Completed",
    locate: "Barnawa",
  },
];

export default {
  setup() {
    return {
      columns,
      rows,
    };
  },
};
</script>

<style scoped>
p {
  margin-bottom: 0;
}

.completed {
  background: rgba(26, 188, 156, 0.21);
  border-radius: 60px;
  padding: 0.65rem;
  width: 150px;
  color: #1abc9c;
  text-align: center;
  float: right;
}
.failed {
  background: rgba(225, 78, 67, 0.5);
  border-radius: 60px;
  padding: 0.65rem;
  color: #dd3629;
  width: 150px;
  text-align: center;
  float: right;
}
.in_prog {
  background: rgba(0, 155, 255, 0.5);
  border-radius: 60px;
  padding: 0.65rem;
  color: #0469aa;
  width: 150px;
  text-align: center;
  float: right;
}
.pending {
  background: rgba(255, 194, 0, 0.5);
  border-radius: 60px;
  padding: 0.65rem;
  color: #b17e06;
  width: 150px;
  text-align: center;
  float: right;
}
</style>
