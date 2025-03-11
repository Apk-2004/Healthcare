<template>
  <div>
    <div class="section-header">
      <h3 class="subsection-title">Known illness:</h3>
    </div>
    <hr class="divider" />
    <form class="illness-container">
      <div
        v-for="(illness, idx) in knownIllnesses"
        :key="idx"
        class="illness-row"
      >
        <div class="illness-name">{{ illness.name }}</div>
        <div class="illness-radio">
          <label>
            <input type="radio" v-model="illness.yesNo" value="yes" @change="updateParent" />
            Yes
          </label>
          <label>
            <input type="radio" v-model="illness.yesNo" value="no" @change="updateParent" />
            No
          </label>
          <div v-if="illness.yesNo === 'yes'" class="illness-details">
            <input
              type="text"
              v-model="illness.details"
              placeholder="Details"
              @input="updateParent"
            />
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
      knownIllnesses: [
        { name: "High Blood Pressure", yesNo: null, details: "" },
        { name: "Thyroid Disorder", yesNo: null, details: "" },
        { name: "Heart Disease", yesNo: null, details: "" },
        { name: "Asthma", yesNo: null, details: "" },
        { name: "Kidney Problem", yesNo: null, details: "" },
        { name: "Peptic Ulcer", yesNo: null, details: "" },
        { name: "Tuberculosis", yesNo: null, details: "" },
        { name: "Epilepsy", yesNo: null, details: "" },
        { name: "Cancer", yesNo: null, details: "" },
        { name: "Hospitalization", yesNo: null, details: "" },
        { name: "Surgery", yesNo: null, details: "" },
      ],
    };
  },
  methods: {
    updateParent() {
      this.$emit('update:knownIllnesses', this.knownIllnesses);
    },
  },
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
    margin-right: 20px;
    margin-bottom: 0px;
    text-transform: uppercase;
  }
  
  .divider {
    border-top: 1px solid white;
    width: 100%;
    margin: 20px 0px;
  }
  
  .illness-container {
    background-color: #e7feff; /* Green background color */
    padding: 20px;
    border-radius: 8px; /* Optional: add rounded corners */
  }
  
  .illness-row {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    justify-content: space-between;
  }
  
  .illness-name {
    color: rgb(0, 0, 0);
    font-weight: bold;
    font-size: 17px;
    margin-left: 10%;
    width: auto;
  }
  
  .illness-radio {
    display: flex;
    align-items: center;
    width: 50%;
  }
  
  .illness-radio label {
    color: rgb(0, 0, 0);
    font-weight: bold;
    margin-right: 20px;
    text-transform: uppercase;
  }
  
  .illness-details {
    margin-left: 20px;
    width: 300px;
  }
  
  .illness-details input {
    width: 100%;
    margin-left: 50px;
    padding: 10px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  