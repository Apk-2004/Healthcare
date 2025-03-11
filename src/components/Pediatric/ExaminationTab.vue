<template>
    <div class="examination-tab">
      <h2 class="section-title">EXAMINATION TAB</h2>
  
      <div class="section-divider">
        <h3 class="subsection-title">SYSTEMIC EXAMINATION:</h3>
        <div class="form-group row">
          <div class="form-item">
            <label for="cvs" class="label">CVS:</label>
            <textarea id="cvs" v-model="cvs" class="input-textarea" rows="2" placeholder="CVS"></textarea>
          </div>
          <div class="form-item">
            <label for="rs" class="label">RS:</label>
            <textarea id="rs" v-model="rs" class="input-textarea" rows="2" placeholder="RS"></textarea>
          </div>
          <div class="form-item">
            <label for="cns" class="label">CNS:</label>
            <textarea id="cns" v-model="cns" class="input-textarea" rows="2" placeholder="CNS"></textarea>
          </div>
          <div class="form-item">
            <label for="pa" class="label">PA:</label>
            <textarea id="pa" v-model="pa" class="input-textarea" rows="2" placeholder="PA"></textarea>
          </div>
        </div>
      </div>
  
      <div class="section-divider">
        <h3 class="subsection-title">GENERAL EXAMINATION:</h3>
        <div class="form-group">
          <textarea id="generalExamination" v-model="generalExamination" class="input-textarea" rows="2" placeholder="General Examination"></textarea>
        </div>
      </div>
  
      <div class="section-divider">
        <h3 class="subsection-title">LOCAL EXAMINATION:</h3>
        <div class="form-group">
          <textarea id="localExamination" v-model="localExamination" class="input-textarea" rows="2" placeholder="Local Examination"></textarea>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ExaminationTab",
    data() {
      return {
        cvs: "",
        rs: "",
        cns: "",
        pa: "",
        generalExamination: "",
        localExamination: ""
      };
    }
  };
  </script>
  
  <style scoped>
  .examination-tab {
    background-color: #4e8c80; /* Teal background color */
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100hv;
    width: 100%; /* Cover the whole page width */
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
  }
  
  .section-title {
    color: #ffffff; /* White text color */
    background-color: #4e8c80; /* Darker teal background color */
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    padding: 10px 20px; /* Add padding for better appearance */
    border-radius: 4px; /* Optional: add rounded corners */
    text-transform: uppercase; /* Uppercase text */
    display: inline-block; /* Make it like a button */
    cursor: pointer; /* Add cursor pointer for button-like feel */
  }
  
  .subsection-title {
    color: #000000; /* Black text color */
    font-weight: bold;
    text-align: left;
    margin-bottom: 10px;
    padding: 8px 3px; /* Add padding for better appearance */
    border-radius: 2px; /* Optional: add rounded corners */
    text-transform: uppercase; /* Uppercase text */
    width: 100%;
    margin-right: 40%; /* Align with the start of the text boxes */
  }
  
  .section-divider {
    width: 100%;
    max-width: 1000px; /* Cover the whole page width */
    margin-bottom: 20px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 20px;
  }
  
  .form-group.row {
    flex-direction: row; /* Arrange items in a row */
    justify-content: space-between;
    margin-left: 2px;
  }
  
  .form-item {
    display: flex;
    flex-direction: column;
    width: 23%; /* Adjust width to fit four items in one row */
  }
  
  .label {
    color: #000000; /* Black text color */
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 10px;
    align-self: flex-start; /* Align label to the start (left) */
  }
  
  .input-textarea {
    width: 100%;
    padding: 8px; /* Adjust padding for smaller inputs */
    font-size: 18px;
    border: 1px solid #ccc;
    font-family: 'Courier New', Courier, monospace;
    border-radius: 2px; /* Curved borders */
    resize: vertical;
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
    background-color: #ffffff; /* White background for inputs */
  }
  </style>
  
    
    