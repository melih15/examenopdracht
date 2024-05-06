let allContracts;

$(document).ready(function () {
  $.ajax({
    type: "POST",
    url: "ajax/getAllContracts.php",
    dataType: "json",
    success: function(contracts){
      allContracts = contracts;
      LoadContracts(allContracts);
    }
  });
});

function LoadContracts(data){
  //gets the contract template
  var contractTemplate = $("#contractTemplate").html();
  //gets how to sort the contracts
  let sortState = parseInt($("#sortSelect").find(":selected").val())
  let ordering, sortOrder;
  switch (sortState) {
    case 0:
      //sorts based on the leverancier
      data.sort(
        (a,b) => (a.leverancier > b.leverancier) ? 1 : ((b.leverancier > a.leverancier) ? -1 : 0)
      );
      break;
    case 1:
      //sorts based on prioriteit
      ordering = {};
      //sets the order in which to sort
      sortOrder = ['hoog', 'middel', 'laag', 'Onbekend'];
      for (var i=0; i<sortOrder.length; i++){
        ordering[sortOrder[i]] = i;
      }
      //sorts the data
      data.sort( function(a, b) {
        return (ordering[a.prioriteit] - ordering[b.prioriteit]) || a.prioriteit.localeCompare(b.prioriteit);
      });
      break;
    case 2:
      //sorts based on status
      ordering = {};
      //sets the order in which to sort
      sortOrder = ['Open', 'In onderhandeling', 'Gesloten', 'Onbekend'];
      for (var i=0; i<sortOrder.length; i++){
        ordering[sortOrder[i]] = i;
      }
      //sorts the data
      data.sort( function(a, b) {
        return (ordering[a.status] - ordering[b.status]) || a.status.localeCompare(b.status);
      });
      break;
    case 3:
      //sorts based on product
      data.sort(
        (a,b) => (a.product > b.product) ? 1 : ((b.product > a.product) ? -1 : 0)
      )
      break;
    case 4:
      //sorts based on contract manager
      data.sort( function(a, b) {
        if (a.contractManager === b.contractManager) {
          return 0;
        }
        //if contract manager empty put at bottom of the list
        if (a.contractManager === "") {
          return 1;
        }
        if (b.contractManager === "") {
          return -1;
        }
        return a.contractManager < b.contractManager ? -1 : 1;
      });
      break;
    default:
      break;
  }
  //render the output with Mustache
  var renderTemplate = Mustache.render(contractTemplate, data)
  $("#contractsContainer").html(renderTemplate);
}