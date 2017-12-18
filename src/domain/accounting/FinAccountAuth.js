
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

import {FinAccountType} from '../accounting/FinAccount.js';


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
    




const FinAccountAuthInputType = new GraphQLInputObjectType({
  name: 'FinAccountAuthInputType',
  description: 'input type for FinAccountAuth',

  fields: () => ({
    amount: {type: GraphQLFloat},
    authorizationDate: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    finAccountAuthId: {type: GraphQLString},
    finAccountId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FinAccountAuthInputType};
    