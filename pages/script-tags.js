import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollog/react-hooks';

const CREATE_SCRIPT_TAG = gql`
    mutation scriptTagCreate($input: ScriptTagInput!) {
        scriptTagCreate(input: $input) {
            scriptTag {
                id
            }
            userErrors {
                field
                message
            }
        }
    }
`;

const UPDATE_CUSTOMER_TAGS = gql`
    mutation {
      customerUpdate(input: {id: customerID, tags: ["inspiration-added"]}) {
        customer {
          id
          tags
        }
      }
    }
`;

function ScriptPage() {

    const {createScripts} = useMutation(CREATE_SCRIPT_TAG)
    
	return(
        <p>HI</p>
	)
}