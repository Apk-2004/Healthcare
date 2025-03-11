<template>
    <div class="ears-tab">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Right</th>
            <th>Left</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(title, index) in titles" :key="index">
            <td class="title">{{ title }}</td>
            <td><textarea v-model="rightData[index]" :placeholder="`${title} Right`" class="input-textarea"></textarea></td>
            <td><textarea v-model="leftData[index]" :placeholder="`${title} Left`" class="input-textarea"></textarea></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: "EarsTab",
    data() {
      return {
        titles: [
          "Pinna",
          "Pre Auricular Area",
          "Post Auricular Area",
          "External Auditory Canal",
          "Fistula Test",
          "Tympanic Membrane",
          "Rinne",
          "Weber",
          "ABC",
          "Vestibular Examination",
          "Hearing Assessment",
          "Nystagmus"
        ],
        rightData: Array(12).fill(""),
        leftData: Array(12).fill("")
      };
    }
  };
  </script>
  
  <style scoped>
  .ears-tab {
    padding: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #4e8c80;
    color: white;
  }
  
  .title {
    color: #ffffff; /* Dark gray color */
    font-weight: bold;
    text-transform: capitalize;
    font-size: 18px;
  }
  
  .input-textarea {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 2px;
    resize: vertical;
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
    background-color: #ffffff; /* White background for inputs */
    font-family: 'Courier New', Courier, monospace;
  }
  </style>
  