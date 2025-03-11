<template>
    <div class="history-present-illness-tab">
      <div class="section-header">
        <h3 class="subsection-title">History of Present Illness</h3>
      </div>
      <hr class="divider" />
  
      <!-- Cardiovascular System -->
      <div class="subsection cardiovascular">
        <h4 class="subsection-title">Cardiovascular System</h4>
        <div class="illness-row">
          <div class="illness-name">Chest Pain:</div>
          <div class="illness-radio">
            <label><input type="radio" v-model="presentIllness.cardiovascular.chestPain" value="yes"> YES</label>
            <label><input type="radio" v-model="presentIllness.cardiovascular.chestPain" value="no"> NO</label>
            <div v-if="presentIllness.cardiovascular.chestPain === 'yes'" class="illness-details">
              <input type="text" v-model="presentIllness.cardiovascular.chestPainDetails" placeholder="Details">
            </div>
          </div>
        </div>
        <div class="illness-row">
        <div class="illness-name">Palpitation:</div>
        <div class="illness-radio">
          <label><input type="radio" v-model="presentIllness.cardiovascular.palpitation" value="yes"> YES</label>
          <label><input type="radio" v-model="presentIllness.cardiovascular.palpitation" value="no"> NO</label>
          <div v-if="presentIllness.cardiovascular.palpitation === 'yes'" class="illness-details">
            <input type="text" v-model="presentIllness.cardiovascular.palpitationDetails" placeholder="Details">
          </div>
        </div>
      </div>
      <div class="illness-row">
        <div class="illness-name">Syncope:</div>
        <div class="illness-radio">
          <label><input type="radio" v-model="presentIllness.cardiovascular.syncope" value="yes"> YES</label>
          <label><input type="radio" v-model="presentIllness.cardiovascular.syncope" value="no"> NO</label>
          <div v-if="presentIllness.cardiovascular.syncope === 'yes'" class="illness-details">
            <input type="text" v-model="presentIllness.cardiovascular.syncopeDetails" placeholder="Details">
          </div>
        </div>
      </div>
      <div class="illness-row">
        <div class="illness-name">DOE:</div>
        <div class="illness-radio">
          <label><input type="radio" v-model="presentIllness.cardiovascular.doe" value="yes"> YES</label>
          <label><input type="radio" v-model="presentIllness.cardiovascular.doe" value="no"> NO</label>
          <div v-if="presentIllness.cardiovascular.doe === 'yes'" class="illness-details">
            <input type="text" v-model="presentIllness.cardiovascular.doeDetails" placeholder="Details">
          </div>
        </div>
      </div>
      <div class="illness-row">
        <div class="illness-name">Edema:</div>
        <div class="illness-radio">
          <label><input type="radio" v-model="presentIllness.cardiovascular.edema" value="yes"> YES</label>
          <label><input type="radio" v-model="presentIllness.cardiovascular.edema" value="no"> NO</label>
          <div v-if="presentIllness.cardiovascular.edema === 'yes'" class="illness-details">
            <input type="text" v-model="presentIllness.cardiovascular.edemaDetails" placeholder="Details">
          </div>
        </div>
      </div>
      <div class="illness-row">
        <div class="illness-name">Giddiness:</div>
        <div class="illness-radio">
          <label><input type="radio" v-model="presentIllness.cardiovascular.giddiness" value="yes"> YES</label>
          <label><input type="radio" v-model="presentIllness.cardiovascular.giddiness" value="no"> NO</label>
          <div v-if="presentIllness.cardiovascular.giddiness === 'yes'" class="illness-details">
            <input type="text" v-model="presentIllness.cardiovascular.giddinessDetails" placeholder="Details">
          </div>
        </div>
      </div>
        <!-- Continue with other Cardiovascular symptoms -->
  
      </div>
  
      <!-- Respiratory System -->
      <div class="subsection respiratory">
        <h4 class="subsection-title">Respiratory System</h4>
        <div class="illness-row">
          <div class="illness-name">Cough:</div>
          <div class="illness-radio">
            <label><input type="radio" v-model="presentIllness.respiratory.cough" value="yes"> YES</label>
            <label><input type="radio" v-model="presentIllness.respiratory.cough" value="no"> NO</label>
            <div v-if="presentIllness.respiratory.cough === 'yes'" class="illness-details">
              <input type="text" v-model="presentIllness.respiratory.coughDetails" placeholder="Details">
            </div>
          </div>
        </div>
        <div class="illness-row">
    <div class="illness-name">Wheezing:</div>
    <div class="illness-radio">
      <label><input type="radio" v-model="presentIllness.respiratory.wheezing" value="yes"> YES</label>
      <label><input type="radio" v-model="presentIllness.respiratory.wheezing" value="no"> NO</label>
      <div v-if="presentIllness.respiratory.wheezing === 'yes'" class="illness-details">
        <input type="text" v-model="presentIllness.respiratory.wheezingDetails" placeholder="Details">
      </div>
    </div>
  </div>

  <div class="illness-row">
    <div class="illness-name">Hemoptysis:</div>
    <div class="illness-radio">
      <label><input type="radio" v-model="presentIllness.respiratory.hemoptysis" value="yes"> YES</label>
      <label><input type="radio" v-model="presentIllness.respiratory.hemoptysis" value="no"> NO</label>
      <div v-if="presentIllness.respiratory.hemoptysis === 'yes'" class="illness-details">
        <input type="text" v-model="presentIllness.respiratory.hemoptysisDetails" placeholder="Details">
      </div>
    </div>
  </div>
        
        <!-- Continue with other Respiratory symptoms -->
  
      </div>
  
      <!-- Central Nervous System -->
      <div class="subsection central-nervous">
        <h4 class="subsection-title">Central Nervous System</h4>
        <div class="illness-row">
          <div class="illness-name">Numbness:</div>
          <div class="illness-radio">
            <label><input type="radio" v-model="presentIllness.centralNervous.numbness" value="yes"> YES</label>
            <label><input type="radio" v-model="presentIllness.centralNervous.numbness" value="no"> NO</label>
            <div v-if="presentIllness.centralNervous.numbness === 'yes'" class="illness-details">
              <input type="text" v-model="presentIllness.centralNervous.numbnessDetails" placeholder="Details">
            </div>
          </div>
        </div>
        <div class="illness-row">
    <div class="illness-name">Burning Pain:</div>
    <div class="illness-radio">
      <label><input type="radio" v-model="presentIllness.centralNervous.burningPain" value="yes"> YES</label>
      <label><input type="radio" v-model="presentIllness.centralNervous.burningPain" value="no"> NO</label>
      <div v-if="presentIllness.centralNervous.burningPain === 'yes'" class="illness-details">
        <input type="text" v-model="presentIllness.centralNervous.burningPainDetails" placeholder="Details">
      </div>
    </div>
  </div>
  <div class="illness-row">
    <div class="illness-name">Tingling:</div>
    <div class="illness-radio">
      <label><input type="radio" v-model="presentIllness.centralNervous.tingling" value="yes"> YES</label>
      <label><input type="radio" v-model="presentIllness.centralNervous.tingling" value="no"> NO</label>
      <div v-if="presentIllness.centralNervous.tingling === 'yes'" class="illness-details">
        <input type="text" v-model="presentIllness.centralNervous.tinglingDetails" placeholder="Details">
      </div>
    </div>
  </div>
  <div class="illness-row">
    <div class="illness-name">Pricking Pain:</div>
    <div class="illness-radio">
      <label><input type="radio" v-model="presentIllness.centralNervous.prickingPain" value="yes"> YES</label>
      <label><input type="radio" v-model="presentIllness.centralNervous.prickingPain" value="no"> NO</label>
      <div v-if="presentIllness.centralNervous.prickingPain === 'yes'" class="illness-details">
        <input type="text" v-model="presentIllness.centralNervous.prickingPainDetails" placeholder="Details">
      </div>
    </div>
  </div>
  <div class="illness-row">
    <div class="illness-name">Loss of Sensation:</div>
    <div class="illness-radio">
      <label><input type="radio" v-model="presentIllness.centralNervous.lossOfSensation" value="yes"> YES</label>
      <label><input type="radio" v-model="presentIllness.centralNervous.lossOfSensation" value="no"> NO</label>
      <div v-if="presentIllness.centralNervous.lossOfSensation === 'yes'" class="illness-details">
        <input type="text" v-model="presentIllness.centralNervous.lossOfSensationDetails" placeholder="Details">
      </div>
    </div>
  </div>
  <div class="illness-row">
    <div class="illness-name">Cotton wool Sensation:</div>
    <div class="illness-radio">
      <label><input type="radio" v-model="presentIllness.centralNervous.cottonWoolSensation" value="yes"> YES</label>
      <label><input type="radio" v-model="presentIllness.centralNervous.cottonWoolSensation" value="no"> NO</label>
      <div v-if="presentIllness.centralNervous.cottonWoolSensation === 'yes'" class="illness-details">
        <input type="text" v-model="presentIllness.centralNervous.cottonWoolSensationDetails" placeholder="Details">
      </div>
    </div>
  </div>
  <div class="illness-row">
    <div class="illness-name">Excess Sweating:</div>
    <div class="illness-radio">
      <label><input type="radio" v-model="presentIllness.centralNervous.excessSweating" value="yes"> YES</label>
      <label><input type="radio" v-model="presentIllness.centralNervous.excessSweating" value="no"> NO</label>
      <div v-if="presentIllness.centralNervous.excessSweating === 'yes'" class="illness-details">
        <input type="text" v-model="presentIllness.centralNervous.excessSweatingDetails" placeholder="Details">
      </div>
    </div>
  </div>
  <div class="illness-row">
    <div class="illness-name">Giddiness on Standing:</div>
    <div class="illness-radio">
      <label><input type="radio" v-model="presentIllness.centralNervous.giddinessOnStanding" value="yes"> YES</label>
      <label><input type="radio" v-model="presentIllness.centralNervous.giddinessOnStanding" value="no"> NO</label>
      <div v-if="presentIllness.centralNervous.giddinessOnStanding === 'yes'" class="illness-details">
        <input type="text" v-model="presentIllness.centralNervous.giddinessOnStandingDetails" placeholder="Details">
      </div>
    </div>
  </div>
  <div class="illness-row">
    <div class="illness-name">Paralysis of Limbs:</div>
    <div class="illness-radio">
      <label><input type="radio" v-model="presentIllness.centralNervous.paralysisOfLimbs" value="yes"> YES</label>
      <label><input type="radio" v-model="presentIllness.centralNervous.paralysisOfLimbs" value="no"> NO</label>
      <div v-if="presentIllness.centralNervous.paralysisOfLimbs === 'yes'" class="illness-details">
        <input type="text" v-model="presentIllness.centralNervous.paralysisOfLimbsDetails" placeholder="Details">
      </div>
    </div>
  </div>
  <div class="illness-row">
    <div class="illness-name">Speech Difficulties:</div>
    <div class="illness-radio">
      <label><input type="radio" v-model="presentIllness.centralNervous.speechDifficulties" value="yes"> YES</label>
      <label><input type="radio" v-model="presentIllness.centralNervous.speechDifficulties" value="no"> NO</label>
      <div v-if="presentIllness.centralNervous.speechDifficulties === 'yes'" class="illness-details">
        <input type="text" v-model="presentIllness.centralNervous.speechDifficultiesDetails" placeholder="Details">
      </div>
    </div>
  </div>
        <!-- Continue with other Central Nervous symptoms -->
  
      </div>
  
      <!-- Gastrointestinal System -->
      <div class="subsection gastrointestinal">
        <h4 class="subsection-title">Gastrointestinal System</h4>
        <div class="illness-row">
          <div class="illness-name">Nausea:</div>
          <div class="illness-radio">
            <label><input type="radio" v-model="presentIllness.gastrointestinal.nausea" value="yes"> YES</label>
            <label><input type="radio" v-model="presentIllness.gastrointestinal.nausea" value="no"> NO</label>
            <div v-if="presentIllness.gastrointestinal.nausea === 'yes'" class="illness-details">
              <input type="text" v-model="presentIllness.gastrointestinal.nauseaDetails" placeholder="Details">
            </div>
          </div>
        </div>
        <div class="illness-row">
    <div class="illness-name">Vomiting:</div>
    <div class="illness-radio">
      <label><input type="radio" v-model="presentIllness.gastrointestinal.vomiting" value="yes"> YES</label>
      <label><input type="radio" v-model="presentIllness.gastrointestinal.vomiting" value="no"> NO</label>
      <div v-if="presentIllness.gastrointestinal.vomiting === 'yes'" class="illness-details">
        <input type="text" v-model="presentIllness.gastrointestinal.vomitingDetails" placeholder="Details">
      </div>
    </div>
  </div>
  <div class="illness-row">
    <div class="illness-name">Diarrhea:</div>
    <div class="illness-radio">
      <label><input type="radio" v-model="presentIllness.gastrointestinal.diarrhea" value="yes"> YES</label>
      <label><input type="radio" v-model="presentIllness.gastrointestinal.diarrhea" value="no"> NO</label>
      <div v-if="presentIllness.gastrointestinal.diarrhea === 'yes'" class="illness-details">
        <input type="text" v-model="presentIllness.gastrointestinal.diarrheaDetails" placeholder="Details">
      </div>
    </div>
  </div>
  <div class="illness-row">
    <div class="illness-name">Constipation:</div>
    <div class="illness-radio">
      <label><input type="radio" v-model="presentIllness.gastrointestinal.constipation" value="yes"> YES</label>
      <label><input type="radio" v-model="presentIllness.gastrointestinal.constipation" value="no"> NO</label>
      <div v-if="presentIllness.gastrointestinal.constipation === 'yes'" class="illness-details">
        <input type="text" v-model="presentIllness.gastrointestinal.constipationDetails" placeholder="Details">
      </div>
    </div>
  </div>
  <div class="illness-row">
    <div class="illness-name">Gaseous Problems:</div>
    <div class="illness-radio">
      <label><input type="radio" v-model="presentIllness.gastrointestinal.gaseousProblems" value="yes"> YES</label>
      <label><input type="radio" v-model="presentIllness.gastrointestinal.gaseousProblems" value="no"> NO</label>
      <div v-if="presentIllness.gastrointestinal.gaseousProblems === 'yes'" class="illness-details">
        <input type="text" v-model="presentIllness.gastrointestinal.gaseousProblemsDetails" placeholder="Details">
      </div>
    </div>
  </div>
        <!-- Continue with other Gastrointestinal symptoms -->
  
      </div>
  
      <!-- Skin -->
      <div class="subsection skin">
        <h4 class="subsection-title">Skin</h4>
        <div class="illness-row">
          <div class="illness-name">Itching:</div>
          <div class="illness-radio">
            <label><input type="radio" v-model="presentIllness.skin.itching" value="yes"> YES</label>
            <label><input type="radio" v-model="presentIllness.skin.itching" value="no"> NO</label>
            <div v-if="presentIllness.skin.itching === 'yes'" class="illness-details">
              <input type="text" v-model="presentIllness.skin.itchingDetails" placeholder="Details">
            </div>
          </div>
        </div>
        <div class="illness-row">
    <div class="illness-name">Boils:</div>
    <div class="illness-radio">
      <label><input type="radio" v-model="presentIllness.skin.boils" value="yes"> YES</label>
      <label><input type="radio" v-model="presentIllness.skin.boils" value="no"> NO</label>
      <div v-if="presentIllness.skin.boils === 'yes'" class="illness-details">
        <input type="text" v-model="presentIllness.skin.boilsDetails" placeholder="Details">
      </div>
    </div>
  </div>
  <div class="illness-row">
    <div class="illness-name">Foot Ulcers:</div>
    <div class="illness-radio">
      <label><input type="radio" v-model="presentIllness.skin.footUlcers" value="yes"> YES</label>
      <label><input type="radio" v-model="presentIllness.skin.footUlcers" value="no"> NO</label>
      <div v-if="presentIllness.skin.footUlcers === 'yes'" class="illness-details">
        <input type="text" v-model="presentIllness.skin.footUlcersDetails" placeholder="Details">
      </div>
    </div>
  </div>
  <div class="illness-row">
    <div class="illness-name">Redness:</div>
    <div class="illness-radio">
      <label><input type="radio" v-model="presentIllness.skin.redness" value="yes"> YES</label>
      <label><input type="radio" v-model="presentIllness.skin.redness" value="no"> NO</label>
      <div v-if="presentIllness.skin.redness === 'yes'" class="illness-details">
        <input type="text" v-model="presentIllness.skin.rednessDetails" placeholder="Details">
      </div>
    </div>
  </div>
  <div class="illness-row">
    <div class="illness-name">Others:</div>
    <div class="illness-radio">
      <label><input type="radio" v-model="presentIllness.skin.others" value="yes"> YES</label>
      <label><input type="radio" v-model="presentIllness.skin.others" value="no"> NO</label>
      <div v-if="presentIllness.skin.others === 'yes'" class="illness-details">
        <input type="text" v-model="presentIllness.skin.othersDetails" placeholder="Details">
      </div>
    </div>
  </div>
        <!-- Continue with other Skin symptoms -->
  
      </div>
  
      <!-- Eye -->
      <div class="subsection eye">
        <h4 class="subsection-title">Eye</h4>
        <div class="illness-row">
          <div class="illness-name">Visual Disturbances:</div>
          <div class="illness-radio">
            <label><input type="radio" v-model="presentIllness.eye.visualDisturbances" value="yes"> YES</label>
            <label><input type="radio" v-model="presentIllness.eye.visualDisturbances" value="no"> NO</label>
            <div v-if="presentIllness.eye.visualDisturbances === 'yes'" class="illness-details">
              <input type="text" v-model="presentIllness.eye.visualDisturbancesDetails" placeholder="Details">
            </div>
          </div>
        </div>
        <div class="illness-row">
    <div class="illness-name">Blurring:</div>
    <div class="illness-radio">
      <label><input type="radio" v-model="presentIllness.eye.blurring" value="yes"> YES</label>
      <label><input type="radio" v-model="presentIllness.eye.blurring" value="no"> NO</label>
      <div v-if="presentIllness.eye.blurring === 'yes'" class="illness-details">
        <input type="text" v-model="presentIllness.eye.blurringDetails" placeholder="Details">
      </div>
    </div>
  </div>
  <div class="illness-row">
    <div class="illness-name">Infections:</div>
    <div class="illness-radio">
      <label><input type="radio" v-model="presentIllness.eye.infections" value="yes"> YES</label>
      <label><input type="radio" v-model="presentIllness.eye.infections" value="no"> NO</label>
      <div v-if="presentIllness.eye.infections === 'yes'" class="illness-details">
        <input type="text" v-model="presentIllness.eye.infectionsDetails" placeholder="Details">
      </div>
    </div>
  </div>
  <div class="illness-row">
    <div class="illness-name">Floaters:</div>
    <div class="illness-radio">
      <label><input type="radio" v-model="presentIllness.eye.floaters" value="yes"> YES</label>
      <label><input type="radio" v-model="presentIllness.eye.floaters" value="no"> NO</label>
      <div v-if="presentIllness.eye.floaters === 'yes'" class="illness-details">
        <input type="text" v-model="presentIllness.eye.floatersDetails" placeholder="Details">
      </div>
    </div>
  </div>
  <div class="illness-row">
    <div class="illness-name">Itching:</div>
    <div class="illness-radio">
      <label><input type="radio" v-model="presentIllness.eye.itching" value="yes"> YES</label>
      <label><input type="radio" v-model="presentIllness.eye.itching" value="no"> NO</label>
      <div v-if="presentIllness.eye.itching === 'yes'" class="illness-details">
        <input type="text" v-model="presentIllness.eye.itchingDetails" placeholder="Details">
      </div>
    </div>
  </div>
        <!-- Continue with other Eye symptoms -->
  
      </div>
  
      <!-- Dental -->
      <div class="subsection dental">
        <h4 class="subsection-title">Dental</h4>
        <div class="illness-row">
          <div class="illness-name">Dental Symptoms:</div>
          <div class="illness-radio">
            <label><input type="radio" v-model="presentIllness.dental.dentalSymptoms" value="yes"> YES</label>
            <label><input type="radio" v-model="presentIllness.dental.dentalSymptoms" value="no"> NO</label>
            <div v-if="presentIllness.dental.dentalSymptoms === 'yes'" class="illness-details">
              <input type="text" v-model="presentIllness.dental.dentalSymptomsDetails" placeholder="Details">
            </div>
          </div>
        </div>
  
        <!-- Continue with other Dental symptoms -->
  
      </div>
  
      <hr class="divider" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        presentIllness: {
          cardiovascular: {
            chestPain: '',
            chestPainDetails: '',
            palpitation: '',
            palpitationDetails: '',
            syncope: '',
            syncopeDetails: '',
            doe: '',
            doeDetails: '',
            edema: '',
            edemaDetails: '',
            giddiness: '',
            giddinessDetails: ''
          },
          respiratory: {
            cough: '',
            coughDetails: '',
            wheezing: '',
            wheezingDetails: '',
            hemoptysis: '',
            hemoptysisDetails: ''
          },
          centralNervous: {
            numbness: '',
            numbnessDetails: '',
            burningPain: '',
            burningPainDetails: '',
            tingling: '',
            tinglingDetails: '',
            prickingPain: '',
            prickingPainDetails: '',
            lossOfSensation: '',
            lossOfSensationDetails: '',
            cottonWoolSensation: '',
            cottonWoolSensationDetails: '',
            excessSweating: '',
            excessSweatingDetails: '',
            giddinessOnStanding: '',
            giddinessOnStandingDetails: '',
            paralysisOfLimbs: '',
            paralysisOfLimbsDetails: '',
            speechDifficulties: '',
            speechDifficultiesDetails: ''
          },
          gastrointestinal: {
            nausea: '',
            nauseaDetails: '',
            vomiting: '',
            vomitingDetails: '',
            diarrhea: '',
            diarrheaDetails: '',
            constipation: '',
            constipationDetails: '',
            gaseousProblems: '',
            gaseousProblemsDetails: ''
          },
          skin: {
            itching: '',
            itchingDetails: '',
            boils: '',
            boilsDetails: '',
            footUlcers: '',
            footUlcersDetails: '',
            redness: '',
            rednessDetails: '',
            others: '',
            othersDetails: ''
          },
          eye: {
            visualDisturbances: '',
            visualDisturbancesDetails: '',
            blurring: '',
            blurringDetails: '',
            infections: '',
            infectionsDetails: '',
            floaters: '',
            floatersDetails: '',
            itchingEye: '',
            itchingEyeDetails: ''
          },
          dental: {
            dentalSymptoms: '',
            dentalSymptomsDetails: ''
          }
          // Add more systems and symptoms as needed
        }
      };
    },
    methods: {
    emitData() {
      this.$emit('update:historyOfPresentIllness', this.historyOfPresentIllness);
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
    margin-right: 20px;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  
  .divider {
    border-top: 1px solid white;
    width: 100%;
    margin: 20px 0px;
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
    margin-right: 10px;
    text-transform: uppercase;
  }
  
  .illness-details {
    margin-left: 5px;
    width: 300px;
  }
  
  .illness-details input {
    width: 100%;
    margin-left: 90px;
    padding: 10px;
    background-color: #ffffff; /* Background color for details tabs */
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .subsection {
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 4px;
    text-transform: capitalize;
    background-color: #e7feff;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  
 
  </style>
  
  