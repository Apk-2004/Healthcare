<template>
    <div class="oral-cavity-tab">
      <div class="form-group">
        <label for="tongue" class="label">Tongue:</label>
        <textarea id="tongue" v-model="tongue" class="input-textarea" rows="1" placeholder="Tongue"></textarea>
      </div>
      <div class="form-group">
        <label for="gums" class="label">Gums:</label>
        <textarea id="gums" v-model="gums" class="input-textarea" rows="1" placeholder="Gums"></textarea>
      </div>
      <div class="form-group">
        <label for="teeth" class="label">Teeth:</label>
        <textarea id="teeth" v-model="teeth" class="input-textarea" rows="1" placeholder="Teeth"></textarea>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "OralCavityTab",
    data() {
      return {
        tongue: "",
        gums: "",
        teeth: ""
      };
    }
  };
  </script>
  
  <style scoped>
  .oral-cavity-tab {
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
  