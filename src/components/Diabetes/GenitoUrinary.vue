<template>
  <div class="genito-urinary-tab">
    <div class="section-header">
      <h3 class="subsection-title">Genito-Urinary</h3>
    </div>
    <hr class="divider" />

    <div class="illness-container">
      <!-- Input fields for genito-urinary data -->
      <div class="illness-row">
        <div class="illness-name">Urine Output:</div>
        <div class="illness-input" row='1'>
          <input class="white-bg" type="text" v-model="genitoUrinaryData.urineOutput" placeholder="Urine Output">
        </div>
      </div>

      <div class="illness-row">
        <div class="illness-name">Swelling of legs:</div>
        <div class="illness-radio">
          <label><input type="radio" v-model="genitoUrinaryData.swellingOfLegs" value="yes"> YES</label>
          <label><input type="radio" v-model="genitoUrinaryData.swellingOfLegs" value="no"> NO</label>
          <div v-if="genitoUrinaryData.swellingOfLegs === 'yes'" class="illness-details">
            <input class="white-bg" type="text" v-model="genitoUrinaryData.swellingDetails" placeholder="Details">
          </div>
        </div>
      </div>

      <div class="illness-row">
        <div class="illness-name">Dysuria:</div>
        <div class="illness-radio">
          <label><input type="radio" v-model="genitoUrinaryData.dysuria" value="yes"> YES</label>
          <label><input type="radio" v-model="genitoUrinaryData.dysuria" value="no"> NO</label>
          <div v-if="genitoUrinaryData.dysuria === 'yes'" class="illness-details">
            <input class="white-bg" type="text" v-model="genitoUrinaryData.dysuriaDetails" placeholder="Details">
          </div>
        </div>
      </div>

      <div class="illness-row">
        <div class="illness-name">Urinary Infections:</div>
        <div class="illness-radio">
          <label><input type="radio" v-model="genitoUrinaryData.urinaryInfections" value="yes"> YES</label>
          <label><input type="radio" v-model="genitoUrinaryData.urinaryInfections" value="no"> NO</label>
          <div v-if="genitoUrinaryData.urinaryInfections === 'yes'" class="illness-details">
            <input class="white-bg" type="text" v-model="genitoUrinaryData.infectionsDetails" placeholder="Details">
          </div>
        </div>
      </div>

      <div class="illness-row">
        <div class="illness-name">Male Impotence or Related Symptoms:</div>
        <div class="illness-radio">
          <label><input type="radio" v-model="genitoUrinaryData.maleImpotence" value="yes"> YES</label>
          <label><input type="radio" v-model="genitoUrinaryData.maleImpotence" value="no"> NO</label>
          <div v-if="genitoUrinaryData.maleImpotence === 'yes'" class="illness-details">
            <div class="checkbox-row">
              <label><input type="checkbox" id="ulcers" v-model="genitoUrinaryData.relatedSymptoms.ulcers"> Ulcers</label>
              <label><input type="checkbox" id="wdpv" v-model="genitoUrinaryData.relatedSymptoms.wdpv"> WDPV</label>
              <label><input type="checkbox" id="pruritus" v-model="genitoUrinaryData.relatedSymptoms.pruritus"> Pruritus</label>
              <label><input type="checkbox" id="others" v-model="genitoUrinaryData.relatedSymptoms.others"> Others</label>
              <div v-if="genitoUrinaryData.relatedSymptoms.others" class="illness-details">
                <input class="white-bg" type="text" v-model="genitoUrinaryData.relatedSymptoms.otherDetails" placeholder="Details">
              </div>
            </div>
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
      genitoUrinaryData: {
        urineOutput: '',
        swellingOfLegs: '',
        swellingDetails: '',
        dysuria: '',
        dysuriaDetails: '',
        urinaryInfections: '',
        infectionsDetails: '',
        maleImpotence: '',
        relatedSymptoms: {
          ulcers: false,
          wdpv: false,
          pruritus: false,
          others: false,
          otherDetails: ''
        }
      }
    };
  },
  methods: {
    emitData() {
      this.$emit('update-genito-urinary', this.genitoUrinaryData);
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

.illness-container {
  background-color: #e7efff;
  padding: 20px;
  border-radius: 8px;
}

.illness-row {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
}

.illness-name {
  color: rgb(0, 0, 0);
  font-weight: bold;
  font-size: 17px;
  margin-left: 10%;
  width: 400px;
  text-align: left;
}

.illness-input {
  width: 100%;
  margin-right: 11%;
}

.illness-radio {
  display: flex;
  align-items: center;
  width: 50%;
}

.illness-radio label {
  color: rgb(0, 0, 0);
  font-weight: bold;
  margin-right: 10px;
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
  border: 1px solid #ccc;
  border-radius: 4px;
}

.white-bg {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
}

.checkbox-row {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
}

.checkbox-row label {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.checkbox-row input[type="checkbox"] {
  margin-right: 5px;
}
</style>
