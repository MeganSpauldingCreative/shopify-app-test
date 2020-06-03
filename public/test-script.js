
  const updateBTN2 = document.getElementById('updateCustomerTag')

  const taglist = ["taglist"]

  const customerID = 3127831920738;

  let query = `mutation {
    customerUpdate(input: {id: "gid://shopify/Customer/${customerID}", tags: ${taglist}}) {
      customer {
        id
        tags
      }
    }
  }`;

  updateBTN2.addEventListener('click', function () {
    apiCall(query).then(response => {
      console.log(response);
    }).catch(error => console.log(error));

  })

  function apiCall(query) {
    return fetch('https://test-dylan-lex-app.myshopify.com/admin/api/2020-04/graphql.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/graphql',
        'Accept': 'application/json',
        'Access-Control-Origin': '*',
        'X-Shopify-Access-Token': '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'
      },
      'body': JSON.stringify({'query': query}),
    }).then(response => console.log(response)).catch(error => console.log(error));
  }
