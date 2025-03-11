<template>
  <div class="complaint-tab">
    <h2 class="section-title">COMPLAINT TAB</h2>

    <div class="form-group">
      <label for="visitType" class="label">VISIT TYPE:</label>
      <select id="visitType" v-model="formData.visitType" class="input-field">
        <option value="" disabled>Select visit type</option>
        <option value="Immunization">Immunization</option>
        <option value="Treatment">Treatment</option>
      </select>
    </div>

    <div class="form-group" v-if="formData.visitType === 'Immunization'">
      <label for="vaccineName" class="label">VACCINE NAME:</label>
      <select id="vaccineName" v-model="formData.vaccineName" class="input-field">
        <option value="" disabled>Select vaccine</option>
        <option v-for="vaccine in vaccines" :key="vaccine" :value="vaccine">{{ vaccine }}</option>
      </select>
    </div>

    <div class="form-group">
      <label for="chiefComplaints" class="label">CHIEF COMPLAINTS:</label>
      <textarea
        id="chiefComplaints"
        v-model="formData.chiefComplaints"
        class="input-textarea"
        rows="4"
      ></textarea>
    </div>

    <div class="form-group">
      <label for="history" class="label">HISTORY:</label>
      <textarea
        id="history"
        v-model="formData.history"
        class="input-textarea"
        rows="4"
      ></textarea>
    </div>

    <!-- Added Past History Field -->
    <div class="form-group">
      <label for="pastHistory" class="label">PAST HISTORY:</label>
      <textarea
        id="pastHistory"
        v-model="formData.pastHistory"
        class="input-textarea"
        rows="4"
      ></textarea>
    </div>

    <button class="submit-button" @click="handleSubmit">Submit</button>
  </div>
</template>

<script>
export default {
  name: "ComplaintTab",
  data() {
    return {
      formData: {
        visitType: "",
        vaccineName: "",
        chiefComplaints: "",
        history: "",
        pastHistory: "", // Added Past History to formData
      },
      vaccines: [
        "MMR", "DTaP", "HepB", "Hib", "IPV", "PCV13", "Rotavirus", "Varicella",
        "HepA", "MenACWY", "HPV", "Flu", "Meningococcal B", "RV"
      ],
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await fetch('https://dummyapi.io/endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        });

        if (response.ok) {
          const result = await response.json();
          console.log('Form Data Submitted:', result);
          alert('Form data has been submitted successfully!');

          // Optionally, reset the form after submission
          this.resetForm();
        } else {
          console.error('Failed to submit form data:', response.statusText);
          alert('Failed to submit form data. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form data:', error);
        alert('An error occurred while submitting the form. Please try again.');
      }
    },
    resetForm() {
      this.formData = {
        visitType: "",
        vaccineName: "",
        chiefComplaints: "",
        history: "",
        pastHistory: "", // Reset Past History as well
      };
    }
  },
};
</script>

<style scoped>
.complaint-tab {
  background-color: #d3d3d3; /* Light grey background */
  padding: 40px;
  min-height: 100vh; /* Minimum height of the viewport */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align items horizontally */
  justify-content: center; /* Center align items vertically */
  box-sizing: border-box; /* Include padding in the element's total width and height */
}

.section-title {
  color: #000000; /* Black text color */
  background-color: #2ec4b6; /* Blue background color */
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  padding: 10px 20px; /* Add padding for better appearance */
  border-radius: 4px; /* Optional: add rounded corners */
  text-transform: uppercase; /* Uppercase text */
  display: inline-block; /* Make it like a button */
  cursor: pointer; /* Add cursor pointer for button-like feel */
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
  align-self: flex-start; /* Align label to the start (left) */
}

.input-field,
.input-textarea {
  width: 100%;
  max-width: 1000px; /* Adjust maximum width for better layout */
  padding: 8px;
  font-size: 18px;
  border: 1px solid #ccc;
  background-color: #ffffff;
  border-radius: 4px;
  resize: vertical;
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

.submit-button {
  align-self: flex-end; /* Align the button to the right */
  background-color: #2ec4b6; /* Blue background color */
  color: #ffffff; /* White text color */
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .complaint-tab {
    padding: 20px;
  }

  .input-field,
  .input-textarea {
    max-width: 100%;
  }

  .submit-button {
    width: 100%;
    text-align: center;
}
}
</style>