<template>
  <div class="treatment-tab">
    <div class="tab-heading">
      <h2 class="tab-title">TREATMENT TAB</h2>
    </div>

    <!-- Teeth Images and Selection Buttons -->
    <div class="teeth-section">
      <div class="teeth-and-findings">
        <div class="teeth-images">
          <!-- Teeth 55 to 65 -->
          <div class="teeth-group">
            <div class="teeth-box">
              <div class="image-container">
                <img
                  src="@/assets/teeths55to65.png"
                  alt="Teeths 55 to 65"
                  class="treatment-image"
                />
                <div class="tooth-buttons">
                  <button
                    v-for="tooth in [
                      '55',
                      '54',
                      '53',
                      '52',
                      '51',
                      '61',
                      '62',
                      '63',
                      '64',
                      '65',
                    ]"
                    :key="tooth"
                    @click="selectTooth(tooth)"
                    class="tooth-button"
                    :class="{ selected: isSelected(tooth) }"
                  >
                    {{ tooth }}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Teeth 18 to 28 -->
          <div class="teeth-group">
            <div class="teeth-box">
              <div class="image-container">
                <img
                  src="@/assets/teeths18to28.png"
                  alt="Teeths 18 to 28"
                  class="treatment-image"
                />
                <div class="tooth-buttons">
                  <button
                    v-for="tooth in [
                      '18',
                      '17',
                      '16',
                      '15',
                      '14',
                      '13',
                      '12',
                      '11',
                      '21',
                      '22',
                      '23',
                      '24',
                      '25',
                      '26',
                      '27',
                      '28',
                    ]"
                    :key="tooth"
                    @click="selectTooth(tooth)"
                    class="tooth-button"
                    :class="{ selected: isSelected(tooth) }"
                  >
                    {{ tooth }}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Teeth 48 to 38 -->
          <div class="teeth-group">
            <div class="teeth-box">
              <div class="image-container">
                <img
                  src="@/assets/teeths48to38.png"
                  alt="Teeths 48 to 38"
                  class="treatment-image"
                />
                <div class="tooth-buttons">
                  <button
                    v-for="tooth in [
                      '48',
                      '47',
                      '46',
                      '45',
                      '44',
                      '43',
                      '42',
                      '41',
                      '31',
                      '32',
                      '33',
                      '34',
                      '35',
                      '36',
                      '37',
                      '38',
                    ]"
                    :key="tooth"
                    @click="selectTooth(tooth)"
                    class="tooth-button"
                    :class="{ selected: isSelected(tooth) }"
                  >
                    {{ tooth }}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Teeth 85 to 75 -->
          <div class="teeth-group">
            <div class="teeth-box">
              <div class="image-container">
                <img
                  src="@/assets/teeths85to75.png"
                  alt="Teeths 85 to 75"
                  class="treatment-image"
                />
                <div class="tooth-buttons">
                  <button
                    v-for="tooth in [
                      '85',
                      '84',
                      '83',
                      '82',
                      '81',
                      '71',
                      '72',
                      '73',
                      '74',
                      '75',
                    ]"
                    :key="tooth"
                    @click="selectTooth(tooth)"
                    class="tooth-button"
                    :class="{ selected: isSelected(tooth) }"
                  >
                    {{ tooth }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Findings Section -->
        <div class="findings-section">
          <h4 class="findings-title">Select Treatment</h4>
          <textarea
            v-model="findings"
            class="findings-textarea"
            placeholder="Treatments"
            rows="1"
            readonly
          ></textarea>

          <!-- Add Treatments Section -->
          <div class="add-treatment-section">
            <h4 class="add-treatment-title"></h4>
            <textarea
              v-model="addTreatment"
              class="add-treatment"
              placeholder="Add Treatment"
              rows="3"
            ></textarea>
          </div>

          <!-- Additional Notes Section -->
          <div class="additional-notes-section">
            <h4 class="additional-notes-title"></h4>
            <textarea
              v-model="additionalNotes"
              class="additional-notes"
              placeholder="Additional Notes"
              rows="3"
            ></textarea>
          </div>

          <!-- Expected Completion Section -->
          <div class="expected-completion-section">
            <h4 class="expected-completion-title"></h4>
            <textarea
              v-model="expectedcompletion"
              class="expected-completion"
              placeholder="Expected Completion"
              rows="3"
            ></textarea>
          </div>

          <!-- Add File Section -->
          <div class="add-button-section">
            <button @click="addFile" class="add-button">+ ADD</button>
            <input
              type="file"
              id="fileInput"
              ref="fileInput"
              @change="handleFileChange"
              style="display: none"
            />
            <div v-if="uploadedImage" class="image-container">
              <img :src="uploadedImage" alt="Uploaded" class="uploaded-image" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Rx-Advised Section -->
    <div class="rx-advised-section">
      <div class="form-group">
        <div class="input-wrapper">
          <label for="rx-advised" class="input-label">Rx-Advised:</label>
          <textarea
            id="rx-advised"
            v-model="rxAdvised"
            class="input-textarea"
            placeholder="Rx-Advised"
            rows="2"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TreatmentTab",
  data() {
    return {
      selectedTeeth: [], // Track selected teeth in an array
      findings: "", // Initialize findings data property
      addTreatment: "", // Initialize add treatment data property
      additionalNotes: "", // Initialize additional notes data property
      expectedcompletion: "", // initialize expected completion notes
      uploadedImage: null, // Initialize uploadedImage data property
    };
  },
  methods: {
    selectTooth(tooth) {
      const index = this.selectedTeeth.indexOf(tooth);
      if (index !== -1) {
        // Tooth already selected, remove it
        this.selectedTeeth.splice(index, 1);
      } else {
        // Tooth not selected, add it
        this.selectedTeeth.push(tooth);
      }
      this.updateFindings(); // Update findings when a tooth is selected or deselected
    },
    isSelected(tooth) {
      return this.selectedTeeth.includes(tooth);
    },
    updateFindings() {
      this.findings = this.selectedTeeth.join(", ");
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.uploadedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    addFile() {
      this.$refs.fileInput.click();
      // Placeholder for file handling logic
    },
  },
};
</script>

<style scoped>
.treatment-tab {
  background-color: #4e8c80; /* Light grey background */
  padding: 20px;
  display: flex;
  colour: d3d3d3;
  flex-direction: column;
  align-items: center;
}

.tab-heading {
  padding: 2px;
  border-radius: 4px;
  margin-bottom: 20px; /* Adjust margin as needed */
  width: 20%;
  justify-content: center;
}

.tab-title {
  color: #000000;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.teeth-section {
  margin-top: 20px;
}

.teeth-and-findings {
  display: flex;
  justify-content: space-between;
}

.teeth-images {
  flex: 3; /* Adjust as needed */
}

.teeth-group {
  margin-bottom: 20px;
}

.teeth-box {
  background-color: #ffffff;
  padding: 5px; /* Decreased padding */
  margin: 5px; /* Decreased margin */
  border-radius: 8px;
  max-width: 800px; /* Adjust max-width as needed */
}

.image-container {
  text-align: center;
}

.treatment-image {
  max-width: 100%; /* Ensure image fits within its container */
  height: auto; /* Maintain aspect ratio */
  display: block; /* Ensure block-level display */
  margin: 0 auto; /* Center align the image */
}

.tooth-buttons {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

/* Adjust only the buttons in teeth-group:nth-child(1) */
.teeth-group:nth-child(1) .tooth-button,
.teeth-group:nth-child(4) .tooth-button {
  padding: 10px 18px; /* Adjust padding for larger size */
  font-size: 12px; /* Adjust font size for larger size */
}

.tooth-button {
  margin: 5px;
  padding: 8px 12px; /* Adjust padding as needed */
  font-size: 12px; /* Adjust font size as needed */
  border: 1px solid #ccc;
  background-color: #d3d3d3;
  cursor: pointer;
}

.tooth-button.selected {
  background-color: #4e8c80;
  color: white;
  border-color: transparent;
}

.findings-section {
  margin-left: 20px; /* Adjust margin as needed */
  width: 250px; /* Adjust the width as needed */
  min-height: 30px; /* Adjust height as needed */
}

.findings-title {
  font-size: 16px;
  font-weight: bold;
  color: #141301;
  margin-bottom: 5px;
}

.findings-textarea,
.add-treatment,
.additional-notes,
.expected-completion,
.rx-advised-textarea {
  width: 100%;
  min-height: 30px; /* Adjust height as needed */
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

.add-treatment-section,
.additional-notes-section,
.expected-completion-section,
.rx-advised-section {
  margin-top: 10px;
}

.add-treatment-title,
.additional-notes-title,
.expected-completion-title,
.rx-advised-title {
  font-size: 14px;
  font-weight: bold;
}
.expected-completion {
  width: 100%;
  min-height: 30px; /* Adjust height as needed */
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

.add-button-section {
  margin-top: 10px;
}

.add-button {
  padding: 10px 20px;
  font-size: 14px;
  background-color: #d3d3d3;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.upload-section {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.upload-label {
  color: #000000; /* Black text color */
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 10px;
}
.uploaded-image {
  max-width: 200px; /* Adjust the size as needed */
  max-height: 200px; /* Adjust the size as needed */
  border: 1px solid #d3d3d3;
  border-radius: 5px;
}
.rx-advised-section {
  margin-right: 12px;
  width: 250px; /* Adjust the width as needed */
  height: auto; /* Adjust the height as needed */
}

.rx-advised-title {
  font-size: 16px;
  font-weight: bold;
  color: #141301;
  margin-right: 70%;
}

.rx-advised-textarea {
  width: 100%;
  height: 30px;
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  margin-right: 70%; /* Reduce margin top to decrease gap between label and textarea */
}
</style>
