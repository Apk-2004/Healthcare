<template>
    <div class="pediatric-case-sheet">
      <div class="tab-container">
        <ComplaintTab />
        
        <!-- Add other tabs or content here as needed -->
      </div>
    </div>
  </template>
  
  <script>
  import ComplaintTab from '@/components/Pediatric/ComplaintTab.vue';
  
 
  

  export default {
    name: 'PediatricCaseSheet',
    components: {
      ComplaintTab,
     
      


  
    }
  };
  </script>