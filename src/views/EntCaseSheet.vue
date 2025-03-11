<template>
    <div class="ent-case-sheet">
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
  import ComplaintTab from '@/components/Diabetes/ComplaintTab.vue';
  import ExaminationTab from '@/components/ENT/ExaminationTab.vue';
  import InvestigationTab from '@/components/ortho/InvestigationTab.vue';
  import DocketTab from '@/components/ortho/DocketTab.vue';
  import DiagnosisTab from '@/components/Diabetes/DiagnosisTab.vue';
  import TreatmentTab from '@/components/Diabetes/TreatmentTab.vue';
  

  export default {
    name: 'EntCaseSheet',
    components: {
      ComplaintTab,
      ExaminationTab,
      InvestigationTab,
      DocketTab,
      DiagnosisTab,
      TreatmentTab
  
    }
  };
  </script>