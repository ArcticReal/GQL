import {loginMutations} from '../loginServices/login.js';
import {generatedMutations} from '../domain/mutationBuilder/generatedMutations.js';

const mutationFields = Object.assign( {},
  loginMutations,
  generatedMutations
);

export {mutationFields};
