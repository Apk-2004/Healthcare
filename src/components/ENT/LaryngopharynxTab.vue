<template>
    <div class="laryngopharynx-tab">
      <div class="form-group">
        <label for="postTongue" class="label">Post 1/3 Tongue:</label>
        <textarea id="postTongue" v-model="postTongue" class="input-textarea" rows="1" placeholder="Post 1/3 Tongue"></textarea>
      </div>
      <div class="form-group">
        <label for="vallecula" class="label">Vallecula:</label>
        <textarea id="vallecula" v-model="vallecula" class="input-textarea" rows="1" placeholder="Vallecula"></textarea>
      </div>
      <div class="form-group">
        <label for="epiglottis" class="label">Epiglottis:</label>
        <textarea id="epiglottis" v-model="epiglottis" class="input-textarea" rows="1" placeholder="Epiglottis"></textarea>
      </div>
      <div class="form-group">
        <label for="aeFold" class="label">AE Fold:</label>
        <textarea id="aeFold" v-model="aeFold" class="input-textarea" rows="1" placeholder="AE Fold"></textarea>
      </div>
      <div class="form-group">
        <label for="ventricularBand" class="label">Ventricular Band:</label>
        <textarea id="ventricularBand" v-model="ventricularBand" class="input-textarea" rows="1" placeholder="Ventricular Band"></textarea>
      </div>
      <div class="form-group">
        <label for="vocalCord" class="label">Vocal Cord:</label>
        <textarea id="vocalCord" v-model="vocalCord" class="input-textarea" rows="1" placeholder="Vocal Cord"></textarea>
      </div>
      <div class="form-group">
        <label for="thirdTongue" class="label">1/3rd Tongue:</label>
        <textarea id="thirdTongue" v-model="thirdTongue" class="input-textarea" rows="1" placeholder="1/3rd Tongue"></textarea>
      </div>
      <div class="form-group">
        <label for="arytenoids" class="label">Arytenoids:</label>
        <textarea id="arytenoids" v-model="arytenoids" class="input-textarea" rows="1" placeholder="Arytenoids"></textarea>
      </div>
      <div class="form-group">
        <label for="pyriformSinus" class="label">Pyriform Sinus:</label>
        <textarea id="pyriformSinus" v-model="pyriformSinus" class="input-textarea" rows="1" placeholder="Pyriform Sinus"></textarea>
      </div>
      <div class="form-group">
        <label for="subglottis" class="label">Subglottis:</label>
        <textarea id="subglottis" v-model="subglottis" class="input-textarea" rows="1" placeholder="Subglottis"></textarea>
      </div>
      <div class="form-group">
        <label for="others" class="label">Others:</label>
        <textarea id="others" v-model="others" class="input-textarea" rows="2" placeholder="Others"></textarea>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LaryngopharynxTab",
    data() {
      return {
        postTongue: "",
        vallecula: "",
        epiglottis: "",
        aeFold: "",
        ventricularBand: "",
        vocalCord: "",
        thirdTongue: "",
        arytenoids: "",
        pyriformSinus: "",
        subglottis: "",
        others: ""
      };
    }
  };
  </script>
  
  <style scoped>
  .laryngopharynx-tab {
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
  