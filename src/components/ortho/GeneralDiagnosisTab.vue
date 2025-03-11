<template>
  <div class="general-diagnosis-tab">
    <label for="general-diagnosis">
      Diagnosis <span class="required">*</span>
    </label>
    <textarea 
      id="general-diagnosis"
      v-model="diagnosis" 
      :class="{ 'error-border': showError }"  
      placeholder="Enter diagnosis here..."
    ></textarea>
    <!-- Error Message -->
    <p v-if="showError" class="error-message">Diagnosis field is required*</p>
  </div>
</template>

<script>
export default {
  name: 'GeneralDiagnosisTab',
  props: {
    value: String // This enables v-model from the parent
  },
  data() {
    return {
      diagnosis: this.value || '', // Sync with parent via v-model
      showError: false // Flag to show/hide error message
    };
  },
  watch: {
    diagnosis(newVal) {
      this.$emit('input', newVal); // Emit the input event for v-model binding
      this.showError = false; // Reset error on input change
    }
  }
};
</script>


<style scoped>
.general-diagnosis-tab {
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  padding: 10px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

.required {
  color: red;
}

textarea {
  width: 70%;
  height: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: #ffffff;
  resize: none;
}

/* Error styling */
.error-border {
  border: 2px solid red; /* Red border for error */
}

.error-message {
  color: red;
  font-weight: bold;
  margin-top: 5px;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  textarea {
    width: 85%; 
    height: 250px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  textarea {
    width: 95%;
    height: 200px;
    font-size: 14px;
  }
}
</style>
