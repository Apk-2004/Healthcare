<template>
  <div class="examination-tab">
    <h2 class="section-title">EXAMINATION TAB</h2>

    <!-- Extra Oral Examination Section -->
    <div class="extra-oral-examination">
      <h3 class="sub-section-title">Extra Oral Examination</h3>
      <hr class="section-divider" />

      <!-- Form groups for Face, Mouth Opening, Smile -->
      <div class="form-group">
        <div class="input-wrapper">
          <label for="face" class="input-label">Face:</label>
          <textarea
            id="face"
            v-model="face"
            class="input-textarea"
            placeholder="Face"
            rows="2"
          ></textarea>
        </div>

        <div class="input-wrapper">
          <label for="mouthOpening" class="input-label">Mouth Opening:</label>
          <textarea
            id="mouthOpening"
            v-model="mouthOpening"
            class="input-textarea"
            placeholder="Mouth Opening"
            rows="2"
          ></textarea>
        </div>

        <div class="input-wrapper">
          <label for="smile" class="input-label">Smile:</label>
          <textarea
            id="smile"
            v-model="smile"
            class="input-textarea"
            placeholder="Smile"
            rows="2"
          ></textarea>
        </div>
      </div>

      <!-- Second line with Lip Competence, Medline, and Skeletal Class -->
      <div class="form-group">
        <div class="input-wrapper">
          <label for="lipCompetence" class="input-label">Lip Competence:</label>
          <textarea
            id="lipCompetence"
            v-model="lipCompetence"
            class="input-textarea"
            placeholder="Lip Competence"
            rows="2"
          ></textarea>
        </div>

        <div class="input-wrapper">
          <label for="medline" class="input-label">Medline:</label>
          <textarea
            id="medline"
            v-model="medline"
            class="input-textarea"
            placeholder="Medline"
            rows="2"
          ></textarea>
        </div>

        <div class="input-wrapper">
          <label for="skeletalClass" class="input-label">Skeletal Class:</label>
          <textarea
            id="skeletalClass"
            v-model="skeletalClass"
            class="input-textarea"
            placeholder="Skeletal Class"
            rows="2"
          ></textarea>
        </div>
      </div>

      <!-- TMJ Section -->
      <div class="tmj-section">
        <div class="form-group">
          <div class="input-wrapper">
            <label for="tmj" class="input-label">TMJ:</label>
            <textarea
              id="tmj"
              v-model="tmj"
              class="input-textarea"
              placeholder="TMJ"
              rows="2"
            ></textarea>
          </div>
        </div>
      </div>

      <!-- Internal Oral Examination Section -->
      <div class="internal-oral-examination">
        <h3 class="sub-section-title">Internal Oral Examination</h3>
        <hr class="section-divider" />

        <!-- Placeholder for future content -->
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
                    class="examination-image"
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
                    class="examination-image"
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
                    class="examination-image"
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
                    class="examination-image"
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
            <h4 class="findings-title">Choose Findings:</h4>
            <textarea
              v-model="findings"
              class="findings-textarea"
              placeholder="Choose Findings"
              rows="10"
              readonly
            ></textarea>
            <!-- Additional Notes Section -->
            <div class="additional-notes-section">
              <h4 class="additional-notes-title"></h4>
              <textarea
                v-model="additionalNotes"
                class="additional-notes"
                placeholder="Additional Notes"
                rows="2"
              ></textarea>
            </div>
            <!-- Add File Section -->
            <div class="add-button-section">
              <label for="fileInput" class="add-button">+ ADD</label>
              <input
                type="file"
                id="fileInput"
                ref="fileInput"
                @change="handleFileChange"
                style="display: none"
              />
              <div v-if="uploadedImage" class="image-container">
                <img
                  :src="uploadedImage"
                  alt="Uploaded"
                  class="uploaded-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExaminationTab",
  data() {
    return {
      face: "",
      mouthOpening: "",
      smile: "",
      lipCompetence: "",
      medline: "",
      skeletalClass: "",
      tmj: "",
      selectedTeeth: [], // Track selected teeth in an array
      findings: "", // Initialize findings data property
      additionalNotes: "", // Initialize additional notes data property
      uploadedImage: null, // Track uploaded image
    };
  },
  methods: {
    selectTooth(tooth) {
      if (this.selectedTeeth.includes(tooth)) {
        this.selectedTeeth = this.selectedTeeth.filter((t) => t !== tooth);
      } else {
        this.selectedTeeth.push(tooth);
      }
      this.updateFindings(); // Update findings when a tooth is selected
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
  },
};
</script>
<style scoped>
.examination-tab {
  background-color: #4e8c80;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-title {
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  padding: 10px 20px;
  border-radius: 4px;
}

.extra-oral-examination {
  width: 100%;
}

.sub-section-title {
  color: #222;
  text-align: left;
  margin-bottom: 10px;
  width: 100%;
}

.section-divider {
  width: 100%;
  border-top: 1px solid #ccc;
  margin: 10px 0;
}

.form-group {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1000px;
  gap: 20px;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.input-label {
  font-weight: bold;
  margin-bottom: 5px;
  align-self: flex-start;
  color: #000000;
}

.input-textarea {
  width: 250px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

.teeth-section {
  margin-top: 20px;
}

.teeth-and-findings {
  display: flex;
  justify-content: space-between;
}

.teeth-images {
  flex: 3;
}

.teeth-group {
  margin-bottom: 20px;
}

.teeth-box {
  background-color: #f0f0f0;
  padding: 5px; /* Decreased padding */
  margin: 5px; /* Decreased margin */
  border-radius: 8px;
  max-width: 800px; /* Adjust max-width as needed */
}

.image-container {
  text-align: left;
}

.examination-image {
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

/* Adjust only the buttons in teeth-group:nth-child(1), (4) */
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
  margin-right: 12px;
  width: 250px; /* Adjust the width as needed */
  height: auto; /* Adjust the height as needed */
}

.findings-title {
  font-size: 16px;
  font-weight: bold;
  color: #141301;
  margin-bottom: 5px;
  margin-right: 120px;
}

.findings-textarea {
  width: 100%;
  height: 30px;
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  margin-top: 5px; /* Reduce margin top to decrease gap between label and textarea */
}

.additional-notes-section {
  margin-top: 10px;
}

.additional-notes-title {
  font-size: 16px;
  font-weight: bold;
  color: #141301;
  margin-bottom: 5px;
}

.additional-notes {
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
  display: inline-block;
  background-color: #d3d3d3; /* Change this to your desired background color */
  color: #141301; /* Change this to your desired text color */
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  transition: background-color 0.3s, color 0.3s; /*
}

.add-button:hover {
  background-color: #ff6b6b; /* Change this to the desired hover background color */
  color: black; /* 
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
</style>
