<template>
  <div class="fracture-diagnosis-tab">
    <div class="image-container">
      <img src="@/assets/skeletonimage.jpg" alt="Skeleton Image" />
    </div>
    <div class="selection-container">
      <div class="portion-selection">
        <label class="bold-label">Select the portion:</label>
        <div class="radio-group-inline">
          <label><input type="radio" v-model="selectedPortion" value="left" /> Left</label>
          <label><input type="radio" v-model="selectedPortion" value="right" /> Right</label>
          <label><input type="radio" v-model="selectedPortion" value="both" /> Both</label>
          <label><input type="radio" v-model="selectedPortion" value="none" /> None</label>
        </div>
      </div>
      <div class="area-selection">
        <div class="dropdown-group">
          <label>Select the Skeletal Major:</label>
          <select v-model="selectedSkeletalMajor" @change="updateAnatomicalAreaOptions" class="v-dropdown">
            <option disabled value="">Select Skeletal Major</option>
            <option v-for="option in skeletalMajorOptions" :key="option.value" :value="option.value">
              {{ option.text }}
            </option>
          </select>
        </div>

        <div class="dropdown-group">
          <label>Select the Anatomical Area:</label>
          <select v-model="selectedAnatomicalArea" @change="updateSubAnatomicalAreaOptions" class="v-dropdown">
            <option disabled value="">Select Anatomical Area</option>
            <option v-for="option in anatomicalAreaOptions" :key="option.value" :value="option.value">
              {{ option.text }}
            </option>
          </select>
        </div>

        <div class="dropdown-group">
          <label>Select the Sub-Anatomical Area:</label>
          <select v-model="selectedSubAnatomicalArea" @change="updateDiagnosisOptions" class="v-dropdown">
            <option disabled value="">Select Sub-Anatomical Area</option>
            <option v-for="option in subAnatomicalAreaOptions" :key="option.value" :value="option.value">
              {{ option.text }}
            </option>
          </select>
        </div>

        <div class="dropdown-group">
          <label>Select the Diagnosis:</label>
          <select v-model="selectedDiagnosis" class="v-dropdown">
            <option disabled value="">Select Diagnosis</option>
            <option v-for="option in diagnosisOptions" :key="option.value" :value="option.value">
              {{ option.text }}
            </option>
          </select>
        </div>
      </div>
      <button @click="addSelectionToTable">Add to Table</button>
      <div class="selection-table-container">
        <table class="selection-table">
          <thead>
            <tr>
              <th>Portion</th>
              <th>Skeletal Major</th>
              <th>Anatomical Area</th>
              <th>Sub-Anatomical Area</th>
              <th>Diagnosis</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="tableData.length === 0">
              <td colspan="5" class="no-data">No data available</td>
            </tr>
            <tr v-for="(item, index) in tableData" :key="index">
              <td>{{ item.portion }}</td>
              <td>{{ item.skeletalMajor }}</td>
              <td>{{ item.anatomicalArea }}</td>
              <td>{{ item.subAnatomicalArea }}</td>
              <td>{{ item.diagnosis }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'FractureDiagnosisTab',
  data() {
    return {
      selectedPortion: '',
      selectedSkeletalMajor: '',
      selectedAnatomicalArea: '',
      selectedSubAnatomicalArea: '',
      selectedDiagnosis: '',
      skeletalMajorOptions: [
        { value: 'skull', text: 'Skull' },
        { value: 'thoracic', text: 'Thoracic' },
        { value: 'articularBoneofShoulder', text: 'Articular Bone of Shoulder' },
        { value: 'humerus', text: 'Humerus' },
        { value: 'pelviceGirldle', text: 'Pelvice Girdle' },
        { value: 'femur', text: 'Femur' },
        { value: 'trochBone', text: 'Troch Bone' },
        { value: 'patella', text: 'Patella' },
        { value: 'proximalTibia', text: 'Proximal Tibia' },
        { value: 'tibialShaft', text: 'Tibial Shaft' },
        { value: 'distaltibia', text: 'Distal Tibia' },
        { value: 'malleoli', text: 'Malleoli' },
        { value: 'foot', text: 'Foot' },
        // Add more options here
      ],
      anatomicalAreaOptions: [],
      subAnatomicalAreaOptions: [],
      diagnosisOptions: [],
      anatomicalAreaMapping: {
        skull: [
          { value: 'skullBaseAndCranial', text: 'Skull base and Cranial' },
          { value: 'midface', text: 'Midface' },
          { value: 'dentoalveolarTrauma', text: 'Dentoalveolar Trauma' },
          { value: 'mandible', text: 'Mandible' },
        ],

        thoracic: [
        { value: 'thoracicAndLumberTrauma', text: 'Thoracic and Lumber Trauma' },
        { value: 'deformity', text: 'Deformity' },
        ],

        articularBoneofShoulder: [
        { value: 'unifocalExtraArticular', text: 'Unifocal Extra-articular' },
        { value: 'bifocalExtraArticular', text: 'Bifocal Extra-articular' },
        { value: 'articular', text: 'Articular' },
        ],

        humerus: [
        { value: 'simpleFractures', text: 'Simple Fractures' },
        { value: 'wedgeFracture', text: 'Wedge Fracture' },
        { value: 'complexFrame', text: 'Complex Frame' },
        ],

        pelviceGirldle: [
        { value: 'elmentalFractureType', text: 'Elmental Fracture Type' },
        { value: 'associatedFractureType', text: 'Associated Fracture Type' },
        ],

        femur: [
        { value: 'simplefractures', text: 'Simple Fractures' },
        { value: 'wedgefracture', text: 'Wedge Fracture' },
        { value: 'complexframe', text: 'Complex Frame' },
        ],

        trochBone: [
        { value: 'trochAnter', text: 'Troch-anter' },
        { value: 'neck', text: 'Neck' },
        { value: 'head', text: 'Head' },
        ],

        patella: [
        { value: 'extraArticular', text: 'Extra-articular' },
        { value: 'partialArticular', text: 'Partial articular' },
        { value: 'completeArticular', text: 'Complete articular' },
        ],

        proximalTibia: [
        { value: 'ExtraArticular', text: 'Extra-articular' },
        { value: 'PartialArticular', text: 'Partial articular' },
        { value: 'complete', text: 'Complete' },
        ],

        tibialShaft: [
        { value: 'SimpleFractures', text: 'Simple Fractures' },
        { value: 'WedgeFracture', text: 'Wedge Fracture' },
        { value: 'complexFracture', text: 'Complex Fracture' },
        ],

        distaltibia: [
        { value: 'extraArticulars', text: 'Extra-articular' },
        { value: 'partialArticulars', text: 'Partial articular' },
        { value: 'completeArticulars', text: 'Complete articular' },
        ],

        malleoli: [
        { value: 'infraSyndesmotic', text: 'Infra-Syndesmotic' },
        { value: 'transSyndesmotic', text: 'Trans-Syndesmotic' },
        ],

        foot: [
        { value: 'phalanges', text: 'Phalanges' },
        { value: 'metatarsals', text: 'Metatarsals' },
        { value: 'midfoot', text: 'Midfoot' },
        { value: 'talus', text: 'Talus' },
        { value: 'calcaneus', text: 'Calcaneus' },
        ],
        // Add more mappings for other areas here
      },
      subAnatomicalAreaMapping: {
        skullBaseAndCranial: [
          { value: 'frontalSinus', text: 'Frontal Sinus' },
          { value: 'skullBase', text: 'Skull Base' },
          { value: 'cranialVault', text: 'Cranial Vault' },
        ],

        midface: [
          { value: 'palatoAlveolar', text: 'Palato-Alveolar' },
          { value: 'leFort', text: 'Le Fort' },
          { value: 'nasal', text: 'Nasal' },
          { value: 'orbit', text: 'Orbit' },
          { value: 'zygoma', text: 'Zygoma' },
        ],

        dentoalveolarTrauma: [
          { value: 'toothFracture', text: 'Tooth Fracture' },
          { value: 'toothLuxation', text: 'Tooth Luxation' },
          { value: 'alvelarFracture', text: 'Alvelar Fracture' },
        ],

        mandible: [
          { value: 'symphysisAndParasymphysis', text: 'Symphysis and Parasymphysis' },
          { value: 'body', text: 'Body' },
          { value: 'angleAndRamus', text: 'Angle and Ramus' },
          { value: 'condlarProcessAndHead', text: 'Condlar Process and head' },
        ],

        thoracicAndLumberTrauma: [
          { value: 'typeA', text: 'Type A' },
          { value: 'typeB', text: 'Type B' },
          { value: 'typeC', text: 'Type C' },
        ],

        deformity: [
          { value: 'ais', text: 'AIS' },
        ],
        
        unifocalExtraArticular: [
          { value: 'tuberosity', text: 'Tuberosity' },
          { value: 'impactedMetaphyseal', text: 'Impacted metaphyseal' },
          { value: 'nonImpactedMetaphyseal', text: 'Non-impacted metaphyseal' },
        ],

        bifocalExtraArticular: [
          { value: 'withMetaphysealImpact', text: 'With metaphyseal impact' },
          { value: 'withoutMetaphysealImpact', text: 'Without metaphyseal impact' },
          { value: 'withGlenohumeralDislocation', text: 'With glenohumeral dislocation' },
        ],

        articular: [
          { value: 'withSlightDisplacement', text: 'With slight displacement' },
          { value: 'impactedWithMarkedDisplacement', text: 'Impacted with marked displacement' },
          { value: 'dislocations', text: 'Dislocation' },
        ],
        simpleFractures: [
          { value: 'spiral', text: 'Spiral' },
          { value: 'oblique', text: 'Oblique (>30 degree)' },
          { value: 'transverse', text: 'Transverse (<30 degree)' },
        ],

        wedgeFracture: [
          { value: 'spiralWedge', text: 'Spiral wedge' },
          { value: 'bendingWedge', text: 'Bending wedge' },
          { value: 'fragmentedWedge', text: 'Fragmented wedge)' },
        ],

        complexFrame: [
          { value: 'spiral', text: 'Spiral' },
          { value: 'segmental', text: 'Segmental' },
          { value: 'irregular', text: 'Irregular' },
        ],

        elmentalFractureType: [
          { value: 'posteriorWall', text: 'Posterior wall' },
          { value: 'posteriorColumn', text: 'Posterior column' },
          { value: 'anteriorWall', text: 'Anterior wall' },
          { value: 'anteriorColumn', text: 'Anterior column' },
          { value: 'transverse', text: 'Transverse' },
        ],

        associatedFractureType: [
          { value: 'posteriorColumnWall', text: 'Posterior column/wall' },
          { value: 'transverseposteriorWall', text: 'Transverse/Posterior wall' },
          { value: 'tType', text: 'T-Type' },
          { value: 'anteriorColumnPostHemiTransverse', text: 'Anterior column/Post hemi-transverse' },
          { value: 'bothColumn', text: 'Both Column' },
        ],

        simplefractures: [
          { value: 'spiral', text: 'Spiral' },
          { value: 'oblique', text: 'Oblique (>30 degree)' },
          { value: 'transverse', text: 'Transverse (<30 degree)' },
        ],

        wedgefracture: [
          { value: 'spiralWedge', text: 'Spiral wedge' },
          { value: 'bendingWedge', text: 'Bending wedge' },
          { value: 'fragmentedWedge', text: 'Fragmented wedge)' },
        ],

        complexframe: [
          { value: 'spiral', text: 'Spiral' },
          { value: 'segmental', text: 'Segmental' },
          { value: 'irregular', text: 'Irregular' },
        ],

        trochAnter: [
          { value: 'pertrochantericSimple', text: 'Pertrochanteric simple' },
          { value: 'pertrochantericMultifragmentory', text: 'Pertrochanteric multifragmentory' },
          { value: 'interchanteric', text: 'Interchanteric' },
        ],

        neck: [
          { value: 'subcapital', text: 'Sub capital, with slight displacement' },
          { value: 'transcervical', text: 'Transcervical' },
        ],

        head: [
          { value: 'split', text: 'Split(Pipkin)' },
          { value: 'withDepression', text: 'With depression' },
          { value: 'withNeckFracture', text: 'With neck Fracture' },
        ],

        extraArticular: [
          { value: 'avulsion', text: 'Avulsion' },
          { value: 'isolatedBody', text: 'Isolated body' },
        ],

        partialArticular: [
          { value: 'verticalLateral', text: 'Vertical,Lateral' },
          { value: 'verticalMedial', text: 'Vertical,Medial' },
        ],

        completeArticular: [
          { value: 'transverse', text: 'Transverse' },
          { value: 'transversePlusSecondFragment', text: 'Transverse Plus second fragment' },
          { value: 'complex', text: 'Complex' },
        ],

        ExtraArticular: [
          { value: 'avulsion', text: 'Avulsion' },
          { value: 'metaphysealSimple', text: 'Metaphyseal Simple' },
          { value: 'metaphysealMultFragmentary', text: 'Metaphyseal Mult fragmentary' },
        ],

        PartialArticular: [
          { value: 'pureSplit', text: 'Pure Split' },
          { value: 'pureDepression', text: 'Pure Depression' },
          { value: 'splitDepression', text: 'Split Depression' },
        ],

        complete: [
          { value: 'simpleMetaphyseal', text: 'Simple, Metaphyseal' },
          { value: 'metaphysealMultFragmentary', text: 'Metaphyseal Mult fragmentary' },
          { value: 'MultFragmentary', text: 'Mult fragmentary' },
        ],

        SimpleFractures: [
          { value: 'spiral', text: 'Spiral' },
          { value: 'oblique', text: 'Oblique (>30 degree)' },
          { value: 'transverse', text: 'Transverse (<30 degree)' },
        ],

        WedgeFracture: [
          { value: 'spiralWedge', text: 'Spiral wedge' },
          { value: 'bendingWedge', text: 'Bending wedge' },
          { value: 'fragmentedWedge', text: 'Fragmented wedge)' },
        ],

        complexFracture: [
          { value: 'spiral', text: 'Spiral' },
          { value: 'segmental', text: 'Segmental' },
          { value: 'irregular', text: 'Irregular' },
        ],

        extraArticulars: [
          { value: 'metaphysealSimple', text: 'Metaphyseal Simple' },
          { value: 'metaphysealWedge', text: 'Metaphyseal Wedge' },
          { value: 'metaphysealComplex', text: 'Metaphyseal Complex' },
        ],

        partialArticulars: [
          { value: 'pureSplit', text: 'Pure Split' },
          { value: 'splitDepression', text: 'Split Depression' },
          { value: 'multFragmentaryDepression', text: 'Mult fragmentary Depression' },
        ],

        completeArticulars: [
          { value: 'articularSimple', text: 'Articular Simple' },
          { value: 'articularSimpleMetaphyseal', text: 'Articular simple, Metaphyseal-Mult fragmentary' },
          { value: 'articularMultFragmentary', text: 'Articular, Mult fragmentary' },
        ],

        infraSyndesmotic: [
          { value: 'unifocal', text: 'Unifocal' },
          { value: 'biofocal', text: 'Bio focal' },
          { value: 'circumferential', text: 'Circumferential' },
        ],

        transSyndesmotic: [
          { value: 'isolatedLateral', text: 'Isolated Lateral' },
          { value: 'lateralMedial', text: 'Lateral and Medial' },
          { value: 'lateralMedialPosterior', text: 'Lateral, Medial and Posterior' },
        ],

        phalanges: [
          { value: 'fractureofhallux', text: 'Fracture of the hallux' },
          { value: 'fractureof2ndrow', text: 'Fracture of the 2nd-5th row' },
        ],

        metatarsals: [
          { value: 'fractureofmetatarsals', text: 'Fracture of the Metatarsal 2-4' },
          { value: 'fractureof5thmetatarsal', text: 'Fracture of the 5th Metatarsal' },
        ],

        midfoot: [
          { value: 'navicularFracture', text: 'Navicular fracture' },
          { value: 'tmtInjuries', text: 'TMT(Lisfranc) Injuries' },
          { value: 'cuboidFracture', text: 'Cuboid fractures' },
          { value: 'intertarsalInjuries', text: 'Intertarsal injuries and fractures' },
        ],

        talus: [
          { value: 'neckfractures', text: 'Neck fractures' },
          { value: 'bodyfractures', text: 'Body fractures' },
          { value: 'processfractures', text: 'Process fractures' },
        ],

        calcaneus: [
          { value: 'Bodyfractures', text: 'Body fractures' },
        ],
        // Add more mappings for other sub-areas here
      },
      diagnosisMapping: {
        frontalSinus: [
          { value: 'anteriorTable', text: 'Anterior Table' },
          { value: 'frontalRecess', text: 'Frontal Recess' },
          { value: 'posteriorTable', text: 'Posterior Table' },
        ],

        skullBase: [
          { value: 'skullBase', text: 'Skull Base' },
          { value: 'temporalBone', text: 'Temporal bone (Lateral skull base)' },
        ],

        palatoAlveolar: [
          { value: 'simple', text: 'Simple' },
          { value: 'comminuted', text: 'Comminuted' },
        ],

        leFort: [
          { value: 'lefort1', text: 'Le Fort 1' },
          { value: 'lefort2', text: 'Le Fort 2' },
          { value: 'lefort3', text: 'Le Fort 3' },
        ],

        nasal: [
          { value: 'naselBone', text: 'Nasel Bone' },
          { value: 'noe', text: 'NOE' },
        ],

        orbit: [
          { value: 'floor', text: 'Floor' },
          { value: 'medialWall', text: 'Medial Wall' },
          { value: 'CombinedFractures', text: 'Combined Fractures' },
          { value: 'roof', text: 'Roof' },
          { value: 'lateralWall', text: 'Lateral Wall' },
        ],

        zygoma: [
          { value: 'isolatedZygomatic', text: 'Isolated Zygomatic arch fracture' },
          { value: 'fractureofZygomatic', text: 'Fracture of the Zygomatic Complex' },
        ],

        toothFracture: [
          { value: 'enamelonly', text: 'Enamel only/Dentin exposure' },
          { value: 'pulpExposure', text: 'Pulp exposure' },
          { value: 'crownroot', text: 'crown-root fracture' },
          { value: 'rooffracture', text: 'Roof fracture' },
        ],

        toothLuxation: [
          { value: 'withoutDisp', text: 'Without Displacement' },
          { value: 'withDisp', text: 'With Displacement' },
        ],

        alvelarFracture: [
          { value: 'avulsion', text: 'Avulsion' },
          { value: 'segmental', text: 'Segmented alveolar fracture' },
        ],

        symphysisAndParasymphysis: [
          { value: 'simple', text: 'Simple' },
          { value: 'complex', text: 'Complex' },
          { value: 'both', text: 'Simple/Complex' },
        ],

        body: [
          { value: 'simple', text: 'Simple' },
          { value: 'complex', text: 'Complex' },
        ],

        angleAndRamus: [
          { value: 'simple', text: 'Simple' },
          { value: 'complex', text: 'Complex' },
        ],

        condlarProcessAndHead: [
          { value: 'simple', text: 'Simple' },
          { value: 'complex', text: 'Complex' },
        ],

        typeA: [
          { value: 'a0', text: 'A0' },
          { value: 'a1', text: 'A1' },
          { value: 'a2', text: 'A2' },
          { value: 'a3', text: 'A3' },
          { value: 'a4', text: 'A4' },
        ],

        typeB: [
          { value: 'b1', text: 'B1' },
          { value: 'b2', text: 'B2' },
          { value: 'b3', text: 'B3' },
        ],

        typeC: [
          { value: 'c', text: 'C' },
        ],

        ais: [
          { value: 'lenke1', text: 'Lenke 1' },
          { value: 'lenke2', text: 'Lenke 2' },
          { value: 'lenke3', text: 'Lenke 3' },
          { value: 'lenke4', text: 'Lenke 4' },
          { value: 'lenke5', text: 'Lenke 5' },
          { value: 'lenke6', text: 'Lenke 6' },
        ],

        fractureofhallux: [
          { value: 'ProximalSimple', text: 'Proximal Phalanx- Diaphysis simple' },
          { value: 'Proximalfracture', text: 'Proximal Phalanx- base-shear fracture' },
          { value: 'Distalfracture', text: 'Distal Phalanx-base-impression fracture' },
        ],

        fractureof2ndrow: [
          { value: 'MTPJointdislocation', text: ' MTP-Joint dislocation' },
          { value: 'Phalangesofthe3rd-5throw', text: 'Phalanges of the 3rd-5th row' },
          { value: 'Distalphalanx-Multfragmentalfracture', text: 'Distal phalanx-Mult fragmental fracture' },
        ],

        fractureofmetatarsals: [
          { value: 'ProximalMetaphysealfracture', text: 'Proximal Metaphyseal fracture' },
          { value: 'Diaphysealfracture', text: 'Diaphyseal fracture' },
          { value: 'Subcapitalfracture', text: 'Sub capital fracture' },
        ],

        fractureof5thmetatarsal: [
          { value: 'Longobliquefracture', text: 'Long oblique Dis physed fracture' },
          { value: 'Fractureofthebase', text: 'Fracture of the base (Jones fracture)' },
          { value: 'Multfragmentaryfracture', text: 'Mult fragmentary diaphyseal fracture' },
        ],

        navicularFracture: [
          { value: 'Split/stressfracture', text: 'Split/Stress fracture' },
          { value: 'Multfragmentaryfracture', text: 'Mult fragmentary fracture' },
          
        ],

        tmtInjuries: [
          { value: 'TMT(Lisfranc)Injuries', text: 'TMT (Lisfranc) Injuries' },
          
        ],

        cuboidFracture: [
          { value: 'Simplefracture', text: 'Simple fracture' },
          { value: 'crushfracture', text: 'Crush fracture' },
        
        ],

        intertarsalInjuries: [
          { value: 'intertarsal', text: 'Intertarsal fracture' },
          { value: 'crushinjuries', text: 'Crush Injuries' },
          { value: 'b3', text: 'B3' },
        ],

        neckfractures: [
          { value: 'undisplacedfracture', text: 'Undisplaced fracture' },
          { value: 'displacedfracture', text: 'Displaced fracture' },
          { value: 'Multfragmentary', text: 'Mult fragmentary' },
        ],

        processfractures: [
          { value: 'Lateralprocessfractures', text: 'Lateral process fractures' },
          { value: 'Posteriorprocessfractures', text: 'Posterior process fractures' },
        ],

        Bodyfractures: [
          { value: 'SimpleUndisplacedfractures', text: 'Simple Undisplaced fractures' },
          { value: 'displacedfractures', text: 'Displaced fractures' },
          { value: 'extremetongue', text: 'Extreme Tongue fractures' },
        ],

        // Add more mappings for other diagnoses here
      },
      tableData: []
    };
  },
  
  methods: {
  updateAnatomicalAreaOptions() {
    this.anatomicalAreaOptions = this.anatomicalAreaMapping[this.selectedSkeletalMajor] || [];
    this.selectedAnatomicalArea = '';
    this.updateSubAnatomicalAreaOptions();
  },
  updateSubAnatomicalAreaOptions() {
    this.subAnatomicalAreaOptions = this.subAnatomicalAreaMapping[this.selectedAnatomicalArea] || [];
    this.selectedSubAnatomicalArea = '';
    this.updateDiagnosisOptions();
  },
  updateDiagnosisOptions() {
    this.diagnosisOptions = this.diagnosisMapping[this.selectedSubAnatomicalArea] || [];
    this.selectedDiagnosis = '';
  },
  addSelectionToTable() {
    if (
      this.selectedPortion &&
      this.selectedSkeletalMajor &&
      this.selectedAnatomicalArea &&
      this.selectedSubAnatomicalArea
    ) {
      const diagnosis = this.selectedDiagnosis || '-';
      const selectionData = {
        portion: this.selectedPortion,
        skeletalMajor: this.selectedSkeletalMajor,
        anatomicalArea: this.selectedAnatomicalArea,
        subAnatomicalArea: this.selectedSubAnatomicalArea,
        diagnosis: diagnosis,
      };
      this.tableData.push(selectionData);

      // Emit the selection data to the parent component
      this.$emit('update-fracture-diagnosis', this.tableData);

      this.selectedPortion = '';
      this.selectedSkeletalMajor = '';
      this.selectedAnatomicalArea = '';
      this.selectedSubAnatomicalArea = '';
      this.selectedDiagnosis = '';
    } else {
      alert('Please fill in all fields except diagnosis before adding to the table.');
    }
  },
},

};
</script>

<style scoped>
.fracture-diagnosis-tab {
  display: flex;
  flex-direction: row;
  min-height: 70vh;
  flex-wrap: wrap; /* Allow wrapping of content on smaller screens */
}

.image-container {
  flex: 1;
  max-width: 200px;
  min-width: 150px; /* Set a minimum width for the image container */
}

.image-container img {
  width: 100%;
  height: auto;
  min-height: 50vh;
}

.selection-container {
  flex: 2;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-x: auto;
  overflow-y: auto;
  width: 100%;
}

.portion-selection,
.area-selection {
  margin-top: 20px;
  font-weight: bold;
}

.radio-group-inline {
  display: inline-flex;
  align-items: center;
  margin-left: 20px;
  flex-wrap: wrap; /* Allow radio buttons to wrap on smaller screens */
}

.radio-group-inline label {
  margin-right: 20px;
}

.dropdown-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
}

.dropdown-group label {
  margin-right: 10px;
  font-weight: bold;
  white-space: nowrap;
}

.dropdown-group select {
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #ffffff;
}

.selection-table-container {
  width: 100%;
  margin-top: 20px;
  border: 2px solid #d3d3d3;
  border-radius: 4px;
  background-color: #ccc;
  padding: 10px;
}

.selection-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
}

.selection-table th,
.selection-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

.selection-table th {
  background-color: #f2f2f2;
}

.selection-table .no-data {
  text-align: center;
  color: #888;
}

.v-dropdown {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #ffffff;
  margin-right: 10px;
}

button {
  background-color: #c1c0c0;
  color: rgb(108, 108, 108);
  padding: 10px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: bold;
}

button:hover {
  background-color: #a8a6a6;
}

/* Media Queries for Responsiveness */

/* Tablets and large phones (max-width: 768px) */
@media (max-width: 768px) {
  .fracture-diagnosis-tab {
    flex-direction: column;
    align-items: center; /* Center items in column layout */
  }

  .image-container {
    max-width: 80%; /* Allow image to take more space */
    margin-bottom: 20px; /* Add space below the image */
  }

  .selection-container {
    padding-left: 0;
    width: 90%; /* Reduce width to fit screen better */
  }

  .radio-group-inline {
    margin-left: 0;
    justify-content: flex-start; /* Align items to the start */
    width: 100%; /* Ensure it takes full width */
  }

  .dropdown-group {
    flex-direction: column; /* Stack label and select */
    align-items: flex-start;
  }

  .dropdown-group label {
    margin-bottom: 5px; /* Space between label and select */
  }
}

/* Phones (max-width: 480px) */
@media (max-width: 480px) {
  .image-container {
    max-width: 100%; /* Allow full width for the image */
    min-height: auto; /* Remove min-height to fit content */
  }

  .selection-container {
    padding-left: 0;
    width: 100%;
  }

  .radio-group-inline {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0;
    width: 100%;
  }

  .dropdown-group {
    width: 100%;
    margin-bottom: 20px;
  }

  .selection-table-container {
    padding: 5px; /* Reduce padding for smaller screens */
  }

  .selection-table th,
  .selection-table td {
    padding: 6px; /* Reduce padding for table cells */
  }

  button {
    width: 100%; /* Make button full-width */
    text-align: center;
    padding: 8px;
  }
}
</style>
