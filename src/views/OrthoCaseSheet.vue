<template>
  <div class="ortho-case-sheet">
    <div class="tab-container">
      <ComplaintTab />
      <ExaminationTab />
      <InvestigationTab />
      <DocketTab />
      <DiagnosisTab />
      <TreatmentTab />
      <!-- Add other tabs or content here as needed -->
    </div>
  </div>
</template>

<script>
import ComplaintTab from '@/components/ortho/ComplaintTab.vue';
import ExaminationTab from '@/components/ortho/ExaminationTab.vue';
import InvestigationTab from '@/components/ortho/InvestigationTab.vue';
import DocketTab from '@/components/ortho/DocketTab.vue';
import DiagnosisTab from '@/components/ortho/DiagnosisTab.vue';
import TreatmentTab from '@/components/ortho/TreatmentTab.vue';

export default {
  name: 'OrthoCaseSheet',
  components: {
    ComplaintTab,
    ExaminationTab,
    InvestigationTab,
    DocketTab,
    DiagnosisTab,
    TreatmentTab,

  }
};
</script>

<style scoped>


</style>
