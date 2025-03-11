<template>
  <div class="history-tab">
    <h3 class="section-title">HISTORY TAB</h3>
    <hr class="section-divider" />

    <div class="form-group">
      <div class="subsection">
        <label for="vyadhi-vruthanta" class="label">Vyadhi Vruthanta (History):</label>
        <textarea id="vyadhi-vruthanta" v-model="vyadhiVruthanta" class="input-textarea" @input="emitData" placeholder=""></textarea>
      </div>
    </div>

    <div class="form-group">
      <div class="subsection">
        <label for="poorva-vyadhi-vruthanta" class="label">Poorva Vyadhi Vruthanta (History of Past Illness):</label>
        <textarea id="poorva-vyadhi-vruthanta" v-model="poorvaVyadhiVruthanta" class="input-textarea" @input="emitData" placeholder=""></textarea>
      </div>
    </div>

    <div class="form-group">
      <div class="subsection">
        <label for="kula-vruthanta" class="label">Kula Vruthanta (Family History):</label>
        <textarea id="kula-vruthanta" v-model="kulaVruthanta" class="input-textarea" @input="emitData" placeholder=""></textarea>
      </div>
    </div>

    <div class="form-group">
      <div class="subsection">
        <label for="chikitsa-vruthanta" class="label">Chikitsa Vruthanta (Drug History):</label>
        <textarea id="chikitsa-vruthanta" v-model="chikitsaVruthanta" class="input-textarea" @input="emitData" placeholder=""></textarea>
      </div>
    </div>

    <div class="form-group">
      <div class="subsection">
        <label for="arthava-vruthanta" class="label">Arthava Vruthanta (Menstrual History):</label>
        <textarea id="arthava-vruthanta" v-model="arthavaVruthanta" class="input-textarea" @input="emitData" placeholder=""></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoryTab',
  data() {
    return {
      vyadhiVruthanta: '',
      poorvaVyadhiVruthanta: '',
      kulaVruthanta: '',
      chikitsaVruthanta: '',
      arthavaVruthanta: ''
    };
  },
  methods: {
    emitData() {
      this.$emit('update:historyTab', {
        vyadhiVruthanta: this.vyadhiVruthanta,
        poorvaVyadhiVruthanta: this.poorvaVyadhiVruthanta,
        kulaVruthanta: this.kulaVruthanta,
        chikitsaVruthanta: this.chikitsaVruthanta,
        arthavaVruthanta: this.arthavaVruthanta
      });
    }
  }
};
</script>

  
  <style scoped>
  .history-tab {
    background-color: #d3d3d3; /* Light grey background */
    padding: 10px;
    width: 100%; /* Full width of the parent container */
    box-sizing: border-box; /* Include padding in the element's total width */
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
  
  .form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 20px;
  }
  
  .subsection {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .label {
    color: #000000; /* Black text color */
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 5px;
    margin-left: 40px;
  }
  
  .input-textarea {
    width: 90%;
    padding: 10px;
    font-size: 14px;
    margin-left: 40px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff; /* White background for text areas */
    resize: vertical; /* Allow vertical resizing only */
  }
  </style>
  