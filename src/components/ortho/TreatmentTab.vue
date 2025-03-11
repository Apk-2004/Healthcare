<template>
  <div class="treatment-tab">
    <h2 class="section-title">TREATMENT TAB</h2>

    <!-- Physiotherapy Section -->
    <div class="physiotherapy-section">
      <h3 class="sub-section-title">Physiotherapy</h3>
      <hr class="section-divider" />

      <!-- Form groups for Modality, Side, Region, Duration, Notes -->
      <div class="form-group">
        <div class="input-wrapper">
          <label for="modality" class="input-label">Modality:</label>
          <textarea
            id="modality"
            v-model="formData.modality"
            class="input-textarea"
            placeholder="Modality"
            rows="2"
          ></textarea>
        </div>

        <div class="input-wrapper">
          <label for="side" class="input-label">Side:</label>
          <select
            id="side"
            v-model="formData.selectedSide"
            class="input-select"
          >
            <option value="left">Left</option>
            <option value="right">Right</option>
            <option value="both">Both</option>
            <option value="none">None</option>
          </select>
        </div>

        <div class="input-wrapper">
          <label for="region" class="input-label">Region:</label>
          <textarea
            id="region"
            v-model="formData.region"
            class="input-textarea"
            placeholder="Region"
            rows="2"
          ></textarea>
        </div>

        <div class="input-wrapper">
          <label for="duration" class="input-label">Duration:</label>
          <input
            id="duration"
            type="number"
            v-model="formData.duration"
            class="input-number"
            placeholder="Duration (days)"
          />
        </div>

        <div class="input-wrapper">
          <label for="notes" class="input-label">Notes:</label>
          <textarea
            id="notes"
            v-model="formData.notes"
            class="input-textarea"
            placeholder="Notes"
            rows="2"
          ></textarea>
        </div>

        <!-- Add button -->
        <button @click="addToTable" class="add-button">+ ADD</button>
      </div>
    </div>

    <!-- Table for displaying added entries -->
    <table class="entry-table">
      <thead>
        <tr>
          <th>Modality</th>
          <th>Side</th>
          <th>Region</th>
          <th>Duration (days)</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="tableData.length === 0">
          <td colspan="5" class="no-data">No entries added yet</td>
        </tr>
        <tr v-for="(entry, index) in tableData" :key="index">
          <td>{{ entry.modality }}</td>
          <td>{{ entry.side }}</td>
          <td>{{ entry.region }}</td>
          <td>{{ entry.duration }}</td>
          <td>{{ entry.notes }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Submit button -->
    <button @click="submitForm" class="submit-button">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'TreatmentTab',
  data() {
    return {
      formData: {
        modality: '',
        selectedSide: 'left',
        region: '',
        duration: '',
        notes: ''
      },
      tableData: []
    };
  },
  methods: {
    addToTable() {
      this.tableData.push({
        modality: this.formData.modality,
        side: this.formData.selectedSide,
        region: this.formData.region,
        duration: this.formData.duration,
        notes: this.formData.notes
      });

      // Clear input fields after adding to table
      this.formData = {
        modality: '',
        selectedSide: 'left',
        region: '',
        duration: '',
        notes: ''
      };
    },
    async submitForm() {
      const formDataToSubmit = {
        treatments: this.tableData
      };

      try {
        const response = await fetch("https://dummyapi.io/endpoint", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataToSubmit),
        });

        if (response.ok) {
          const result = await response.json();
          console.log("Form Submitted Successfully:", result);
          alert("Form has been submitted successfully!");

          // Optionally, reset the form and table data after submission
          this.resetForm();
        } else {
          console.error("Failed to submit form:", response.statusText);
          alert("Failed to submit form. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred while submitting the form. Please try again.");
      }
    },
    resetForm() {
      this.formData = {
        modality: '',
        selectedSide: 'left',
        region: '',
        duration: '',
        notes: ''
      };
      this.tableData = [];
    }
  }
};
</script>

<style scoped>
.treatment-tab {
  padding: 40px;
  background-color: #4e8c80;
  border-radius: 4px;
  margin-top: 0px;
  min-height: 100vh; /* Set a specific height for the treatment tab */
  overflow-y: auto; /* Enable vertical scrolling if content overflows */
  position: relative; /* Make the container a positioning context for the button */
}

.section-title {
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  background-color: #4e8c80;
  padding: 10px;
  border-radius: 4px;
}

.sub-section-title {
  font-size: 18px;
  margin-right: auto;
  color: #181818;
}

.section-divider {
  border: 0;
  height: 2px;
  background-color: #ffffff;
  margin: 20px 0;
}

.form-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.input-wrapper {
  flex: 1;
  margin-right: 10px;
}

.input-label {
  display: block;
  margin-bottom: 5px;
  text-align: left;
  color: #000;
  font-weight: bold;
  padding-left: 10px;
}

.input-textarea, .input-select, .input-number {
  width: calc(100% - 20px);
  padding: 8px;
  background-color: #ffffff;
  border: 1px solid #6b6b6b;
  border-radius: 4px;
  color: #181818;
  box-sizing: border-box;
  height: 38px; /* Ensures consistent height */
  font-size: 16px; /* Ensures consistent font size */
  font-family: 'Courier New', Courier, monospace;
}

.add-button {
  background-color: #2e2e2e;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  flex-shrink: 0;
  margin-top: 19px;
}

.add-button:hover {
  background-color: #303231;
}

.entry-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 40px; 
  overflow-x: auto; 
  color: #000000;
  background-color: #ffffff;
}

.entry-table th, .entry-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

.entry-table th {
  background-color: #d3d3d3;
}

.entry-table .no-data {
  text-align: center;
  color: #888;
}

.submit-button {
  background-color: #2e2e2e;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.submit-button:hover {
  background-color: #303231;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .form-group {
    flex-direction: column;
  }

  .input-wrapper {
    margin-right: 0;
    margin-bottom: 10px;
  }

  .input-textarea, .input-select, .input-number {
    width: 100%;
  }

  .submit-button {
    bottom: 10px;
    right: 10px;
  }
}
</style>
