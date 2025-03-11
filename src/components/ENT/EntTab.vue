<template>
  <div class="ent-examination-tab">
    <h3 class="subsection-title">Ears</h3>
    <div class="divider"></div>
    <EarsTab />

    <h3 class="subsection-title">Nose</h3>
    <div class="divider"></div>
    <NoseTab />

    <h3 class="subsection-title">Anterior Rhinoscopy</h3>
    <div class="divider"></div>
    <AnteriorRhinoscopyTab />

    <h3 class="subsection-title">Oral Cavity</h3>
    <div class="divider"></div>
    <OralCavityTab />

    <h3 class="subsection-title">Laryngopharynx</h3>
    <div class="divider"></div>
    <LaryngopharynxTab />

    <h3 class="subsection-title">Neck</h3>
    <div class="divider"></div>
    <NeckTab />

    <h3 class="subsection-title">Face</h3>
    <div class="divider"></div>
    <FaceTab />
  </div>
</template>

<script>
import EarsTab from './EarsTab.vue';
import NoseTab from './NoseTab.vue';
import AnteriorRhinoscopyTab from './AnteriorRhinoscopyTab.vue';
import OralCavityTab from './OralCavityTab.vue';
import LaryngopharynxTab from './LaryngopharynxTab.vue';
import NeckTab from './NeckTab.vue';
import FaceTab from './FaceTab.vue';

export default {
  name: "ENTExaminationTab",
  components: {
    EarsTab,
    NoseTab,
    AnteriorRhinoscopyTab,
    OralCavityTab,
    LaryngopharynxTab,
    NeckTab,
    FaceTab
  }
};
</script>

<style scoped>
.ent-examination-tab {
  padding: 20px;
}

.subsection-title {
  color: #333;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 18px;
}

.divider {
  border-top: 1px solid #ccc;
  margin: 10px 0;
}
</style>

  <style scoped>
  .ent-examination-tab {
    padding: 20px;
  }
  
  .subsection-title {
    color: #2e2e2e; /* Dark gray color */
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 10px;
    width: 1000px; /* Cover the whole page width */
    text-align: left; /* Align text to the left */
  }
  
  .divider {
    border-top: 1px solid white;
    width: 100%; /* Ensure the divider covers the whole width */
    margin: 20px 0;
  }
  </style>
  