<template>
  <div class="examination-tab">
    <h2 class="section-title">EXAMINATION TAB</h2>

    <!-- Sub-tabs for General and ENT -->
    <div class="sub-tabs">
      <button
        class="sub-tab-button"
        :class="{ active: activeSubTab === 'general' }"
        @click="activeSubTab = 'general'"
      >GENERAL</button>
      <button
        class="sub-tab-button"
        :class="{ active: activeSubTab === 'ent' }"
        @click="activeSubTab = 'ent'"
      >ENT</button>
    </div>

    <!-- Content based on active sub-tab -->
    <keep-alive>
      <component
        :is="currentComponent"
        v-model="formData[activeSubTab]"
      />
    </keep-alive>

    <!-- Submit Button -->
    <button @click="submitData" class="submit-button">Submit</button>
  </div>
</template>

<script>
import GeneralExaminationTab from '@/components/ENT/GeneralTab.vue';
import ENTExaminationTab from '@/components/ENT/EntTab.vue';

export default {
  name: "ExaminationTab",
  components: {
    GeneralExaminationTab,
    ENTExaminationTab
  },
  data() {
    return {
      activeSubTab: 'general',
      formData: {
        general: {}, // Object to hold data from the General tab
        ent: {}, // Object to hold data from the ENT tab
      }
    };
  },
  computed: {
    currentComponent() {
      return this.activeSubTab === 'general' ? GeneralExaminationTab : ENTExaminationTab;
    }
  },
  methods: {
    async submitData() {
      try {
        const response = await fetch('https://your-api-endpoint.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        });

        if (!response.ok) {
          throw new Error('Failed to submit data');
        }

        const result = await response.json();
        console.log('Data successfully submitted:', result);

        // Add success notification or action here if needed
      } catch (error) {
        console.error('Error submitting data:', error);
        // Handle the error or notify the user
      }
    }
  }
};
</script>


<style scoped>
.examination-tab {
  background-color: #4e8c80; /* Teal background color */
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100hv;
  width: 100%; /* Cover the whole page width */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

.section-title {
  color: #ffffff; /* White text color */
  background-color: #4e8c80; /* Darker teal background color */
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  padding: 10px 20px; /* Add padding for better appearance */
  border-radius: 4px; /* Optional: add rounded corners */
  text-transform: uppercase; /* Uppercase text */
  display: inline-block; /* Make it like a button */
  cursor: pointer; /* Add cursor pointer for button-like feel */
}

.sub-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 1100px;
  background-color: #e7feff;
}

.sub-tab-button {
  padding: 10px 20px;
  margin: 0 5px;
  font-weight: bold;
  cursor: pointer;
  background-color: #e7feff;
  color: rgb(1, 1, 1);
  border: none;
  border-radius: 4px;
}

.sub-tab-button.active {
  background-color: #e7feff; /* Darker shade for active tab */
}

.sub-tab-button:hover {
  background-color: #3b7a6b;
  border-radius: 2px;
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

