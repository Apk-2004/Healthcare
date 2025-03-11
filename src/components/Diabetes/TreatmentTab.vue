<template>
  <div class="treatment-tab">
    <div class="tab-header">
      <h1>Treatment Tab</h1>
    </div>
    <div class="treatment-advised">
      <h2>Treatment Advised</h2>
      <div class="divider"></div>
      <div class="treatment-inputs">
        <label class="select-treatment-label">Select Treatment:</label>
        <div class="input-group">
          <input
            type="text"
            placeholder="Type Treatment"
            v-model="treatmentType"
          />
        </div>
        <div class="input-group">
          <input type="text" placeholder="Quantity" v-model="quantity" />
        </div>
        <div class="input-group">
          <input type="text" placeholder="Add notes" v-model="notes" />
        </div>
        <div class="input-group">
          <input
            type="text"
            placeholder="Expected Completion"
            v-model="completion"
          />
        </div>
        <div class="treatment-action-buttons">
          <button @click="addTreatment">+ADD</button>
        </div>
      </div>
      <div class="action-buttons">
        <button @click="estimate">Estimate</button>
        <button @click="printEstimate">Print Estimate</button>
      </div>
      <div class="rx-advised">
        <label class="rx-advised-label">Rx Advised:</label>
        <div class="input-group">
          <input type="text" placeholder="Rx Advised" v-model="rxAdvised" />
        </div>
      </div>

      <!-- Display Added Treatments -->
      <div class="added-treatments">
        <table class="treatment-table">
          <thead>
            <tr>
              <th>Treatment Type</th>
              <th>Quantity</th>
              <th>Notes</th>
              <th>Expected Completion</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="treatments.length === 0">
              <td colspan="4" class="no-entries">No entries</td>
            </tr>
            <tr v-for="(treatment, index) in treatments" :key="index">
              <td>{{ treatment.treatmentType }}</td>
              <td>{{ treatment.quantity }}</td>
              <td>{{ treatment.notes }}</td>
              <td>{{ treatment.completion }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="treatment-billed">
      <h2>Treatment Billed</h2>
      <div class="divider"></div>
      <div class="treatment-billed-content">
        <div class="rx-billed">
          <label class="rx-billed-label">Rx Billed:</label>
          <div class="input-group">
            <input
              type="text"
              placeholder="Type Rx Billed"
              v-model="rxBilled"
            />
          </div>
        </div>
        <NotesSection />
      </div>
    </div>
    <button class="submit-button" @click="submitData">Submit</button>
  </div>
</template>

<script>
import NotesSection from "@/components/ortho/NotesSection.vue";

export default {
  components: {
    NotesSection,
  },
  data() {
    return {
      treatmentType: "",
      quantity: "",
      notes: "",
      completion: "",
      rxAdvised: "",
      rxBilled: "",
      treatments: [], // Array to store added treatments
    };
  },
  methods: {
    addTreatment() {
      // Function to handle adding the treatment data
      if (this.treatmentType && this.quantity && this.notes && this.completion) {
        this.treatments.push({
          treatmentType: this.treatmentType,
          quantity: this.quantity,
          notes: this.notes,
          completion: this.completion,
        });

        // Clear the input fields after adding treatment
        this.treatmentType = "";
        this.quantity = "";
        this.notes = "";
        this.completion = "";
      } else {
        alert("Please fill out all treatment fields before adding.");
      }
    },
    async submitData() {
      const treatmentData = {
        treatments: this.treatments,
        rxAdvised: this.rxAdvised,
        rxBilled: this.rxBilled,
      };

      try {
        const response = await fetch("https://dummyapi.io/endpoint", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(treatmentData),
        });

        if (response.ok) {
          const result = await response.json();
          console.log("Data Submitted:", result);
          alert("Data has been submitted successfully!");

          // Optionally, reset the form after submission
          this.resetForm();
        } else {
          console.error("Failed to submit data:", response.statusText);
          alert("Failed to submit data. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting data:", error);
        alert("An error occurred while submitting the data. Please try again.");
      }
    },
    estimate() {
      // Function to handle estimating the treatment
      console.log("Estimating treatment...");
    },
    printEstimate() {
      // Function to handle printing the estimate
      console.log("Printing estimate...");
    },
    resetForm() {
      this.treatmentType = "";
      this.quantity = "";
      this.notes = "";
      this.completion = "";
      this.rxAdvised = "";
      this.rxBilled = "";
      this.treatments = [];
    },
  },
};
</script>

<style scoped>
/* Keep your existing styles here */

.treatment-tab {
  background-color: #4e8c80;
  padding: 50px;
  width: 100%;
  min-height: 100vh;
  height: auto;
  box-sizing: border-box;
  position: relative; /* Added to position the submit button */
}

.submit-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #2e2e2e;
  border: 1px solid #4e8c80;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.treatment-advised,
.treatment-billed {
  margin-top: 20px;
}

.treatment-advised h2,
.treatment-billed h2 {
  color: #ffffff;
  margin-bottom: 10px;
  text-align: left;
  font-size: 20px;
}

.divider {
  border-top: 2px solid rgb(255, 255, 255);
  margin: 10px 0;
}

.treatment-inputs {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.select-treatment-label,
.rx-advised-label,
.rx-billed-label {
  color: #2e2e2e;
  font-weight: bold;
  margin-right: 10px;
  font-size: 18px;
}

.input-group {
  flex: 1;
  min-width: 150px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-top: 20px;
  font-family: "Courier New", Courier, monospace;
}

.input-group input {
  width: 100%;
  padding: 10px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 2px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  background-color: #2e2e2e;
  border: 1px solid #4e8c80;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 5px;
}

.action-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.action-buttons button {
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #2e2e2e;
  border: 1px solid #000000;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
}

.rx-advised,
.rx-billed {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.rx-advised-label,
.rx-billed-label {
  margin-right: 10px;
}

.rx-advised .input-group,
.rx-billed .input-group {
  flex: 1;
}

.rx-advised .input-group input {
  width: 40%;
  padding: 10px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 2px;
  margin-right: 100%;
  box-sizing: border-box;
}

.rx-billed .input-group input {
  width: 400px;
  min-height: auto;
  padding: 10px;
  height: 120px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 2px;
}

.treatment-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.treatment-table th,
.treatment-table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

.no-entries {
  text-align: center;
}

.table-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.table-container button {
  margin-bottom: 10px;
}
</style>