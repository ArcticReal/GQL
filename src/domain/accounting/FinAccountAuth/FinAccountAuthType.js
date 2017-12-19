
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FinAccountType} from '../../accounting/FinAccount/FinAccountType.js';


const FinAccountAuthType = new GraphQLObjectType({
  name: 'FinAccountAuthType',
  description: 'Type for FinAccountAuth in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    finAccountAuthId: {type: GraphQLString},
    finAccount: {
      type: FinAccountType,
      args : {finAccountId: {type: GraphQLString}},
      resolve: (finAccountAuth, args, {loaders}) => loaders.ofbiz.load(`accounting/finAccounts/find?finAccountId=${finAccountAuth.finAccountId}`)
    },
    amount: {type: GraphQLFloat},
    currencyUomId: {type: GraphQLString},
    authorizationDate: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FinAccountAuthType};
    