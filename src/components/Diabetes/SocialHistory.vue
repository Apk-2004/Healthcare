<template>
  <div>
    <div class="section-header">
      <h3 class="subsection-title">Social History:</h3>
    </div>
    <hr class="divider" />
    <form class="history-container">
      <div v-for="(history, idx) in socialHistory" :key="idx" class="history-row">
        <div class="history-name">{{ history.name }}</div>
        <div class="history-options">
          <label v-for="(option, optionIdx) in history.options" :key="optionIdx">
            <input
              type="radio"
              :name="history.name"
              :value="option"
              v-model="history.selectedOption"
              @change="updateParent"
            />
            {{ option.charAt(0).toUpperCase() + option.slice(1) }}
          </label>
          <div v-if="history.hasDetails && history.selectedOption === 'yes'" class="history-details">
            <input type="text" v-model="history.details" placeholder="Details" @input="updateParent" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialHistory: [
        { name: "Diet", options: ["veg", "mixed"], selectedOption: null, hasDetails: false },
        { name: "Alcohol", options: ["yes", "no", "quit"], selectedOption: null, hasDetails: false },
        { name: "Smoking", options: ["yes", "no", "ex-smoker"], selectedOption: null, hasDetails: false },
        { name: "Illicit Substance Use", options: ["yes", "no", "quit"], selectedOption: null, hasDetails: false },
        { name: "Physical Activity", options: ["yes", "no"], selectedOption: null, hasDetails: true, details: "" }
      ]
    };
  },
  methods: {
    updateParent() {
      this.$emit('update:socialHistory', this.socialHistory);
    }
  }
};
</script>

  <style scoped>
  .section-header {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
  }
  
  .subsection-title {
    color: #2e2e2e;
    font-weight: bold;
    text-align: left;
    margin-right: 10px;
    margin-bottom: 0px;
    text-transform: uppercase;
  }
  
  .divider {
    border-top: 1px solid white;
    width: 100%;
    margin: 20px 0px;
  }
  
  .history-container {
    background-color: #e7feff; /* Green background color */
    padding: 20px;
    border-radius: 8px; /* Optional: add rounded corners */
  }
  
  .history-row {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    justify-content: space-between;
  }
  
  .history-name {
    color: rgb(0, 0, 0);
    font-weight: bold;
    font-size: 17px;
    margin-left: 10%;
    width: auto;
  }
  
  .history-options {
    display: flex;
    align-items: center;
    width: 50%;
  }
  
  .history-options label {
    color: rgb(0, 0, 0);
    font-weight: bold;
    margin-right: 20px;
    text-transform: uppercase;
  }
  
  .history-details {
    margin-left: 20px;
    width: 300px;
  }
  
  .history-details input {
    width: 100%;
    margin-left: 50px;
    padding: 10px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  