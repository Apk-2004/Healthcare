<template>
  <div class="treatment-history-tab">
    <div class="section-header">
      <h3 class="subsection-title">Treatment History</h3>
    </div>
    <hr class="divider" />
    <div class="illness-container">
      <div class="illness-row">
        <div class="illness-name">Type:</div>
        <div class="illness-input">
          <select class="white-bg" v-model="treatmentHistoryData.type" @change="emitData" style="font-family: monospace;">
            <option disabled value="">Type</option>
            <option value="Regular">Regular</option>
            <option value="Irregular">Irregular</option>
            <option value="No Treatment so far">No Treatment so far</option>
          </select>
        </div>
      </div>

      <div class="illness-row">
        <div class="illness-name">Drug taking at Present:</div>
        <div class="illness-radio">
          <label><input type="radio" v-model="treatmentHistoryData.drugTakingPresent" value="yes" @change="emitData"> YES</label>
          <label><input type="radio" v-model="treatmentHistoryData.drugTakingPresent" value="no" @change="emitData"> NO</label>
          <div v-if="treatmentHistoryData.drugTakingPresent === 'yes'" class="illness-details">
            <div class="checkbox-row">
              <label><input type="checkbox" id="insulin" v-model="treatmentHistoryData.presentDrugs.insulin" @change="emitData"> Insulin</label>
              <label><input type="checkbox" id="oha" v-model="treatmentHistoryData.presentDrugs.oha" @change="emitData"> OHA</label>
              <label><input type="checkbox" id="anti-hypertensives" v-model="treatmentHistoryData.presentDrugs.antiHypertensives" @change="emitData"> Anti Hypertensives</label>
              <label><input type="checkbox" id="lipid-lowering-drugs" v-model="treatmentHistoryData.presentDrugs.lipidLoweringDrugs" @change="emitData"> Lipid Lowering Drugs</label>
              <label><input type="checkbox" id="others" v-model="treatmentHistoryData.presentDrugs.others" @change="emitData"> Others</label>
              <div v-if="treatmentHistoryData.presentDrugs.others" class="illness-details">
                <input class="white-bg" type="text" v-model="treatmentHistoryData.presentDrugs.otherDetails" placeholder="Details" @input="emitData">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="illness-row">
        <div class="illness-name">Drugs Discontinued:</div>
        <div class="illness-radio">
          <label><input type="radio" v-model="treatmentHistoryData.drugsDiscontinued" value="yes" @change="emitData"> YES</label>
          <label><input type="radio" v-model="treatmentHistoryData.drugsDiscontinued" value="no" @change="emitData"> NO</label>
          <div v-if="treatmentHistoryData.drugsDiscontinued === 'yes'" class="illness-details">
            <input class="white-bg" type="text" v-model="treatmentHistoryData.howLongDiscontinued" placeholder="How Long" @input="emitData">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      treatmentHistoryData: {
        type: '',
        drugTakingPresent: '',
        presentDrugs: {
          insulin: false,
          oha: false,
          antiHypertensives: false,
          lipidLoweringDrugs: false,
          others: false,
          otherDetails: ''
        },
        drugsDiscontinued: '',
        howLongDiscontinued: ''
      }
    };
  },
  methods: {
    emitData() {
      this.$emit('update-treatment-history-data', this.treatmentHistoryData);
    }
  }
};
</script>

  <style scoped>
  .section-header {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
  }
  
  .subsection-title {
    color: #2e2e2e;
    font-weight: bold;
    text-align: left;
    margin-right: 20px;
    margin-bottom: 0px;
    text-transform: uppercase;
  }
  
  .divider {
    border-top: 1px solid white;
    width: 100%;
    margin: 20px 0px;
  }
  
  .illness-row {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    justify-content: space-between;
  }
  
  .illness-container{
    background-color: #e7feff;
    padding: 20px;
   border-radius: 8px;
  }
  .illness-name {
    color: rgb(0, 0, 0);
    font-weight: bold;
    font-size: 17px;
    margin-left: 10%;
    width: auto;
  }
  
  .illness-input {
    width: 100%;
  }
  
  .illness-radio {
    display: flex;
    align-items: center;
    width: 52%;
  }
  
  .illness-radio label {
    color: rgb(0, 0, 0);
    font-weight: bold;
    margin-right: 20px;
    text-transform: uppercase;
  }
  
  .illness-details {
    margin-left: 20px;
    width: 300px;
  }
  
  .illness-details input {
    width: 100%;
    padding: 10px;
    background-color: white;
    border: 1px solid #2e2e2e;
    border-radius: 4px;
  }
  
  .white-bg {
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
  }
  
  .checkbox-row {
    margin-left: 20%; /* Adjust margin as needed */
    margin-top: 10px;
    width: 40px;
    display: flex;
    flex-direction: column;
  }
  
  .checkbox-row label {
    display: flex;
    align-items: left;
    margin-bottom: 5px;
    white-space: nowrap; /* Prevents labels from wrapping */
  }
  
  .checkbox-row input[type="checkbox"] {
    margin-right: 5px;
  }
  </style>
  