import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollog/react-hooks';

const CREATE_SCRIPT_TAG = gql
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
;

function ScriptPage() {
	return(
<p>HI</p>
	)
}