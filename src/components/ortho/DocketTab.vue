<template>
  <div class="docket-tab">
    <h2 class="section-title">DOCKET TAB</h2>

    <div class="upload-section">
      <label for="imageUpload" class="upload-label">Upload Images:</label>
      <input type="file" id="imageUpload" @change="handleImageSelection" accept="image/*" multiple />
      <button @click="addImages" class="add-button">+ ADD</button>
    </div>

    <div class="image-gallery">
      <div v-for="image in images" :key="image.id" class="image-container">
        <img :src="image.url" alt="Uploaded Image" class="uploaded-image" />
        <p class="uploaded-message">Image Uploaded</p>
      </div>
    </div>

    <button @click="submitDocket" class="submit-button">Submit</button>
  </div>
</template>

<script>
export default {
  name: "DocketTab",
  data() {
    return {
      selectedFiles: [],
      images: []
    };
  },
  methods: {
    handleImageSelection(event) {
      this.selectedFiles = Array.from(event.target.files);
    },
    addImages() {
      this.selectedFiles.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.images.push({
            id: this.images.length + 1,
            url: e.target.result
          });
        };
        reader.readAsDataURL(file);
      });
      this.selectedFiles = [];
    },
    async submitDocket() {
      const formData = new FormData();

      this.images.forEach((image, index) => {
        const blob = this.dataURLToBlob(image.url);
        formData.append('images', blob, `image-${index + 1}.jpg`);
      });

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', { // Replace with your API URL
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Docket submitted:', data);
        // Handle successful submission, e.g., clear the form, show a success message, etc.
      } catch (error) {
        console.error('Error submitting docket:', error);
        alert('Failed to submit docket. Please try again later.');
      }
    },
    dataURLToBlob(dataURL) {
      const byteString = atob(dataURL.split(',')[1]);
      const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ab], { type: mimeString });
    }
  }
};
</script>

<style scoped>
.docket-tab {
  background-color: #4e8c80;
  padding: 10px;
  min-height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}

.section-title {
  color: #ffffff;
  background-color: #4e8c80;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
  padding: 10px;
  border-radius: 4px;
  text-transform: uppercase;
  width: 100%;
  max-width: 600px; /* Limit the width on larger screens */
}

.upload-section {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  justify-content: center;
  width: 100%;
}

.upload-label {
  color: #000000;
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 10px;
  margin-bottom: 10px;
}

.add-button,
.submit-button {
  padding: 8px 12px;
  background-color: #2e2e2e;
  color: #ffffff;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 10px;
}

.image-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
}

.image-container {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  background-color: #ffffff;
  width: 150px;
  text-align: center;
}

.uploaded-image {
  max-width: 100%;
  max-height: 100px;
  display: block;
  margin-bottom: 10px;
}

.submit-button {
  align-self: flex-end;
  background-color: #2e2e2e; /* Dark grey background color */
  color: #ffffff;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  margin-top: 20px;
}

.uploaded-message {
  color: #4e8c80;
  font-weight: bold;
}

/* Media Queries for Responsiveness */

/* For tablets and larger phones */
@media (max-width: 768px) {
  .section-title {
    margin-bottom: 30px;
    padding: 8px;
  }

  .upload-section {
    flex-direction: column;
    align-items: flex-start;
  }

  .upload-label {
    margin-right: 0;
    margin-bottom: 10px;
  }

  .add-button,
  .submit-button {
    margin-left: 10px;
    width: 100%;
    text-align: center;
  }

  .image-container {
    width: 100px; /* Smaller image size for smaller screens */
  }

  .submit-button {
    align-self: center;
    margin-right: 0px;
  }
}

/* For phones */
@media (max-width: 480px) {
  .section-title {
    font-size: 18px;
    padding: 5px;
  }

  .upload-section {
    align-items: center;
  }

  .image-container {
    width: 80px; /* Even smaller image size */
  }

  .submit-button {
    width: 100%;
    text-align: center;
    padding: 10px;
    font-size: 14px;
    margin-right: 0;
  }
}
</style>
