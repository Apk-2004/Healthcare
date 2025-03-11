<template>
  <div class="examination-tab">
    <h2 class="section-title">EXAMINATION TAB</h2>

    <div class="section-divider">
      <h3 class="subsection-title">SYSTEMIC EXAMINATION:</h3>
      <div class="form-group row">
        <div class="form-item">
          <label for="cvs" class="label">CVS:</label>
          <textarea
            id="cvs"
            v-model="formData.cvs"
            class="input-textarea"
            rows="2"
            placeholder="CVS"
          ></textarea>
        </div>
        <div class="form-item">
          <label for="rs" class="label">RS:</label>
          <textarea
            id="rs"
            v-model="formData.rs"
            class="input-textarea"
            rows="2"
            placeholder="RS"
          ></textarea>
        </div>
        <div class="form-item">
          <label for="cns" class="label">CNS:</label>
          <textarea
            id="cns"
            v-model="formData.cns"
            class="input-textarea"
            rows="2"
            placeholder="CNS"
          ></textarea>
        </div>
        <div class="form-item">
          <label for="pa" class="label">PA:</label>
          <textarea
            id="pa"
            v-model="formData.pa"
            class="input-textarea"
            rows="2"
            placeholder="PA"
          ></textarea>
        </div>
      </div>
    </div>

    <div class="section-divider">
      <h3 class="subsection-title">GENERAL EXAMINATION:</h3>
      <div class="form-group">
        <textarea
          id="generalExamination"
          v-model="formData.generalExamination"
          class="input-textarea"
          rows="2"
          placeholder="General Examination"
        ></textarea>
      </div>
    </div>

    <div class="section-divider">
      <h3 class="subsection-title">LOCAL EXAMINATION:</h3>
      <div class="form-group">
        <textarea
          id="localExamination"
          v-model="formData.localExamination"
          class="input-textarea"
          rows="2"
          placeholder="Local Examination"
        ></textarea>
      </div>
    </div>

    <button class="submit-button" @click="submitForm">Submit</button>
  </div>
</template>

<script>
export default {
  name: "ExaminationTab",
  data() {
    return {
      formData: {
        cvs: "",
        rs: "",
        cns: "",
        pa: "",
        generalExamination: "",
        localExamination: ""
      }
    };
  },
  methods: {
    async submitForm() {
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
        cvs: "",
        rs: "",
        cns: "",
        pa: "",
        generalExamination: "",
        localExamination: ""
      };
    }
  },
};
</script>

<style scoped>
.examination-tab {
  background-color: #4e8c80; /* Teal background color */
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: auto;
  width: 100%;
  box-sizing: border-box;
}

.section-title {
  color: #ffffff;
  background-color: #4e8c80;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  padding: 10px 20px;
  border-radius: 4px;
  text-transform: uppercase;
  display: inline-block;
  cursor: pointer;
}

.subsection-title {
  color: #000000;
  font-weight: bold;
  text-align: left;
  margin-bottom: 10px;
  padding: 8px 3px;
  border-radius: 2px;
  text-transform: uppercase;
  width: 100%;
  margin-right: 40%;
}

.section-divider {
  width: 100%;
  max-width: 1000px;
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
}

.form-group.row {
  flex-direction: row;
  justify-content: space-between;
  margin-left: 2px;
}

.form-item {
  display: flex;
  flex-direction: column;
  width: 23%;
}

.label {
  color: #000000;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 10px;
  align-self: flex-start;
}

.input-textarea {
  width: 100%;
  padding: 8px;
  font-size: 18px;
  border: 1px solid #ccc;
  font-family: 'Courier New', Courier, monospace;
  border-radius: 2px;
  resize: vertical;
  box-sizing: border-box;
  background-color: #ffffff;
}

.submit-button {
  align-self: flex-end;
  background-color: #303231; /* Dark grey background color */
  color: #ffffff;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .form-group.row {
    flex-direction: column;
  }
  
  .form-item {
    width: 100%;
  }

  .submit-button {
    width: 100%;
    text-align: center;
}
}
</style>