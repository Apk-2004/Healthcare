<template>
  <div class="diabetes-evaluation-tab">
    <h3 class="subsection-title">Diabetes Evaluation</h3>
    <hr class="divider" />

    <div class="entry-box">
      <div class="entry-row">
        <div class="entry">
          <label for="type">Type:</label>
          <select id="type" v-model="diabetesData.type" @change="emitData">
            <option value="">Select Type</option>
            <option value="Type1">Type 1</option>
            <option value="Type2">Type 2</option>
            <option value="Prediabetes">Prediabetes</option>
            <option value="Gestational">Gestational</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>
        <div class="entry">
          <label for="duration">Duration:</label>
          <textarea id="duration" v-model="diabetesData.duration" placeholder="Duration" rows="1" @input="emitData"></textarea>
        </div>
        <div class="entry">
          <label for="fasting">F:</label>
          <input id="fasting" type="text" v-model="diabetesData.fasting" placeholder="Fasting" @input="emitData">
        </div>
        <div class="entry">
          <label for="pp">PP:</label>
          <input id="pp" type="text" v-model="diabetesData.pp" placeholder="PP" @input="emitData">
        </div>
        <div class="entry">
          <label for="hba1c">HbA1C:</label>
          <input id="hba1c" type="text" v-model="diabetesData.hba1c" placeholder="HbA1C" @input="emitData">
        </div>
        <div class="entry">
          <label for="urine-albumin">Urine Albumin:</label>
          <input id="urine-albumin" type="text" v-model="diabetesData.urineAlbumin" placeholder="Urine Albumin" @input="emitData">
        </div>
      </div>

      <div class="entry-row">
        <div class="entry" style="flex: 0 0 16%;">
          <label for="blood-urea">Blood Urea:</label>
          <input id="blood-urea" type="text" v-model="diabetesData.bloodUrea" placeholder="Blood Urea" @input="emitData">
        </div>
        <div class="entry" style="flex: 2;">
          <label>Treatment:</label>
          <div class="radio-options">
            <label>
              <input type="radio" v-model="diabetesData.treatment" value="diet" @change="emitData">
              Diet
            </label>
            <label>
              <input type="radio" v-model="diabetesData.treatment" value="oral" @change="emitData">
              Oral
            </label>
            <label>
              <input type="radio" v-model="diabetesData.treatment" value="insulin" @change="emitData">
              Insulin
            </label>
          </div>
        </div>
        <div class="entry" v-if="showTreatmentDetails" style="flex: 3;">
          <label for="treatmentDetails">Treatment Details:</label>
          <textarea id="treatmentDetails" v-model="diabetesData.treatmentDetails" placeholder="Treatment Details" rows="1" @input="emitData"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      diabetesData: {
        type: '',
        duration: '',
        fasting: '',
        pp: '',
        hba1c: '',
        urineAlbumin: '',
        bloodUrea: '',
        treatment: '',
        treatmentDetails: ''
      }
    };
  },
  computed: {
    showTreatmentDetails() {
      return this.diabetesData.treatment === 'diet' || this.diabetesData.treatment === 'oral' || this.diabetesData.treatment === 'insulin';
    }
  },
  methods: {
    emitData() {
      this.$emit('update-diabetes-data', this.diabetesData);
    }
  }
};
</script>

<style scoped>
.diabetes-evaluation-tab {
  background-color: #4e8c80;
  padding: 5px;
  width: 100%;
  box-sizing: border-box;
}

.subsection-title {
  color: #2e2e2e;
  font-weight: bold;
  text-align: left;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.divider {
  border-top: 1px solid white;
  width: 100%;
  margin: 10px 0;
}

.entry-box {
  background-color: #e7efff;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.entry-row {
  display: flex;
  flex-wrap: wrap; /* Wrap items to next line if necessary */
  justify-content: space-between;
  align-items: flex-start; /* Align items to the top */
  margin-bottom: 20px;
}

.entry {
  flex: 1;
  margin-right: 10px; /* Adjust spacing between entries */
}

label {
  color: rgb(0, 0, 0);
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

textarea, input[type="text"], select {
  width: 100%;
  padding: 10px;
  background-color: white;
  border: 1px solid #2e2e2e;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 5px; /* Add margin to separate inputs */
  font-family: 'Courier New', Courier, monospace;
}

.radio-options {
  display: flex; /* Display radio buttons horizontally */
  flex-wrap: wrap; /* Allow wrapping if necessary */
  margin-top: 5px;
}

.radio-options label {
  margin-right: 25px; /* Adjust spacing between radio buttons */
  color: rgb(0, 0, 0);
  font-weight: bold;
  margin-left: 30%;
}

.treatment-details {
  margin-top: 10px;
  margin-left: 20;
}

.treatment-details textarea {
  width: 100%;
  margin-top: 5px;
}

@media (max-width: 768px) {
  .entry-row {
    flex-direction: column;
  }
}
</style>
