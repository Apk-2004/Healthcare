<template>
    <div class="neck-tab">
      <div class="form-group">
        <label for="thyroid" class="label">Thyroid:</label>
        <textarea id="thyroid" v-model="thyroid" class="input-textarea" rows="1" placeholder="Thyroid"></textarea>
      </div>
      <div class="form-group">
        <label for="nodes" class="label">Nodes:</label>
        <textarea id="nodes" v-model="nodes" class="input-textarea" rows="1" placeholder="Nodes"></textarea>
      </div>
      <div class="form-group">
        <label for="videoLaryngoscopy" class="label">Video Laryngoscopy:</label>
        <textarea id="videoLaryngoscopy" v-model="videoLaryngoscopy" class="input-textarea" rows="1" placeholder="Video Laryngoscopy"></textarea>
      </div>
      <div class="form-group">
        <label for="additionalNotes" class="label">Additional Notes:</label>
        <textarea id="additionalNotes" v-model="additionalNotes" class="input-textarea" rows="2" placeholder="Additional Notes"></textarea>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "NeckTab",
    data() {
      return {
        thyroid: "",
        nodes: "",
        videoLaryngoscopy: "",
        additionalNotes: ""
      };
    }
  };
  </script>
  
  <style scoped>
  .neck-tab {
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
    border-radius: 2px;
    box-sizing: border-box;
    resize: vertical;
    font-family: 'Courier New', Courier, monospace;
    background-color: #ffffff; /* White background for text boxes */
  }
  </style>
  