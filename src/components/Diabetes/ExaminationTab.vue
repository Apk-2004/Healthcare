<template>
  <div class="examination-tab">
    <h2 class="main-title">EXAMINATION TAB</h2>
    <div class="tabs">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab', { active: activeTab === index }]"
        @click="activeTab = index"
      >
        {{ tab.charAt(0).toUpperCase() + tab.slice(1).toLowerCase() }}
      </div>
    </div>

    <div class="tab-content">
      <KnownIllness v-show="activeTab === 0" @update:knownIllnesses="updateKnownIllnesses" />
      <SocialHistory v-show="activeTab === 1" @update:socialHistory="updateSocialHistory" />
      <FamilyHistory v-show="activeTab === 2" @update:familyHistory="updateFamilyHistory" />
      <DiabeticEvaluationTab v-show="activeTab === 3" @update-diabetes-data="updateDiabetesData" />
      <GenitoUrinary v-show="activeTab === 4" @update-genito-urinary="updateGenitoUrinary" />
      <TreatmentHistoryTab v-show="activeTab === 5" @update-treatment-history-data="updateTreatmentHistoryData" />
      <PastHistory v-show="activeTab === 6" @update:pastHistory="updatePastHistory" />
      <HistoryofPresentIllness v-show="activeTab === 7" @update:historyOfPresentIllness="updateHistoryOfPresentIllness" />
      <!-- Add other components here similarly -->
    </div>
    <button class="submit-button" @click="submitForm">Submit</button>
  </div>
</template>

<script>
import KnownIllness from "./KnownIllness.vue";
import SocialHistory from "./SocialHistory.vue";
import FamilyHistory from "./FamilyHistory.vue";
import DiabeticEvaluationTab from "./DiabeticEvaluation.vue";
import GenitoUrinary from "./GenitoUrinary.vue";
import TreatmentHistoryTab from "./TreatmentHistory.vue";
import PastHistory from "./PastHistory.vue";
import HistoryofPresentIllness from "./HistoryofPresentIllness.vue";

export default {
  components: {
    KnownIllness,
    SocialHistory,
    FamilyHistory,
    DiabeticEvaluationTab,
    GenitoUrinary,
    TreatmentHistoryTab,
    PastHistory,
    HistoryofPresentIllness,
  },
  data() {
    return {
      activeTab: 0,
      tabs: [
        "Known Illness",
        "Social History",
        "Family History",
        "Diabetic Evaluation",
        "Genito-Urinary",
        "Treatment History",
        "Past History",
        "History of Present Illness",
      ],
      formData: {
        
        knownIllnesses: [],
        socialHistory: [],
        familyHistory: [], 
        diabetesData: {},
        genitoUrinary: {},
        treatmentHistory: {},
        pastHistory: {},
        historyOfPresentIllness: {},
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch("https://dummyapi.io/endpoint", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.formData),
        });

        if (response.ok) {
          const result = await response.json();
          console.log("Form Data Submitted:", result);
          alert("Form data has been submitted successfully!");

          // Optionally, reset the form after submission
          this.resetForm();
        } else {
          console.error("Failed to submit form data:", response.statusText);
          alert("Failed to submit form data. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form data:", error);
        alert("Error submitting form data. Please try again.");
      }
    },
    updateKnownIllnesses(data) {
      this.formData.knownIllnesses = data;
    },
    updateSocialHistory(data) {
      this.formData.socialHistory = data;
    },
    updateFamilyHistory(data) {
      this.formData.familyHistory = data;
    },
    updateDiabetesData(data) {
      this.formData.diabetesData = data;
    },
    updateGenitoUrinary(data) {
      this.formData.genitoUrinary = data;
    },
    updateTreatmentHistoryData(data) {
      this.formData.treatmentHistory = data;
    },
    updatePastHistory(data) {
      this.formData.pastHistory = data;
    },
    updateHistoryOfPresentIllness(data) {
      this.formData.historyOfPresentIllness = data;
    },
    resetForm() {
      this.formData = {
        
        knownIllnesses: [],
        socialHistory: [],
        familyHistory: [], 
        diabetesData: {},
        genitoUrinary: {},
        treatmentHistory: {},
        pastHistory: {},
        historyOfPresentIllness: {},
      };
      this.activeTab = 0; // Reset to the first tab
    }
  }
};
</script>

<style scoped>
.examination-tab {
  background-color: #4e8c80;
  padding: 50px;
  width: 100vw; /* Full viewport width */
  min-height: 100vh; /* Full viewport height */
  height: auto;
  box-sizing: border-box;
  overflow-x: hidden; /* Prevent horizontal overflow */
  margin-left: calc(-50vw + 50%); /* Center the element */
  padding-left: calc(50vw - 50%); /* Compensate for negative margin */
  padding-right: calc(50vw - 50%); /* Compensate for negative margin */
}

.main-title {
  color: rgb(250, 250, 250);
  font-size: 24px;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.tabs {
  display: flex;
  margin-bottom: 20px;
  border-bottom: 2px solid white;
  background-color: #ffffff;
}

.tab {
  padding: 10px 20px;
  cursor: pointer;
  color: rgb(0, 0, 0);
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s;
  background-color: #ffffff;
  font-family: "Courier New", Courier, monospace;
  text-transform: uppercase;
  font: bold;
}

.tab:hover {
  border-bottom: 2px solid #4e8c80;
}

.tab.active {
  border-bottom: 2px solid rgb(255, 255, 255);
}

.tab-content {
  background-color: #4e8c80;
  padding: 30px;
  width: 100%;
  box-sizing: border-box;
}

.submit-button {
  align-self: flex-end;
  background-color: #303231; /* Dark grey background color */
  color: #ffffff;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .form-group.row {
    flex-direction: column;
  }

  .form-item {
    width: 100%;
  }

  .submit-button {
    width: 100%;
    text-align: center;
  }
}
</style>
