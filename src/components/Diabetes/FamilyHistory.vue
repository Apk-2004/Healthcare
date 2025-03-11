<template>
  <div class="tab-content">
    <div class="section-header">
      <h3 class="subsection-title">Family History:</h3>
    </div>
    <hr class="divider" />
    <form class="family-history-container">
      <div v-for="(condition, index) in familyHistory" :key="index" class="condition-row">
        <div class="condition-name">{{ condition.name }}</div>
        <div class="condition-radio">
          <label>
            <input type="radio" v-model="condition.yesNo" value="yes" @change="updateParent" />
            Yes
          </label>
          <label>
            <input type="radio" v-model="condition.yesNo" value="no" @change="updateParent" />
            No
          </label>
          <div v-if="condition.yesNo === 'yes'" class="condition-details">
            <input type="text" v-model="condition.details" placeholder="Details" @input="updateParent" />
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
      familyHistory: [
        { name: "Diabetes", yesNo: null, details: "" },
        { name: "High Blood Pressure", yesNo: null, details: "" },
        { name: "Asthma", yesNo: null, details: "" },
        { name: "Stroke", yesNo: null, details: "" },
        { name: "Heart Disease", yesNo: null, details: "" },
        { name: "Thyroid Disorder", yesNo: null, details: "" },
        { name: "Epilepsy/Seizures", yesNo: null, details: "" },
        { name: "Cancer", yesNo: null, details: "" },
        { name: "Others", yesNo: null, details: "" }
      ]
    };
  },
  methods: {
    updateParent() {
      this.$emit('update:familyHistory', this.familyHistory);
    }
  }
};
</script>

  
  <style scoped>
  .section-header {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 0px;
  }
  
  .subsection-title {
    color: #2e2e2e;
    font-weight: bold;
    text-align: left;
    text-transform: uppercase;
  }
  
  .divider {
    border-top: 1px solid white;
    width: 100%;
    margin: 20px 0px; /* Adjust as needed to position it in the middle */
  }
  
  .family-history-container {
    background-color: #e7feff; /* Green background color */
    padding: 20px;
    border-radius: 8px; /* Optional: add rounded corners */
  }
  
  .condition-row {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    justify-content: space-between;
  }
  
  .condition-name {
    color: rgb(0, 0, 0);
    font-weight: bold;
    font-size: 17px;
    margin-left: 10%;
    width: auto; /* Adjust as needed */
  }
  
  .condition-radio {
    display: flex;
    align-items: center;
    width: 50%; /* Adjust as needed */
  }
  
  .condition-radio label {
    color: rgb(0, 0, 0);
    font-weight: bold;
    margin-right: 20px;
    text-transform: uppercase;
  }
  
  .condition-details {
    margin-left: 20px;
    width: 300px; /* Adjust as needed */
  }
  
  .condition-details input {
    width: 100%;
    padding: 10px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  