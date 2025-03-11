<template>
  <div class="past-history-tab">
    <div class="section-header">
      <h3 class="subsection-title">Past History</h3>
    </div>
    <hr class="divider" />
    <div class="illness-container">
      <div class="entry-row">
        <div class="entry">
          <div class="radio-options">
            <label>Hypertension:
              <input type="radio" v-model="pastHistoryData.hypertension" value="yes"> YES
              <input type="radio" v-model="pastHistoryData.hypertension" value="no"> NO
            </label>
          </div>
        </div>
        <div class="entry">
          <div class="radio-options">
            <label>Dialysis:
              <input type="radio" v-model="pastHistoryData.dialysis" value="yes"> YES
              <input type="radio" v-model="pastHistoryData.dialysis" value="no"> NO
            </label>
          </div>
        </div>
        <div class="entry">
          <div class="radio-options">
            <label>Increased Lipids:
              <input type="radio" v-model="pastHistoryData.increasedLipids" value="yes"> YES
              <input type="radio" v-model="pastHistoryData.increasedLipids" value="no"> NO
            </label>
          </div>
        </div>
      </div>

      <div class="entry-row">
        <div class="entry">
          <label for="cva">CVA/TIA</label>
          <input type="text" id="cva" v-model="pastHistoryData.cva" placeholder="CVA/TIA">
        </div>
        <div class="entry">
          <label for="ihd">IHD</label>
          <input type="text" id="ihd" v-model="pastHistoryData.ihd" placeholder="IHD">
        </div>
        <div class="entry">
          <label for="mi">MI</label>
          <input type="text" id="mi" v-model="pastHistoryData.mi" placeholder="MI">
        </div>
        <div class="entry">
          <label for="chf">CHF</label>
          <input type="text" id="chf" v-model="pastHistoryData.chf" placeholder="CHF">
        </div>
        <div class="entry">
          <label for="cabg">CABG</label>
          <input type="text" id="cabg" v-model="pastHistoryData.cabg" placeholder="CABG">
        </div>
        <div class="entry">
          <label for="pace-maker">Pace Maker</label>
          <input type="text" id="pace-maker" v-model="pastHistoryData.paceMaker" placeholder="Pace Maker">
        </div>
      </div>

      <div class="entry-row">
        <div class="entry">
          <label for="foot-infections">Foot Infections/Surgeries</label>
          <input type="text" id="foot-infections" v-model="pastHistoryData.footInfections" placeholder="Foot Infections/Surgeries (Amputation if any)">
        </div>
        <div class="entry">
          <label for="laser-therapy">Laser Therapy</label>
          <input type="text" id="laser-therapy" v-model="pastHistoryData.laserTherapy" placeholder="Laser Therapy">
        </div>
        <div class="entry">
          <label for="cataract-surgery">Cataract Surgery</label>
          <input type="text" id="cataract-surgery" v-model="pastHistoryData.cataractSurgery" placeholder="Cataract Surgery">
        </div>
        <div class="entry">
          <label for="glaucoma">Glaucoma</label>
          <input type="text" id="glaucoma" v-model="pastHistoryData.glaucoma" placeholder="Glaucoma">
        </div>
        <div class="entry">
          <label for="renal-disease">Renal Disease</label>
          <input type="text" id="renal-disease" v-model="pastHistoryData.renalDisease" placeholder="Renal Disease">
        </div>
        <div class="entry">
          <label for="calculus">Calculus</label>
          <input type="text" id="calculus" v-model="pastHistoryData.calculus" placeholder="Calculus">
        </div>
      </div>

      <div class="entry-row">
        <div class="entry">
          <label for="duration">Duration</label>
          <input type="text" id="duration" v-model="pastHistoryData.duration" placeholder="Duration">
        </div>
        <div class="entry">
          <label for="transplant">Transplant</label>
          <input type="text" id="transplant" v-model="pastHistoryData.transplant" placeholder="Transplant">
        </div>
        <div class="entry">
          <label for="pcod">PCOD</label>
          <input type="text" id="pcod" v-model="pastHistoryData.pcod" placeholder="PCOD">
        </div>
        <div class="entry">
          <label for="apd">APD</label>
          <input type="text" id="apd" v-model="pastHistoryData.apd" placeholder="APD">
        </div>
        <div class="entry">
          <label for="asthma">Asthma</label>
          <input type="text" id="asthma" v-model="pastHistoryData.asthma" placeholder="Asthma">
        </div>
        <div class="entry-spacer"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pastHistoryData: {
        hypertension: '',
        dialysis: '',
        increasedLipids: '',
        cva: '',
        ihd: '',
        mi: '',
        chf: '',
        cabg: '',
        paceMaker: '',
        footInfections: '',
        laserTherapy: '',
        cataractSurgery: '',
        glaucoma: '',
        renalDisease: '',
        calculus: '',
        duration: '',
        transplant: '',
        pcod: '',
        apd: '',
        asthma: ''
      }
    };
  },
  watch: {
    pastHistoryData: {
      handler(newData) {
        this.$emit('update:pastHistory', newData);
      },
      deep: true
    }
  }
};
</script>
  <style scoped>
  .past-history-tab {
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
  
  .entry-row {
    display: flex;
    flex-wrap: wrap; /* Wrap items to next line if necessary */
    justify-content: space-between;
    align-items: flex-start; /* Align items to the top */
    margin-bottom: 20px;
  }
  
  .illness-container{
    background-color: #e7feff;
    padding: 20px;
   border-radius: 8px;
  }
  .entry {
    flex: 1;
    margin-right: 15px; /* Adjust spacing between entries */
    margin-bottom: 40px;
  }
  
  .entry-spacer {
    flex: 1; /* Spacer to create space for one text box */
  }
  
  label {
    color: rgb(0, 0, 0);
    font-weight: bold;
    display: block;
    margin-bottom: 10px;
  }
  
  textarea, input[type="text"], select {
    width: 100%;
    padding: 10px;
    background-color: white;
    border: 1px solid #2e2e2e;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 15px; /* Add margin to separate inputs */
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
    margin-left: 10%;
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
  