<template>
  <div class="docket-tab">
    <h2 class="section-title">DOCKET TAB</h2>

    <div class="container">
      <div class="upload-section">
        <label for="imageUpload" class="upload-label">Upload Images:</label>
        <input
          type="file"
          id="imageUpload"
          @change="handleImageSelection"
          accept="image/*"
          multiple
        />
        <button @click="addImages" class="add-button">+ ADD</button>
      </div>

      <div class="image-gallery">
        <div v-for="image in images" :key="image.id" class="image-container">
          <img :src="image.url" alt="Uploaded Image" class="uploaded-image" />
          <p class="uploaded-message">Image Uploaded</p>
        </div>
      </div>
    </div>

    <div class="bottom-space"></div>
    <!-- Added space at the bottom -->
  </div>
</template>

<script>
export default {
  name: "DocketTab",
  data() {
    return {
      selectedFiles: [],
      images: [],
    };
  },
  methods: {
    handleImageSelection(event) {
      this.selectedFiles = Array.from(event.target.files);
    },
    addImages() {
      this.selectedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.images.push({
            id: this.images.length + 1,
            url: e.target.result,
          });
        };
        reader.readAsDataURL(file);
      });
      this.selectedFiles = [];
    },
  },
};
</script>

<style scoped>
.docket-tab {
  background-color: #4e8c80; /* Background color applied to entire component */
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 60vh; /* Minimum height of viewport */
}

.container {
  background-color: #d3d3d3; /* Container background color */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%; /* Adjust width as needed */
  max-width: 600px; /* Limit maximum width for responsiveness */
}

.section-title {
  color: #ffffff; /* White text color */
  background-color: #4e8c80; /* Dark background color */
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 4px;
  text-transform: uppercase;
}

.upload-section {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.upload-label {
  color: #000000; /* Black text color */
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 10px;
}

.add-button {
  padding: 8px 12px;
  background-color: #2e2e2e;
  color: #ffffff;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  text-transform: uppercase;
  font-weight: bold;
}

.image-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Adjust gap between images */
}

.image-container {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  background-color: #ffffff; /* White background */
  width: 150px; /* Adjust the width to be smaller */
  text-align: center; /* Center the message text */
}

.uploaded-image {
  max-width: 100%;
  max-height: 100px; /* Adjust height as needed */
  display: block;
  margin-bottom: 10px;
}

.uploaded-message {
  color: #4e8c80; /* Teal text color */
  font-weight: bold;
}

.bottom-space {
  height: 40px; /* Adjust height for desired space */
}
</style>
