<template>
  <div class="diagnosis-tab">
    <h2 class="section-title">DIAGNOSIS TAB</h2>

    <div class="form-group">
      <label for="diagnosis" class="label">DIAGNOSIS:</label>
      <textarea
        id="diagnosis"
        v-model="diagnosis"
        class="input-textarea"
        rows="4"
        placeholder="Enter your Diagnosis here..."
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiagnosisTab",
  data() {
    return {
      diagnosis: "",
    };
  },
};
</script>

<style scoped>
.diagnosis-tab {
  background-color: #d3d3d3; /* Light grey background */
  padding: 20px;
  min-height: 100vh; /* Minimum height of viewport */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Align items to the top */
  width: 100vw; /* Full width of the viewport */
  box-sizing: border-box; /* Include padding in the element's total width and height */
  margin-left: -50vw;
  left: 50%;
  position: relative;
  min-height: 70vh; /* Minimum height of viewport */
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
}

.input-textarea {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
</style>
