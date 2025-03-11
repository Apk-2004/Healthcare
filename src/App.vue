<template>
  <div id="app">
    <div class="initial-view">
      <header>
        <h1>SELECT THE CASESHEET TEMPLATE</h1>
      </header>
      <nav>
        <div class="nav-row">
          <div class="nav-item" @click="navigateTo('dental')">
            <img src="@/assets/dental.jpg" alt="Dental" />
            <button>Dental</button>
          </div>
          <div class="nav-item" @click="navigateTo('pediatric')">
            <img src="@/assets/pediatric.jpg" alt="Pediatric" />
            <button>Pediatric</button>
          </div>
          <div class="nav-item" @click="navigateTo('orthopedic')">
            <img src="@/assets/orthopedic.jpg" alt="Orthopedic" />
            <button>Orthopedic</button>
          </div>
          <div class="nav-item" @click="navigateTo('cardiology')">
            <img src="@/assets/cardiology.jpg" alt="Cardiology" />
            <button>Cardiology</button>
          </div>
          <div class="nav-item" @click="navigateTo('ophthalmology')">
            <img src="@/assets/ophthalmology.jpg" alt="Ophthalmology" />
            <button>Ophthalmology</button>
          </div>
        </div>
        <div class="nav-row">
          <div class="nav-item" @click="navigateTo('diabetes')">
            <img src="@/assets/diabetes.jpg" alt="Diabetes Management" />
            <button>Diabetes</button>
          </div>
          <div class="nav-item" @click="navigateTo('ayurveda')">
            <img src="@/assets/ayurveda.jpeg" alt="Ayurveda" />
            <button>Ayurveda</button>
          </div>
          <div class="nav-item" @click="navigateTo('ent')">
            <img src="@/assets/ent.jpg" alt="ENT" />
            <button>ENT</button>
          </div>
          <div class="nav-item" @click="navigateTo('ivf')">
            <img src="@/assets/ivf.jpg" alt="IVF" />
            <button>IVF</button>
          </div>
          <div class="nav-item" @click="navigateTo('therapy')">
            <img src="@/assets/therapy.jpg" alt="Therapy" />
            <button>Therapy</button>
          </div>
        </div>
      </nav>
    </div>
    <div class="content-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    navigateTo(route) {
      if (this.$route.name !== route) {
        this.$router.push({ name: route });
      }
    },
  },
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

.initial-view {
  background-color: #e6e6fa;
  padding-bottom: 20px;
  padding-top: 20px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

header {
  margin: 20px 0;
}

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.nav-row {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 10px 0;
  flex-wrap: wrap; /* Allows items to wrap onto the next line on smaller screens */
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
  flex: 1;
  min-width: 120px; /* Ensures a minimum width for smaller screens */
  max-width: 200px; /* Limits the maximum width for larger screens */
}

.nav-item:hover {
  transform: scale(1.05);
}

.nav-item img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 1px;
  margin-bottom: 10px;
}

button {
  font-weight: bold;
  color: white;
  background-color: #1a237e;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  border-radius: 3px;
  transition: background-color 0.3s ease;
  width: 100%; /* Ensures the button takes up the full width of the nav-item */
}

button:hover {
  background-color: #98b4c7;
}

.content-wrapper {
  background-color: #ffffff;
  min-height: 0vh;
  padding: 20px;
}

/* Responsive styling */
@media (max-width: 768px) {
  header h1 {
    font-size: 1.5rem; /* Adjust the header size for smaller screens */
  }

  .nav-row {
    flex-direction: column; /* Stacks the items vertically on smaller screens */
  }

  .nav-item {
    max-width: 80%; /* Limits the width of the nav-item on smaller screens */
  }

  button {
    padding: 8px 16px; /* Adjust button padding for smaller screens */
  }
}

@media (max-width: 480px) {
  .nav-item img {
    height: 100px; /* Reduce the image height on very small screens */
  }

  button {
    font-size: 0.8rem; /* Adjust the button font size for very small screens */
    padding: 6px 12px;
  }
}
</style>
