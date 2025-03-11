<template>
    <div class="nose-tab">
      <div class="form-group">
        <label for="externalNose" class="label">External Nose:</label>
        <textarea id="externalNose" v-model="externalNose" class="input-textarea" rows="1" placeholder="External Nose"></textarea>
      </div>
      <div class="form-group">
        <label for="anteriorRhinoscopy" class="label">Anterior Rhinoscopy:</label>
        <textarea id="anteriorRhinoscopy" v-model="anteriorRhinoscopy" class="input-textarea" rows="1" placeholder="Anterior Rhinoscopy"></textarea>
      </div>
      <div class="form-group">
        <label for="adenoids" class="label">Adenoids:</label>
        <textarea id="adenoids" v-model="adenoids" class="input-textarea" rows="1" placeholder="Adenoids"></textarea>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "NoseTab",
    data() {
      return {
        externalNose: "",
        anteriorRhinoscopy: "",
        adenoids: ""
      };
    }
  };
  </script>
  
  <style scoped>
  .nose-tab {
    width: 100%;
    padding: 20px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  .label {
    color: #ffffff; /* Heading color */
    font-weight: bold;
    margin-bottom: 10px;
    text-align: left; /* Heading on the left */
  }
  
  .input-textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
    font-family: 'Courier New', Courier, monospace;
    background-color: #ffffff; /* White background for text boxes */
  }
  </style>
  