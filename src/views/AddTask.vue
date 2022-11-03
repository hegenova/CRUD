<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h2>Add Task</h2>
          <form @submit.prevent="createTask">
            <div class="form-group">
              <label for="exampleInputEmail1"></label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Task Name"
                v-model="name"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1"></label>
              <input
                type="text"
                class="form-control"
                placeholder="Description"
                v-model="description"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1"></label>
              <input
                type="text"
                class="form-control mb-2"
                placeholder="Category"
                v-model="category"
              />
            </div>
            <button type="submit" class="btn btn-primary">Create Task</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import taskColRef from "../firebase";
import { addDoc } from "firebase/firestore";
export default {
  data() {
    return {
      name: null,
      description: null,
      category: null,
    };
  },
  methods: {
    async createTask() {
      console.log("Creating Document");
      const addedDoc = await addDoc(taskColRef, this.$data);
      alert("Document created successfully!");
      console.log(addedDoc);
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>
