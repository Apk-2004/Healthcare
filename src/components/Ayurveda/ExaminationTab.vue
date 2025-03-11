<template>
    <div class="examination-tab">
      <h3 class="section-title">Examination Tab</h3>
  
      <!-- Existing content -->
      <div class="form-content">
        <!-- Physical Examination -->
        <div class="form-group">
          <label for="physical-examination" class="label1">Physical Examination:</label>
          <textarea id="physical-examination" v-model="physicalExamination" class="input-textarea" placeholder=""></textarea>
        </div>
  
        <!-- Systemic Examination -->
        <div class="form-group">
          <label for="systemic-examination" class="label1">Systemic Examination:</label>
          <textarea id="systemic-examination" v-model="systemicExamination" class="input-textarea" placeholder=""></textarea>
        </div>
  
        <!-- Ashta Sthana Pareeksha -->
        <div class="form-group">
          <h4 class="subsection-title">Ashta Sthana Pareeksha</h4>
          <hr class="section-divider" />
          <div class="form-group row">
            <div class="form-item">
              <label for="nadi" class="label">Nadi:</label>
              <textarea id="nadi" v-model="nadi" class="input-textarea" placeholder="Nadi"></textarea>
            </div>
            <div class="form-item">
              <label for="mutra" class="label">Mutra:</label>
              <textarea id="mutra" v-model="mutra" class="input-textarea" placeholder="Mutra"></textarea>
            </div>
            <div class="form-item">
              <label for="malam" class="label">Malam:</label>
              <textarea id="malam" v-model="malam" class="input-textarea" placeholder="Malam"></textarea>
            </div>
            <div class="form-item">
              <label for="jihwa" class="label">Jihwa:</label>
              <textarea id="jihwa" v-model="jihwa" class="input-textarea" placeholder="Jihwa"></textarea>
            </div>
          </div>
          <div class="form-group row">
            <div class="form-item">
              <label for="sabda" class="label">Sabda:</label>
              <textarea id="sabda" v-model="sabda" class="input-textarea" placeholder="Sabda"></textarea>
            </div>
            <div class="form-item">
              <label for="sparsa" class="label">Sparsa:</label>
              <textarea id="sparsa" v-model="sparsa" class="input-textarea" placeholder="Sparsa"></textarea>
            </div>
            <div class="form-item">
              <label for="drik" class="label">Drik:</label>
              <textarea id="drik" v-model="drik" class="input-textarea" placeholder="Drik"></textarea>
            </div>
            <div class="form-item">
              <label for="akriti" class="label">Akriti:</label>
              <textarea id="akriti" v-model="akriti" class="input-textarea" placeholder="Akriti"></textarea>
            </div>
          </div>
        </div>
  
        <!-- Dasa Vidha Pareeksha -->
        <div class="form-group">
          <h4 class="subsection-title">Dasa Vidha Pareeksha</h4>
          <hr class="section-divider" />
          <h5 class="sub-subsection-title">Dooshya</h5>
          <div class="form-group row">
            <div class="form-item">
              <label for="dosha" class="label">Dosha:</label>
              <textarea id="dosha" v-model="dosha" class="input-textarea" placeholder="Dosha"></textarea>
            </div>
            <div class="form-item">
              <label for="dhathu" class="label">Dhathu:</label>
              <textarea id="dhathu" v-model="dhathu" class="input-textarea" placeholder="Dhathu"></textarea>
            </div>
            <div class="form-item">
              <label for="mala" class="label">Mala:</label>
              <textarea id="mala" v-model="mala" class="input-textarea" placeholder="Mala"></textarea>
            </div>
            <div class="form-item">
              <label for="ahara" class="label">Ahara:</label>
              <textarea id="ahara" v-model="ahara" class="input-textarea" placeholder="Ahara"></textarea>
            </div>
          </div>
          <div class="form-group row">
            <div class="form-item">
              <label for="desha" class="label">Desha:</label>
              <textarea id="desha" v-model="desha" class="input-textarea" placeholder="Desha"></textarea>
            </div>
            <div class="form-item">
              <label for="bala" class="label">Bala:</label>
              <textarea id="bala" v-model="bala" class="input-textarea" placeholder="Bala"></textarea>
            </div>
            <div class="form-item">
              <label for="kala" class="label">Kala:</label>
              <textarea id="kala" v-model="kala" class="input-textarea" placeholder="Kala"></textarea>
            </div>
            <div class="form-item">
              <label for="analam" class="label">Analam:</label>
              <textarea id="analam" v-model="analam" class="input-textarea" placeholder="Analam"></textarea>
            </div>
          </div>
          <div class="form-group row">
            <div class="form-item">
              <label for="prakruti" class="label">Prakruti:</label>
              <textarea id="prakruti" v-model="prakruti" class="input-textarea" placeholder="Prakruti"></textarea>
            </div>
            <div class="form-item">
              <label for="vayah" class="label">Vayah:</label>
              <textarea id="vayah" v-model="vayah" class="input-textarea" placeholder="Vayah"></textarea>
            </div>
            <div class="form-item">
              <label for="satwa" class="label">Satwa:</label>
              <textarea id="satwa" v-model="satwa" class="input-textarea" placeholder="Satwa"></textarea>
            </div>
            <div class="form-item">
              <label for="satmya" class="label">Satmya:</label>
              <textarea id="satmya" v-model="satmya" class="input-textarea" placeholder="Satmya"></textarea>
            </div>
          </div>
        </div>
  
        <!-- Rogi Pareeksha -->
        <div class="form-group">
          <h4 class="subsection-title">Rogi Pareeksha</h4>
          <hr class="section-divider" />
          <div class="form-group row">
            <div class="form-item">
              <label for="nidanam" class="label">Nidanam:</label>
              <textarea id="nidanam" v-model="nidanam" class="input-textarea" placeholder="Nidanam"></textarea>
            </div>
            <div class="form-item">
              <label for="samprapthi" class="label">Samprapthi:</label>
              <textarea id="samprapthi" v-model="samprapthi" class="input-textarea" placeholder="Samprapthi"></textarea>
            </div>
            <div class="form-item">
              <label for="poorvaroopam" class="label">Poorvaroopam:</label>
              <textarea id="poorvaroopam" v-model="poorvaroopam" class="input-textarea" placeholder="Poorvaroopam"></textarea>
            </div>
            <div class="form-item">
              <label for="roopam" class="label">Roopam:</label>
              <textarea id="roopam" v-model="roopam" class="input-textarea" placeholder="Roopam"></textarea>
            </div>
          </div>
          <div class="form-group row">
            <div class="form-item">
              <label for="upasayam" class="label">Upasayam:</label>
              <textarea id="upasayam" v-model="upasayam" class="input-textarea" placeholder="Upasayam"></textarea>
            </div>
          </div>
        </div>
  
        <!-- Additional Details -->
        <div class="form-group">
          <label for="srotas-involved" class="label1">Srotas Involved:</label>
          <textarea id="srotas-involved" v-model="srotasInvolved" class="input-textarea" placeholder=""></textarea>
        </div>
        <div class="form-group">
          <label for="rogamarga" class="label1">Rogamarga:</label>
          <textarea id="rogamarga" v-model="rogamarga" class="input-textarea" placeholder=""></textarea>
        </div>
        <div class="form-group">
          <label for="rogadishtanam" class="label1">Rogadishtanam:</label>
          <textarea id="rogadishtanam" v-model="rogadishtanam" class="input-textarea" placeholder=""></textarea>
        </div>
      </div>
  
      <!-- Table Component -->
      <div class="table-container">
        <TablePhysical @submit-data="handleDataSubmission" />
        <button @click="handleSubmit" class="submit-button">Submit</button>
      </div>
    </div>
  </template>
  
  <script>
import TablePhysical from './TablePhysical.vue';
// Adjust the path if TablePhysical.vue is in a different directory

export default {
  components: {
    TablePhysical, // Register the TablePhysical component
  },
  data() {
    return {
      physicalExamination: "",
      systemicExamination: "",
      nadi: "",
      mutra: "",
      malam: "",
      jihwa: "",
      sabda: "",
      sparsa: "",
      drik: "",
      akriti: "",
      dosha: "",
      dhathu: "",
      mala: "",
      ahara: "",
      desha: "",
      bala: "",
      kala: "",
      analam: "",
      prakruti: "",
      vayah: "",
      satwa: "",
      satmya: "",
      nidanam: "",
      samprapthi: "",
      poorvaroopam: "",
      roopam: "",
      upasayam: "",
      srotasInvolved: "",
      rogamarga: "",
      rogadishtanam: "",
      tableData: [], // Data to be passed to TablePhysical
    };
  },
  methods: {
    handleSubmit() {
      // Collect data to be sent to the database
      const data = {
        physicalExamination: this.physicalExamination,
        systemicExamination: this.systemicExamination,
        nadi: this.nadi,
        mutra: this.mutra,
        malam: this.malam,
        jihwa: this.jihwa,
        sabda: this.sabda,
        sparsa: this.sparsa,
        drik: this.drik,
        akriti: this.akriti,
        dosha: this.dosha,
        dhathu: this.dhathu,
        mala: this.mala,
        ahara: this.ahara,
        desha: this.desha,
        bala: this.bala,
        kala: this.kala,
        analam: this.analam,
        prakruti: this.prakruti,
        vayah: this.vayah,
        satwa: this.satwa,
        satmya: this.satmya,
        nidanam: this.nidanam,
        samprapthi: this.samprapthi,
        poorvaroopam: this.poorvaroopam,
        roopam: this.roopam,
        upasayam: this.upasayam,
        srotasInvolved: this.srotasInvolved,
        rogamarga: this.rogamarga,
        rogadishtanam: this.rogadishtanam,
        tableData: this.$refs.tablePhysical.getData(), // Get data from TablePhysical
      };

      // Send data to the server
      fetch('/api/submit', { // Adjust the URL to your API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(result => {
          console.log('Success:', result);
          // Handle success (e.g., show a message, clear form, etc.)
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle error
        });
    },
  },
};
</script>


  <style scoped>
  .examination-tab {
    background-color: #4e8c80; /* Teal background color */
    padding: 40px;
    display: flex;
    height: auto;
    flex-direction: column;
    align-items: center;
    min-height: 100hv;
    max-height: auto;
    width: 100%; /* Cover the whole page width */
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
  }
  
  .section-title {
    color: #ffffff; /* White text color */
    background-color: #4e8c80; /* Darker teal background color */
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    font-size: 25px;
    padding: 10px 20px; /* Add padding for better appearance */
    border-radius: 4px; /* Optional: add rounded corners */
    text-transform: uppercase; /* Uppercase text */
    display: inline-block; /* Make it like a button */
    cursor: pointer; /* Add cursor pointer for button-like feel */
  }
  
  .subsection-title {
    color: #000000; /* Black text color */
    font-weight: bold;
    text-align: left;
    margin-bottom: 10px;
    padding: 8px 3px; /* Add padding for better appearance */
    border-radius: 4px; /* Optional: add rounded corners */
    text-transform: uppercase; /* Uppercase text */
    width: 100%;
    margin-right: 40%; /* Align with the start of the text boxes */
  }
  
  .section-divider {
    width: 100%;
    max-width: 1000px; /* Cover the whole page width */
    margin-bottom: 20px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 20px;
  }

  .sub-subsection-title{
    color: #000000;
    font-size: 17px;
    margin-bottom: 10px;
  }

  .label1{
    color: #000000; /* Black text color */
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 10px;
    align-self: flex-start; 
  }
  
  .form-group.row {
    flex-direction: row; /* Arrange items in a row */
    justify-content: space-between;
    margin-left: 2px;
  }
  
  .form-item {
    display: flex;
    flex-direction: column;
    width: 23%; /* Adjust width to fit four items in one row */
  }
  
  .label {
    color: #000000; /* Black text color */
    text-transform: capitalize;
    font-weight: bold;
    margin-bottom: 10px;
    align-self: flex-start; /* Align label to the start (left) */
  }
  
  .input-textarea {
    width: 100%;
    padding: 8px; /* Adjust padding for smaller inputs */
    font-size: 18px;
    border: 1px solid #ccc;
    font-family: 'Courier New', Courier, monospace;
    border-radius: 4px; /* Curved borders */
    resize: vertical;
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
    background-color: #ffffff; /* White background for inputs */
  }

  .submit-button {
  align-self: flex-end;
  background-color: #303231; /* Dark grey background color */
  color: #ffffff;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  margin-left: 95%;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  margin-top: 20px;
}
  </style>
  