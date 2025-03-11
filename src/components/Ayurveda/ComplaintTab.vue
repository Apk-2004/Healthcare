<template>
  <div class="ayurveda-template">
    <!-- Complaint Tab Section -->
    <div class="complaint-tab">
      <h2 class="section-title">COMPLAINT TAB</h2>

      <div class="form-group">
        <label for="consultant" class="label">Consultant:</label>
        <input type="text" id="consultant" v-model="consultant" class="input-textarea" placeholder="">
      </div>

      <div class="form-group">
        <label for="visit-date" class="label">Visit Date:</label>
        <input type="date" id="visit-date" v-model="visitDate" class="input-textarea">
      </div>

      <div class="form-group">
        <label for="pradhana-vedana" class="label">Pradhana Vedana (Presenting Complaints with Duration):</label>
        <textarea id="pradhana-vedana" v-model="pradhanaVedana" class="input-textarea" placeholder=""></textarea>
      </div>
    </div>

    <!-- HistoryTab Component -->
    <HistoryTab @update:historyTab="updateHistoryTab" />

    <!-- PersonalHistory Component -->
    <PersonalHistory @update:personalHistory="updatePersonalHistory" />

    <!-- Submit Button -->
    <div class="submit-container">
      <button class="submit-button" @click="submitForm">Submit</button>
    </div>
  </div>
</template>

<script>
import HistoryTab from './HistoryTab.vue'; // Adjust the path as necessary
import PersonalHistory from './PersonalHistory.vue'; // Adjust the path as necessary

export default {
  name: 'AyurvedaTemplate',
  components: {
    HistoryTab,
    PersonalHistory
  },
  data() {
    return {
      consultant: '',
      visitDate: '',
      pradhanaVedana: '',
      historyTabData: {},
      personalHistoryData: {}
    };
  },
  methods: {
    updateHistoryTab(data) {
      this.historyTabData = data;
    },
    updatePersonalHistory(data) {
      this.personalHistoryData = data;
    },
    async submitForm() {
      try {
        // Combine data
        const formData = {
          consultant: this.consultant,
          visitDate: this.visitDate,
          pradhanaVedana: this.pradhanaVedana,
          historyTab: this.historyTabData,
          personalHistory: this.personalHistoryData
        };

        // Send data to API
        const response = await fetch('https://your-api-endpoint.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        alert('Form submitted successfully!');
        console.log('Server response:', result);
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting the form.');
      }
    }
  }
};
</script>

  <style scoped>
  .ayurveda-template {
    width: 100vw; /* Full width of the viewport */
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
    background-color: #d3d3d3;
  }
  
  .complaint-tab {
    background-color: #d3d3d3; /* Light grey background */
    padding: 65px;
    min-height: 80vh; /* Minimum height of viewport */
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Align content to the top */
    align-items: center;
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
    border-radius: 2px; /* Optional: add rounded corners */
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
  }
  
  .input-textarea {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ffffff;
    background-color: #ffffff;
    border-radius: 4px;
    resize: vertical;
  }
  .submit-button {
  align-self: flex-end;
  background-color: #2ec4b6;
  color: #ffffff;
  border: none;
  margin-left: 80%;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 30px;
}
  </style>
  