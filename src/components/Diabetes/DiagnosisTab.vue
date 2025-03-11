<template>
  <div class="diagnosis-tab">
    <h2 class="section-title">DIAGNOSIS TAB</h2>

    <div class="form-group">
      <label for="diagnosis" class="label">
        DIAGNOSIS:
        <span class="required-asterisk">*</span>
      </label>
      <textarea
        id="diagnosis"
        v-model="diagnosis"
        :class="{'input-textarea': true, 'input-error': errors.diagnosis}"
        rows="4"
        placeholder="Enter your Diagnosis here..."
      ></textarea>
      <span v-if="errors.diagnosis" class="error-message">Diagnosis is required *</span>
    </div>

    <button class="submit-button" @click="handleSubmit">Submit</button>
  </div>
</template>

<script>
export default {
  name: "DiagnosisTab",
  data() {
    return {
      diagnosis: "",
      errors: {
        diagnosis: false
      }
    };
  },
  methods: {
    validateForm() {
      this.errors.diagnosis = !this.diagnosis.trim();
      return !this.errors.diagnosis;
    },
    async handleSubmit() {
      if (!this.validateForm()) {
        return;
      }

      try {
        const response = await fetch("https://dummyapi.io/endpoint", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ diagnosis: this.diagnosis }),
        });

        if (response.ok) {
          const result = await response.json();
          console.log("Form Data Submitted:", result);
          alert("Form data has been submitted successfully!");
          
          // Optionally, reset the form after submission
          this.diagnosis = "";
          this.errors.diagnosis = false;
        } else {
          console.error("Failed to submit form data:", response.statusText);
          alert("Failed to submit form data. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form data:", error);
        alert("An error occurred while submitting the form. Please try again.");
      }
    },
  },
};
</script>

<style scoped>
.diagnosis-tab {
  background-color: #d3d3d3; /* Light grey background */
  padding: 20px;
  min-height: auto; /* Minimum height of viewport */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center the content */
  width: 100vw; /* Full width of the viewport */
  box-sizing: border-box; /* Include padding in the element's total width and height */
}

.section-title {
  color: #000000; /* Black text color */
  background-color: #2ec4b6; /* Teal background color */
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  padding: 10px 20px; /* Add padding for better appearance */
  border-radius: 4px; /* Optional: add rounded corners */
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
}

.label {
  color: #000000; /* Black text color */
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 10px;
  position: relative; /* Ensure the asterisk is positioned correctly */
}

.required-asterisk {
  color: #ff0000; /* Red color for the asterisk */
  font-size: 16px; /* Adjust the size as needed */
  margin-left: 5px;
}

.input-textarea {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  background-color: #ffffff;
  border-radius: 4px;
  resize: vertical;
  min-height: 200px;
}

.input-error {
  border-color: #ff0000; /* Red border for error */
}

.submit-button {
  align-self: flex-end;
  background-color: #2ec4b6;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  margin-right: 20px;
}

.error-message {
  color: #ff0000; /* Red color for error messages */
  margin-top: 5px;
}

@media (max-width: 768px) {
  .form-group {
    width: 100%;
  }

  .input-textarea {
    font-size: 16px; /* Adjust font size for smaller screens */
  }

  .submit-button {
    width: 100%;
    text-align: center;
  }
}
</style>