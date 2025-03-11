<template>
  <div class="notes-section">
    <h3>Notes-</h3>
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
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['blockquote'],
            ['link', 'image', 'video'],
            ['code-block'],
            [{ 'help': '' }]
          ],
          handlers: {
            help: function() {
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
  max-width: 500px;
  margin-top: 10px;
  background-color: #ffffff;
  padding: 10px;
  border: 1px solid #ffffff;
  margin-right: 28%;
  margin-bottom: 20px;
  overflow: hidden; /* Ensure container does not overflow */
}

.quill-editor {
  height: 150px; /* Fixed height for the editor */
  overflow-y: auto; /* Scroll vertically if content overflows */
}

h3 {
  font-size: 18px;
  margin-bottom: 10px;
  margin-right: 98%;
}

/* Media Query for Responsiveness */
@media (max-width: 768px) {
  .notes-section {
    max-width: 100%;
    margin-right: 0;
    padding: 10px;
  }

  h3 {
    font-size: 16px;
    margin-right: 0;
  }

  .quill-editor {
    height: 150px; /* Adjust height for smaller screens */
  }
}
</style>
