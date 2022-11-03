<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h2>Edit Task</h2>
          <form @submit.prevent="updateTask">
            <div class="form-group">
              <label for="exampleInputEmail1"></label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Task Name"
                v-model="taskInfo.name"
              />
              <small id="emailHelp" class="form-text text-muted"></small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1"></label>
              <input
                type="text"
                class="form-control"
                placeholder="Description"
                v-model="taskInfo.description"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1"></label>
              <input
                type="text"
                class="form-control mb-2"
                placeholder="Category"
                v-model="taskInfo.category"
              />
            </div>
            <button class="btn btn-primary">Update Task</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import taskColRef from "../firebase";
import { getDoc, doc, setDoc } from "firebase/firestore";
export default {
  data() {
    return {
      selectedTask: {},
      taskId: null,
      docRef: null,
      taskInfo: {
        name:null,
      description:null,
      category:null,
      }
    };
  },
  methods: {
    async getTask() {
      let taskRef = doc(taskColRef, this.taskId);
      this.docRef = taskRef;
      let task = await getDoc(this.docRef);
      let taskData = task.data();
      this.taskInfo.name = taskData.name;
      this.taskInfo.description = taskData.description;
      this.taskInfo.category = taskData.category;
    },
    async updateTask(){
        await setDoc(this.docRef, this.taskInfo);
        this.$router.push("/");
    }
  },
  created() {
    let taskId = this.$route.params.taskId;
    this.taskId = taskId;
    this.getTask();
  },
};
</script>

<style>
</style>
