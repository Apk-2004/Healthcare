<template>
  <div class="investigation-tab">
    <h2 class="section-title">INVESTIGATION TAB</h2>

    <!-- Choose Investigation Section -->
    <div class="choose-investigation">
      <h3>Choose Investigation:</h3>
      <div class="input-group">
        <input type="text" v-model="newInvestigation" placeholder="Add Investigation" class="white-bg" />
        <input type="text" v-model="newNotes" placeholder="Add Notes" class="white-bg" />
        <button @click="addInvestigation" class="add-button">+ ADD</button>
      </div>
    </div>

    <!-- Selected Investigation Section -->
    <div class="selected-investigation">
      <h3>Selected Investigation:</h3>
      <table class="investigation-table">
        <colgroup>
          <col class="col-include">
          <col class="col-investigation">
          <col class="col-notes">
        </colgroup>
        <thead>
          <tr>
            <th>Include</th>
            <th>Investigation</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in selectedInvestigations" :key="index" class="investigation-item">
            <td class="include-cell"><input type="checkbox" v-model="item.includeInReport" /></td>
            <td>{{ item.investigation }}</td>
            <td>{{ item.notes }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Divider -->
    <div class="section-divider"></div>

    <!-- Notes Section -->
    <NotesSection v-model="notes" />

    <!-- Submit Button -->
    <button class="submit-button" @click="submitForm">Submit</button>
  </div>
</template>

<script>
import NotesSection from './NotesSection.vue';

export default {
  name: "InvestigationTab",
  components: {
    NotesSection,
  },
  data() {
    return {
      newInvestigation: "",
      newNotes: "",
      selectedInvestigations: [],
      notes: ""  // This will hold the data from the NotesSection component
    };
  },
  methods: {
    addInvestigation() {
      if (this.newInvestigation && this.newNotes) {
        this.selectedInvestigations.push({
          investigation: this.newInvestigation,
          notes: this.newNotes,
          includeInReport: false
        });
        this.newInvestigation = "";
        this.newNotes = "";
      }
    },
    submitForm() {
      const formData = {
        investigations: this.selectedInvestigations.map(item => ({
          investigation: item.investigation,
          notes: item.notes,
          includeInReport: item.includeInReport
        })),
        notes: this.notes  // Collect the notes data here
      };

      console.log("Submitted Data:", JSON.stringify(formData, null, 2));

      // Replace this with your API endpoint
      const apiUrl = "https://dummyapi.example.com/submit";
      
      // Simulate an API call using fetch
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        console.log("Data successfully submitted:", data);
        // Handle success (e.g., show a message, clear form, etc.)
      })
      .catch(error => {
        console.error("Error submitting data:", error);
        // Handle error (e.g., show error message)
      });
    }
  }
};
</script>

<style scoped>
.investigation-tab {
  background-color: #d3d3d3;
  padding: 40px;
  display: flex;
  flex-direction: column;
  min-height: auto;
  align-items: center;
  position: relative;
  box-sizing: border-box;
}

.section-title {
  color: #000000;
  background-color: #2ec4b6;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 10px 20px;
  border-radius: 4px;
  text-transform: uppercase;
  display: inline-block;
  cursor: pointer;
  text-align: center;
}

.choose-investigation, .selected-investigation {
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
  margin-top: 20px;
}

.choose-investigation h3, .selected-investigation h3 {
  color: #000000;
  text-align: left;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: bold;
}

.input-group {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  padding: 15px;
}

.input-group input {
  padding: 10px;
  margin-right: 10px;
  flex: 1;
  font-family: 'Courier New', Courier, monospace;
  color: #000000;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

.add-button {
  padding: 10px 15px;
  background-color: #2ec4b6;
  color: #ffffff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
}

.selected-investigation {
  width: 100%;
}

.investigation-table {
  width: 100%;
  max-width: 800px;
  border-collapse: collapse;
  table-layout: fixed;
}

.investigation-table th, .investigation-table td {
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #ccc;
  text-align: left;
  word-wrap: break-word;
}

.investigation-table th {
  background-color: #ffffff;
  color: #000;
  font-weight: bold;
}

.include-cell {
  text-align: center; /* Center the checkbox horizontally */
  width: 30px;
}

.section-divider {
  width: 100%;
  border-top: 1px solid #ccc;
  margin: 20px 0;
}

.col-include {
  width: 40%;
}

.col-investigation {
  width: 45%;
}

.col-notes {
  width: 45%;
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
  .input-group {
    flex-direction: column;
  }

  .submit-button {
    width: 100%;
    left: 0;
    right: 0;
    bottom: 10px;
    margin: auto;
    text-align: center;
  }

  .investigation-table {
    font-size: 14px;
}
}
</style>