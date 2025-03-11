<template>
  <div class="container">
    <h1 class="section-heading">Physical Traits</h1>
    <hr class="divider" />
    <table class="full-width-table">
      <thead>
        <tr>
          <th>Trait</th>
          <th>Vata</th>
          <th>Pitta</th>
          <th>Kapha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(trait, index) in physicalTraits" :key="index">
          <td class="first-column">{{ trait.name }}</td>
          <td class="radio-cell">
            <div class="radio-box">
              <input
                type="radio"
                :name="`vata-${index}`"
                :value="trait.name"
                v-model="selectedVata[index]"
              />
              <span class="note">{{ trait.vataNote }}</span>
            </div>
          </td>
          <td class="radio-cell">
            <div class="radio-box">
              <input
                type="radio"
                :name="`pitta-${index}`"
                :value="trait.name"
                v-model="selectedPitta[index]"
              />
              <span class="note">{{ trait.pittaNote }}</span>
            </div>
          </td>
          <td class="radio-cell">
            <div class="radio-box">
              <input
                type="radio"
                :name="`kapha-${index}`"
                :value="trait.name"
                v-model="selectedKapha[index]"
              />
              <span class="note">{{ trait.kaphaNote }}</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <h1 class="section-heading">Mental Traits</h1>
    <hr class="divider" />
    <table class="full-width-table">
      <thead>
        <tr>
          <th>Trait</th>
          <th>Vata</th>
          <th>Pitta</th>
          <th>Kapha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(trait, index) in mentalTraits" :key="index">
          <td class="first-column">{{ trait.name }}</td>
          <td class="radio-cell">
            <div class="radio-box">
              <input
                type="radio"
                :name="`mental-vata-${index}`"
                :value="trait.name"
                v-model="selectedMentalVata[index]"
              />
              <span class="note">{{ trait.vataNote }}</span>
            </div>
          </td>
          <td class="radio-cell">
            <div class="radio-box">
              <input
                type="radio"
                :name="`mental-pitta-${index}`"
                :value="trait.name"
                v-model="selectedMentalPitta[index]"
              />
              <span class="note">{{ trait.pittaNote }}</span>
            </div>
          </td>
          <td class="radio-cell">
            <div class="radio-box">
              <input
                type="radio"
                :name="`mental-kapha-${index}`"
                :value="trait.name"
                v-model="selectedMentalKapha[index]"
              />
              <span class="note">{{ trait.kaphaNote }}</span>
            </div>
          </td>
        </tr>
      </tbody>
      <!-- Scores Row for Mental Traits -->
      <tfoot>
        <tr class="score-row">
          <td class="first-column"><strong>Scores</strong></td>
          <td>{{ totalVataScore }}</td>
          <td>{{ totalPittaScore }}</td>
          <td>{{ totalKaphaScore }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      physicalTraits: [
      { name: 'Body size', vataNote: 'Note: Slim', pittaNote: 'Note: Medium', kaphaNote: 'Note: Large' },
    { name: 'Body weight', vataNote: 'Note: Low', pittaNote: 'Note: Medium', kaphaNote: 'Note: Overweight' },
    { name: 'Chin', vataNote: 'Note: Thin, angular', pittaNote: 'Note: Tapering ', kaphaNote: 'Note: Rounded, double' },
    { name: 'Cheeks', vataNote: 'Note: Wrinkled, sunken', pittaNote: 'Note: Smooth flat', kaphaNote: 'Note: Rounded, plump' },
    { name: 'Eyes', vataNote: 'Note: Small, sunken, dry, active, black, brown, nervous', pittaNote: 'Note: Sharp, bright, grey, green, yellow/red, sensitive to light', kaphaNote: 'Note: Big, beautiful, blue, calm, loving' },
    { name: 'Nose', vataNote: 'Note: Uneven shape, deviated septum', pittaNote: 'Note: Long pointed, red nose-tip', kaphaNote: 'Note: Short rounded, button nose' },
    { name: 'Lips', vataNote: 'Note: Dry, cracked, black/brown tinge', pittaNote: 'Note: Red, inflamed, yellowish', kaphaNote: 'Note: Smooth, oily, pale, whitish' },
    { name: 'Teeth', vataNote: 'Note: Stick out, big, roomy, thin gums', pittaNote: 'Note: Medium, soft, tender gums', kaphaNote: 'Note: Healthy, white, strong gums' },
    { name: 'Skin', vataNote: 'Note: Thin, dry, cold, rough, dark', pittaNote: 'Note: Smooth, oily, warm, rosy', kaphaNote: 'Note: Thick, oily, cool, white, pale' },
    { name: 'Hair', vataNote: 'Note: Dry brown, black, knotted, brittle, scarce', pittaNote: 'Note: Straight, oily, blond, gray, red, bald', kaphaNote: 'Note: Thick, curly, oily, wavy, luxuriant' },
    { name: 'Nails', vataNote: 'Note: Dry, rough, brittle, break easily', pittaNote: 'Note: Sharp, flexible, pink, lustrous', kaphaNote: 'Note: Thick, oily, smooth, polished' },
    { name: 'Neck', vataNote: 'Note: Thin, tall', pittaNote: 'Note: Medium', kaphaNote: 'Note: Big, folded' },
    { name: 'Chest', vataNote: 'Note: Flat, sunken', pittaNote: 'Note: Moderate', kaphaNote: 'Note: Expanded, round' },
    { name: 'Belly', vataNote: 'Note: Thin, flat, sunken', pittaNote: 'Note: Moderate', kaphaNote: 'Note: Big, pot-bellied' },
    { name: 'Belly-button', vataNote: 'Note: Small, irregular, herniated', pittaNote: 'Note: Oval, superficial', kaphaNote: 'Note: Big, deep, round, stretched' },
    { name: 'Hips', vataNote: 'Note: Slender, thin', pittaNote: 'Note: Moderate', kaphaNote: 'Note: Heavy, big' },
    { name: 'Joints', vataNote: 'Note: Cold, cracking', pittaNote: 'Note: Moderate', kaphaNote: 'Note: Large, lubricated' },
    { name: 'Appetite', vataNote: 'Note: Irregular, scanty', pittaNote: 'Note: Strong, unbearable', kaphaNote: 'Note: Slow but steady' },
    { name: 'Digestion', vataNote: 'Note: Irregular, forms gas', pittaNote: 'Note: Quick, causes burning', kaphaNote: 'Note: Prolonged, forms mucous' },
    { name: 'Taste', vataNote: 'Note: Sweet, sour salty', pittaNote: 'Note: Sweet, bitter, astringent', kaphaNote: 'Note: Bitter, pungent, astringent' },
    { name: 'Thirst', vataNote: 'Note: Changeable', pittaNote: 'Note: Surplus', kaphaNote: 'Note: Sparse' },
    { name: 'Elimination', vataNote: 'Note: Constipation', pittaNote: 'Note: Loose', kaphaNote: 'Note: Thicck, oily, sluggish' },
    { name: 'Physical Activity', vataNote: 'Note: Hyperactive', pittaNote: 'Note: Moderate', kaphaNote: 'Note: Slow' },
    // Add other traits as needed

      ],
      mentalTraits: [
      { name: 'Mental Activity', vataNote: 'Note: Hyperactive', pittaNote: 'Note: Moderate', kaphaNote: 'Note: Dull, slow' },
      { name: 'Emotions', vataNote: 'Note: Anxiety, fear, uncertainty', pittaNote: 'Note: Anger, hate, jealousy', kaphaNote: 'Note: Calm, greedy, attachment' },
      { name: 'Faith', vataNote: 'Note: Variable', pittaNote: 'Note: Extremist', kaphaNote: 'Note: Consistent' },
      { name: 'Intellect', vataNote: 'Note: Quick but faulty response', pittaNote: 'Note: Accurate response', kaphaNote: 'Note: Slow, exact' },
      { name: 'Recollection', vataNote: 'Note: Recent good, remote poor', pittaNote: 'Note: Distinct', kaphaNote: 'Note: Slow and sustained' },
      { name: 'Dreams', vataNote: 'Note: Quick, active, many, fearful', pittaNote: 'Note: Flery, war, violence', kaphaNote: 'Note: Lakes, snow, romantic' },
      { name: 'Sleep', vataNote: 'Note: Scanty, broken up, sleeplessness', pittaNote: 'Note: Little but sound', kaphaNote: 'Note: Deep, prolonged' },
      { name: 'Speech', vataNote: 'Note: Rapid, unclear', pittaNote: 'Note: Sharp, penetrating', kaphaNote: 'Note: Slow, monotonous' },
      { name: 'Financial', vataNote: 'Note: Poor, spends on trifles', pittaNote: 'Note: Spends money on luxuries', kaphaNote: 'Note: Rich, good money, preserver' },
      // Add other traits as needed

      ],
      selectedVata: Array(20).fill(null),  // Adjust the size based on the number of traits
      selectedPitta: Array(20).fill(null),
      selectedKapha: Array(20).fill(null),
      selectedMentalVata: Array(20).fill(null),
      selectedMentalPitta: Array(20).fill(null),
      selectedMentalKapha: Array(20).fill(null),
    };
  },
  computed: {
    totalVataScore() {
      const physicalVataScore = this.selectedVata.filter(val => val !== null).length;
      const mentalVataScore = this.selectedMentalVata.filter(val => val !== null).length;
      return physicalVataScore + mentalVataScore;
    },
    totalPittaScore() {
      const physicalPittaScore = this.selectedPitta.filter(val => val !== null).length;
      const mentalPittaScore = this.selectedMentalPitta.filter(val => val !== null).length;
      return physicalPittaScore + mentalPittaScore;
    },
    totalKaphaScore() {
      const physicalKaphaScore = this.selectedKapha.filter(val => val !== null).length;
      const mentalKaphaScore = this.selectedMentalKapha.filter(val => val !== null).length;
      return physicalKaphaScore + mentalKaphaScore;
    },
  },
  methods: {
    submitData() {
      // Prepare data to send
      const dataToSend = {
        physicalTraits: this.physicalTraits,
        mentalTraits: this.mentalTraits,
        selectedVata: this.selectedVata,
        selectedPitta: this.selectedPitta,
        selectedKapha: this.selectedKapha,
        selectedMentalVata: this.selectedMentalVata,
        selectedMentalPitta: this.selectedMentalPitta,
        selectedMentalKapha: this.selectedMentalKapha,
      };

      // Emit data to parent component
      this.$emit('submit-data', dataToSend);
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}

.section-heading {
  color: #000000;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
  align-self: flex-end;
}

.divider {
  border: 0;
  border-top: 2px solid #ccc;
  margin-bottom: 20px;
}

.full-width-table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 4px;
  text-align: center;
  line-height: 1.2;
}

th {
  background-color: #f4f4f4;
}

.first-column {
  color: #000000;
  font-weight: bold;
  text-align: left;
}

.radio-cell {
  padding: 0;
}

.radio-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.radio-box input[type="radio"] {
  margin: 0;
}

.note {
  font-size: 12px;
  color: #666;
  margin-top: 5px;
  text-align: center;
  background-color: #e7feff;
  padding: 5px;
  border-radius: 4px;
}

.score-row {
  margin-top: 20px;
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 4px;
}

.score-box {
  text-align: left;
}

.score-box h2 {
  margin: 0;
  margin-bottom: 10px;
}

.score-box p {
  margin: 5px 0;
}

.score-row {
  background-color: #f4f4f4;
  font-weight: bold;
}

/* Responsive styling */
@media (max-width: 768px) {
  .full-width-table,
  .full-width-table thead,
  .full-width-table tbody,
  .full-width-table th,
  .full-width-table td,
  .full-width-table tr {
    display: block;
  }

  .full-width-table thead {
    float: left;
  }

  .full-width-table tr {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  .full-width-table td,
  .full-width-table th {
    width: 100%;
    box-sizing: border-box;
    text-align: left;
    padding-left: 50%;
    position: relative;
  }

  .full-width-table td::before,
  .full-width-table th::before {
    content: attr(data-label);
    position: absolute;
    left: 10px;
    white-space: nowrap;
    font-weight: bold;
  }

  .radio-box {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .note {
    margin-left: 10px;
  }

  .score-row {
    padding: 20px;
    font-size: 14px;
  }
}
</style>
