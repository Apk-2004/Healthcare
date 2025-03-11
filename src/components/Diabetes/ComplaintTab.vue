<template>
    <div class="complaint-tab">
      <h2 class="section-title">COMPLAINT TAB</h2>
  
      <div class="form-group">
        <label for="chiefComplaint" class="label">CHIEF COMPLAINT:</label>
        <textarea
          id="chiefComplaint"
          v-model="chiefComplaint"
          class="input-textarea"
          rows="4"
          cols="70"
        ></textarea>
      </div>
  
      <div class="form-group">
        <label for="history" class="label">HISTORY:</label>
        <textarea
          id="history"
          v-model="history"
          class="input-textarea"
          rows="4"
          cols="70"
        ></textarea>
      </div>
  
      <div class="form-group">
        <label for="pastHistory" class="label">PAST HISTORY:</label>
        <textarea
          id="pastHistory"
          v-model="pastHistory"
          class="input-textarea"
          rows="4"
          cols="70"
        ></textarea>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ComplaintTab",
    data() {
      return {
        chiefComplaint: "",
        history: "",
        pastHistory: "",
      };
    },
  };
  </script>
  
  <style scoped>
  .complaint-tab {
    background-color: #d3d3d3; /* Light grey background */
    padding: 20px;
    min-height: 100vh; /* Minimum height of viewport */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw; /* Full width of the viewport */
    box-sizing: border-box; /* Include padding in the element's total width and height */
    margin-left: -50vw;
    left: 50%;
    position: relative;
  }
  
  .section-title {
    color: #000000; /* Black text color */
    background-color: #2ec4b6; /* Teal background color */
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    padding: 10px 20px; /* Add padding for better appearance */
    border-radius: 4px; /* Optional: add rounded corners */
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 600px;
    margin-bottom: 20px;
  }
  
  .label {
    color: #000000; /* Black text color */
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .input-textarea {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ffffff;
    background-color: #ffffff;
    border-radius: 4px;
    resize: vertical;
  }
  </style>