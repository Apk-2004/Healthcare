<template>
  <div class="examination-tab-remaining">
    <div class="form-group">
      <div class="input-wrapper">
        <label for="totalTeeth" class="input-label"
          >Total Number Of Teeth:</label
        >
        <textarea
          id="totalTeeth"
          v-model="totalTeeth"
          class="input-textarea"
          placeholder="Total Number Of Teeth"
          rows="2"
        ></textarea>
      </div>

      <div class="input-wrapper">
        <label for="calculus" class="input-label">Calculus:</label>
        <textarea
          id="calculus"
          v-model="calculus"
          class="input-textarea"
          placeholder="Calculus"
          rows="2"
        ></textarea>
      </div>

      <div class="input-wrapper">
        <label for="occlusion" class="input-label">Occlusion:</label>
        <textarea
          id="occlusion"
          v-model="occlusion"
          class="input-textarea"
          placeholder="Occlusion"
          rows="2"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExaminationTabRemaining",
  data() {
    return {
      totalTeeth: "",
      calculus: "",
      occlusion: "",
    };
  },
};
</script>

<style scoped>
.examination-tab-remaining {
  background-color: #4e8c80; /* Teal color */
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
</style>
