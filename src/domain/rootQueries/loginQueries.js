import {
  GraphQLList,
  GraphQLString,
} from 'graphql';

import { LoggedInPersonType } from '../../loginServices/loggedInPerson.js';

const loginQueries = {
    loggedInPerson: {
      type: LoggedInPersonType,
      args: {

      },
      resolve: (root, args, {loaders}) => loaders.ofbiz.load(`loggedInPerson`)
    },
};

export {loginQueries};
