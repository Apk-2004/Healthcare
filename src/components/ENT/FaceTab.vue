<template>
    <div class="notes-section">
      <h3>Face</h3>
      <quill-editor v-model="notes" :options="editorOptions"></quill-editor>
    </div>
  </template>
  
  <script>
  import { quillEditor } from 'vue-quill-editor';
  
  // Import Quill styles
  import 'quill/dist/quill.snow.css';
  
  export default {
    name: 'NotesSection',
    components: {
      quillEditor,
    },
    data() {
      return {
        notes: '',
        editorOptions: {
          theme: 'snow',
          modules: {
            toolbar: [
              [{ 'font': [] }],
              ['bold', 'italic', 'underline', 'strike'],
              [{ 'script': 'sub' }, { 'script': 'super' }],
              [{ 'size': [] }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'align': [] }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }], // Undo and redo
              ['blockquote'], // Example of expand option (replace with desired feature)
              ['link', 'image', 'video'],
              ['code-block'],
              [{ 'help': '' }] // Help (custom implementation)
            ],
            handlers: {
              help: function() {
                // Add your help functionality here
                alert('Help functionality goes here!');
              }
            }
          }
        }
      };
    }
  };
  </script>
  
  <style scoped>
  .notes-section {
    width: 100%;
    max-width: 850px; /* Adjusted max-width for better alignment with other components */
    margin-top: 20px;
    background-color: #e7feff;
    padding: 0px;
    margin-left: 20px;
    border-block-color: #000;
    margin-right: 28%;
  }
  
  h3 {
    font-size: 18px; /* Increased font size for better readability */
    margin-bottom: 10px;
    margin-right: 98%;
  }
  </style>