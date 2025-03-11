<template>
  <div class="cardiology-tab">
    <div class="tab-heading">
      <h2 class="tab-title">CARDIOLOGY TAB</h2>
    </div>

    <!-- Cardiology Form -->
    <div class="cardiology-form">
      <!-- Medical History Section -->
      <div class="section">
        <h3 class="sub-section-title">Medical History</h3>
        <hr class="section-divider" />
        <div class="checkbox-group">
          <label
            ><input type="checkbox" v-model="medicalHistory.hypertension" />
            Hypertension</label
          >
          <label
            ><input type="checkbox" v-model="medicalHistory.diabetes" />
            Diabetes</label
          >
          <label
            ><input type="checkbox" v-model="medicalHistory.raCopd" />
            RA/COPD</label
          >
          <label
            ><input type="checkbox" v-model="medicalHistory.cva" /> CVA</label
          >
          <label
            ><input type="checkbox" v-model="medicalHistory.akiCkd" />
            AKI/CKD</label
          >
          <label
            >Others: <input type="text" v-model="medicalHistory.others"
          /></label>
        </div>
      </div>

      <!-- Cardiac History Section -->
      <div class="section">
        <h3 class="sub-section-title">Cardiac History</h3>
        <hr class="section-divider" />
        <div class="checkbox-group">
          <label
            ><input
              type="checkbox"
              v-model="cardiacHistory.ischemicHeartDisease"
            />
            Ischemic Heart Disease</label
          >
          <label
            ><input
              type="checkbox"
              v-model="cardiacHistory.valvularHeartDisease"
            />
            Valvular Heart Disease</label
          >
          <label
            >Others: <input type="text" v-model="cardiacHistory.others"
          /></label>
        </div>
      </div>

      <!-- Procedure/Surgery Done Section -->
      <div class="section">
        <h3 class="sub-section-title">Procedure/Surgery Done</h3>
        <hr class="section-divider" />
        <div class="checkbox-group">
          <label><input type="checkbox" v-model="procedures.cag" /> CAG</label>
          <label
            ><input type="checkbox" v-model="procedures.ptca" /> PTCA</label
          >
          <label><input type="checkbox" v-model="procedures.pmr" /> PMR</label>
          <label
            ><input type="checkbox" v-model="procedures.cabg" /> CABG</label
          >
          <label
            ><input type="checkbox" v-model="procedures.stent" /> Stent</label
          >
          <label
            >Others: <input type="text" v-model="procedures.others"
          /></label>
        </div>
      </div>

      <!-- Family History Section -->
      <div class="section">
        <h3 class="sub-section-title">Family History</h3>
        <hr class="section-divider" />
        <div class="checkbox-group">
          <label><input type="checkbox" v-model="familyHistory.ht" /> HT</label>
          <label><input type="checkbox" v-model="familyHistory.dm" /> DM</label>
          <label
            ><input type="checkbox" v-model="familyHistory.miCva" />
            MI/CVA</label
          >
          <label
            >Others: <input type="text" v-model="familyHistory.others"
          /></label>
        </div>
      </div>

      <!-- Medications Section -->
      <div class="section">
        <h3 class="sub-section-title">Medications</h3>
        <hr class="section-divider" />
        <textarea
          v-model="medications"
          placeholder="List any medications here"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardiologyTab",
  data() {
    return {
      medicalHistory: {
        hypertension: false,
        diabetes: false,
        raCopd: false,
        cva: false,
        akiCkd: false,
        others: "",
      },
      cardiacHistory: {
        ischemicHeartDisease: false,
        valvularHeartDisease: false,
        others: "",
      },
      procedures: {
        cag: false,
        ptca: false,
        pmr: false,
        cabg: false,
        stent: false,
        others: "",
      },
      familyHistory: {
        ht: false,
        dm: false,
        miCva: false,
        others: "",
      },
      medications: "",
    };
  },
};
</script>

<style scoped>
.cardiology-tab {
  background-color: #d3d3d3; /* Light grey background */
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tab-heading {
  background-color: #2ec4b6; /* Header background color */
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
  width: 100%;
  text-align: center;
}

.tab-title {
  color: #000;
  font-size: 20px;
  font-weight: bold;
}

.cardiology-form {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section {
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section h4 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
}

.sub-section-title {
  color: #222;
  text-align: left;
  margin-bottom: 10px;
  width: 100%;
}

.section-divider {
  width: 100%;
  border-top: 1px solid #ccc;
  margin: 10px 0;
}

.checkbox-group {
  display: flex;
  flex-direction: column; /* Ensures all checkboxes are one below the other */
  gap: 10px; /* Space between items */
  width: 100%; /* Ensure full width to center align properly */
  align-items: flex-start; /* Align items to the start for label alignment */
}

.checkbox-group label {
  display: flex;
  flex-direction: row; /* Ensure labels and inputs are in a row */
  align-items: center; /* Center align the items */
  width: 100%;
  justify-content: flex-start; /* Ensure labels are aligned to the start */
}

.checkbox-group input[type="text"] {
  width: calc(100% - 20px); /* Adjust width as needed */
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: 10px; /* Space between label and input */
}

textarea {
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  margin-top: 10px; /* Space between sections */
}
</style>
