<template>
  <div class="complaint-tab">
    <h2 class="section-title">COMPLAINT TAB</h2>

    <div class="form-group">
      <label for="consultant" class="label">CONSULTANT:</label>
      <input
        type="text"
        id="consultant"
        v-model="formData.consultant"
        class="input-field"
      />
    </div>

    <div class="form-group">
      <label for="referredBy" class="label">REFERRED BY:</label>
      <input
        type="text"
        id="referredBy"
        v-model="formData.referredBy"
        class="input-field"
      />
    </div>

    <div class="form-group">
      <label for="chiefComplaints" class="label">CHIEF COMPLAINTS:</label>
      <textarea
        id="chiefComplaints"
        v-model="formData.chiefComplaints"
        class="input-textarea"
        rows="4"
        :class="{ 'error-border': errors.chiefComplaints }"
      ></textarea>
      <span v-if="errors.chiefComplaints" class="error-message">Chief Complaint is required *</span>
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

    <button class="submit-button" @click="handleSubmit">Submit</button>
  </div>
</template>

<script>
export default {
  name: "ComplaintTab",
  data() {
    return {
      formData: {
        consultant: "",
        referredBy: "",
        chiefComplaints: "",
        history: "",
      },
      errors: {
        chiefComplaints: false,
      },
    };
  },
  methods: {
    validateForm() {
      this.errors.chiefComplaints = !this.formData.chiefComplaints;
      return !this.errors.chiefComplaints;
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
          body: JSON.stringify(this.formData),
        });

        if (response.ok) {
          const result = await response.json();
          console.log("Form Data Submitted:", result);
          alert("Form data has been submitted successfully!");

          // Optionally, reset the form after submission
          this.resetForm();
        } else {
          console.error("Failed to submit form data:", response.statusText);
          alert("Failed to submit form data. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form data:", error);
        alert("An error occurred while submitting the form. Please try again.");
      }
    },
    resetForm() {
      this.formData = {
        consultant: "",
        referredBy: "",
        chiefComplaints: "",
        history: "",
      };
      this.errors.chiefComplaints = false;
    },
  },
};
</script>

<style scoped>
.complaint-tab {
  background-color: #d3d3d3;
  padding: 40px;
  min-height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.section-title {
  color: #000000;
  background-color: #2ec4b6;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  padding: 10px 20px;
  border-radius: 4px;
  text-transform: uppercase;
  display: inline-block;
  cursor: pointer;
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
  color: #000000;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 10px;
  align-self: flex-start;
}

.input-field,
.input-textarea {
  width: 100%;
  max-width: 1000px;
  padding: 8px;
  font-size: 18px;
  border: 1px solid #ccc;
  background-color: #ffffff;
  border-radius: 4px;
  resize: vertical;
  box-sizing: border-box;
}

.error-border {
  border-color: #ff0000; /* Red border for error */
}

.error-message {
  color: #ff0000; /* Red text for error message */
  margin-top: 5px;
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