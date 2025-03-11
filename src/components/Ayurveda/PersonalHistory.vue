<template>
  <div class="personal-history-tab">
    <h3 class="section-title">Personal History</h3>
    <hr class="section-divider" />

    <div class="form-row">
      <div class="form-group">
        <label for="diet" class="label">Diet:</label>
        <textarea id="diet" v-model="diet" class="input-textarea" placeholder="Diet" @input="emitData"></textarea>
      </div>
      <div class="form-group">
        <label for="habits-addiction" class="label">Habits/Addiction:</label>
        <textarea id="habits-addiction" v-model="habitsAddiction" class="input-textarea" placeholder="Habits/Addiction" @input="emitData"></textarea>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label for="appetite" class="label">Appetite:</label>
        <textarea id="appetite" v-model="appetite" class="input-textarea" placeholder="Appetite" @input="emitData"></textarea>
      </div>
      <div class="form-group">
        <label for="hypersensitivity" class="label">Hypersensitivity:</label>
        <textarea id="hypersensitivity" v-model="hypersensitivity" class="input-textarea" placeholder="Hypersensitivity" @input="emitData"></textarea>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label for="bowel" class="label">Bowel:</label>
        <textarea id="bowel" v-model="bowel" class="input-textarea" placeholder="Bowel" @input="emitData"></textarea>
      </div>
      <div class="form-group">
        <label for="micturition" class="label">Micturition:</label>
        <textarea id="micturition" v-model="micturition" class="input-textarea" placeholder="Micturition" @input="emitData"></textarea>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group full-width">
        <label for="sleep" class="label sleep-label">Sleep:</label>
        <textarea id="sleep" v-model="sleep" class="input-textarea sleep-textarea" placeholder="Sleep" @input="emitData"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalHistory',
  data() {
    return {
      diet: '',
      habitsAddiction: '',
      appetite: '',
      hypersensitivity: '',
      bowel: '',
      micturition: '',
      sleep: ''
    };
  },
  methods: {
    emitData() {
      this.$emit('update:personalHistory', this.getData());
    },
    getData() {
      return {
        diet: this.diet,
        habitsAddiction: this.habitsAddiction,
        appetite: this.appetite,
        hypersensitivity: this.hypersensitivity,
        bowel: this.bowel,
        micturition: this.micturition,
        sleep: this.sleep
      };
    }
  }
};
</script>

  <style scoped>
  .personal-history-tab {
    background-color: #d3d3d3; /* Light grey background */
    padding: 10px;
    width: 100%; /* Full width of the parent container */
    box-sizing: border-box; /* Include padding in the element's total width */
    min-height: 200hv;
  }
  
  .section-title {
    color: #000000; /* Black text color */
    background-color: #d3d3d3; /* Same as background to blend */
    font-weight: bold;
    text-align: left; /* Align title to the left */
    margin-bottom: 10px;
    padding: 10px 0; /* Add padding for better appearance */
    font-size: 20px;
  }
  
  .section-divider {
    width: 100%;
    border-top: 1px solid #000;
    margin-bottom: 20px; /* Space below the divider */
  }
  
  .form-row {
    display: flex;
    justify-content: space-between; /* Space out items horizontally */
    flex-wrap: wrap; /* Wrap to new lines if necessary */
    margin-bottom: 20px;
  }
  
  .form-group {
    flex: 1;
    margin-right: 10px; /* Space between text areas */
    display: flex;
    flex-direction: column;
  }
  
  .form-group:last-child {
    margin-right: 0; /* Remove margin from the last item in the row */
  }
  
  .full-width {
    flex: none;
  }
  
  .label {
    color: #000000; /* Black text color */
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .input-textarea {
    width: 80%;
    padding: 10px;
    margin-left: 40px;
    margin-right: 40px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 2px;
    background-color: #fff; /* White background for text areas */
    resize: vertical; /* Allow vertical resizing only */
    font-family: 'Courier New', Courier, monospace; /* Font family for placeholder */
  }
  
  .sleep-textarea {
    height: 50px; /* Smaller height for the Sleep textarea */
    width: 480px;
  }
  
  .sleep-label {
    margin-left: 0; /* Align label to start from the same position as input */
  }
  </style>
  