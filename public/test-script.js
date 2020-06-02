console.log("This code is runnning")
const updateBTN2 = document.getElementById("updateCustomerTag")

const header = $('header.site-header').parent();

updateBTN2.addEventListener('click', function() {

	console.log('you cliked this')
	console.log(customerID)

	apiCall(query).then(response => {
  console.log(response)
}).catch(error => console.log("error2"));

})



let query =  `mutation {
    customerUpdate(input: {id: "gid://shopify/Customer/${customerID}", tags: ["thisisatest"]}) {
      customer {
        id
        tags
      }
    }
  }`;




 
function apiCall(query) {
  return fetch('https://test-dylan-lex-app.myshopify.com/admin/api/2020-04/graphql.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/graphql',
      "Accept": "application/json",
      "Access-Control-Origin": "*",
      'X-Shopify-Access-Token': "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"
    },
    "body": JSON.stringify({ "query" : query }),
  }).then(response => console.log(response)).catch(error => console.log(error));
}
 

