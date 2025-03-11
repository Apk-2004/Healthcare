<template>
  <div class="diagnosis-tab">
    <h2 class="section-title">Diagnosis Tab</h2>

    <!-- Sub-tabs for General and Fracture Diagnosis -->
    <div class="sub-tabs">
      <button
        class="sub-tab-button"
        :class="{ active: activeSubTab === 'general' }"
        @click="activeSubTab = 'general'"
      >GENERAL DIAGNOSIS</button>
      <button
        class="sub-tab-button"
        :class="{ active: activeSubTab === 'fracture' }"
        @click="activeSubTab = 'fracture'"
      >FRACTURE DIAGNOSIS</button>
    </div>

    <!-- Content based on active sub-tab -->
    <div v-if="activeSubTab === 'general'">
      <GeneralDiagnosisTab 
        v-model="generalDiagnosis"
        ref="generalDiagnosisTab" 
      />
    </div>

    <div v-if="activeSubTab === 'fracture'">
      <FractureDiagnosisTab 
        v-model="fractureDiagnosis"
      />
    </div>
    
    <!-- Submit Button -->
    <button class="submit-button" @click="submitDiagnosis">Submit</button>
  </div>
</template>

<script>
import GeneralDiagnosisTab from '@/components/ortho/GeneralDiagnosisTab.vue';
import FractureDiagnosisTab from '@/components/ortho/FractureDiagnosisTab.vue';

export default {
  name: 'DiagnosisTab',
  components: {
    GeneralDiagnosisTab,
    FractureDiagnosisTab
  },
  data() {
  return {
    activeSubTab: 'general', // Tracks the currently active sub-tab
    generalDiagnosis: '', // To store the data from the GeneralDiagnosisTab

    // Fracture diagnosis object structure
    fractureDiagnosis: {
      bone: '', // Store the selected bone
      skeletalMajor: '', // Store the skeletal major area
      anatomicalArea: '', // Store the anatomical area
      subAnatomicalArea: '', // Store the sub-anatomical area
      diagnosis: '', // Store the diagnosis information
    },
    
    // Message for the form submission status
    submissionMessage: '',
    submissionStatus: '', // Tracks success/failure of submission
  };
},

  methods: {

    handleFractureDiagnosisUpdate(fractureDiagnosisData) {
    this.fractureDiagnosis = {
      ...this.fractureDiagnosis,
      tableData: fractureDiagnosisData
    };
  },
    async submitDiagnosis() {
      // Validate General Diagnosis
      if (this.activeSubTab === 'general' && !this.generalDiagnosis) {
        this.$refs.generalDiagnosisTab.showError = true; // Show error message in GeneralDiagnosisTab
        return;
      }

      // Validate Fracture Diagnosis
      if (
        this.activeSubTab === 'fracture' &&
        (!this.fractureDiagnosis.bone || !this.fractureDiagnosis.location || !this.fractureDiagnosis.severity)
      ) {
        this.submissionMessage = 'Fracture diagnosis is incomplete. Please fill out all required fields.';
        this.submissionStatus = 'error';
        return;
      }

      const dataToSubmit = {
        generalDiagnosis: this.generalDiagnosis,
        fractureDiagnosis: this.fractureDiagnosis
      };

      try {
        const response = await fetch('https://your-api-endpoint.com/submit-diagnosis', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataToSubmit)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Submitted Data:', result);

        this.submissionMessage = 'Diagnosis submitted successfully!';
        this.submissionStatus = 'success';
      } catch (error) {
        console.error('Error submitting diagnosis:', error);

        this.submissionMessage = 'Failed to submit diagnosis. Please try again.';
        this.submissionStatus = 'error';
      } finally {
        setTimeout(() => {
          this.submissionMessage = '';
          this.submissionStatus = '';
        }, 5000); // 5 seconds
      }
    }
  }
};
</script>


<style scoped>
.diagnosis-tab {
  padding: 40px;
  background-color: #d3d3d3;
  height: auto;
  min-height: 100vh; 
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
}

.section-title {
  color: #000000;
  background-color: #2ec4b6;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  padding: 10px 20px;
  border-radius: 4px;
  text-transform: uppercase;
}

.sub-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.sub-tab-button {
  background-color: transparent;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
  font-weight: bold;
  font-size: 14px;
  margin: 0 10px;
  color: #011a17;
  border-bottom: 2px solid transparent;
  transition: border-bottom-color 0.3s;
}

.sub-tab-button.active {
  border-bottom-color: #2ec4b6;
}

.submit-button {
  align-self: flex-end;
  background-color: #2ec4b6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  text-transform: uppercase;
}

.submit-button:hover {
  background-color: #29b3a5;
}

/* Error message styling */
.error-message {
  color: red;
  font-weight: bold;
  margin-top: 10px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .diagnosis-tab {
    padding: 20px;
  }

  .sub-tabs {
    flex-direction: column;
    align-items: center;
  }

  .sub-tab-button {
    margin: 5px 0;
  }

  .submit-button {
    width: 100%;
    align-self: center;
  }
}
</style>
