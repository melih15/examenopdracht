<?php
  //code shared between every page
  include "inc/header.php";
?>

<div class="row justify-content-center" id="contractContainer">
  <div class="col-8 row justify-content-center">
    <div class="col-4">
      
    </div>
  </div>
  <div id="contractsContainer" class="row justify-content-spacebetween">

  </div>
</div>

<!-- template for the contracten -->
<template id="contractTemplate">
  {{#.}}
    <div class="contractContainer col-3 mb-4">
      <div>
        <input class="contractId" value="{{id}}" hidden>
        <input class="contractLeverancier" value="{{leverancier}}" hidden>
        <h5>Leverancier: {{leverancier}}</h5>
        <h5>Product: {{product}}</h5>
        <h5>Status: {{status}}</h5>
        <h5>Contract manager: {{contractManager}}</h5>
      </div>
    </div>
  {{/.}}
</template>

<?php
  //code shared between every page
  include "inc/footer.php";
?>
<!-- js library for making graphs -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<!-- js file for the rapportage page -->
<script src="js/rapportage.js"></script>