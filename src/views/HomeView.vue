<template>
  <div class="home">
    <h2>Tasks</h2>
    <div class="container">
      <div class="row">
        <div class=".col-md-6.offset-md-3">
          <div class="row">
            <div class="col-4">
              <div class="list-group" id="list-tab" role="tablist">
                <a
                  class="list-group-item list-group-item-action"
                  v-for="task in tasks"
                  :key="task.id"
                  id="list-home-list"
                  data-toggle="list"
                  href="#list-home"
                  role="tab"
                  aria-controls="home"
                  >Nama: {{ task.name }} <br/> Deskripsi: {{ task.description }} <br/> Kategori: {{ task.category }} <br/>
                  <span class="badge badge-primary badge-pill">
                    <router-link
                      :to="{ path: `/tasks/${task.id}` }"
                      class="btn btn-success"
                      >Edit</router-link
                    >
                    <a
                      href="#"
                      class="btn btn-danger"
                      @click="deleteTask(task.id)"
                      >Delete</a
                    >
                  </span>
                </a>
              </div>
            </div>
            <div class="col-8">
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="list-home"
                  role="tabpanel"
                  aria-labelledby="list-home-list"
                >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import taskColRef from "../firebase";
import { getDocs, doc, deleteDoc } from "firebase/firestore";
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      tasks: [],
      selectedDoc: null,
    };
  },
  methods: {
    async fetchTask() {
      let taskSS = await getDocs(taskColRef);
      let tasks = [];
      taskSS.forEach((task) => {
        let taskData = task.data();
        taskData.id = task.id;
        tasks.push(taskData);
      });
      this.tasks = tasks;
    },
    async deleteTask(taskId) {
      let taskRef = doc(taskColRef, taskId);
      await deleteDoc(taskRef);
      this.$router.go();
    },
  },
  created() {
    this.fetchTask();
  },
};
</script>
