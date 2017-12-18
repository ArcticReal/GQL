
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


const FinAccountAttributeType = new GraphQLObjectType({
  name: 'FinAccountAttributeType',
  description: 'Type for FinAccountAttribute in accounting',

  fields: () => ({
    finAccount: {
      type: FinAccountType,
      args : {finAccountId: {type: GraphQLString}},
      resolve: (finAccountAttribute, args, {loaders}) => loaders.ofbiz.load(`accounting/finAccounts/find?finAccountId=${finAccountAttribute.finAccountId}`)
    },
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {FinAccountAttributeType};
    




const FinAccountAttributeInputType = new GraphQLInputObjectType({
  name: 'FinAccountAttributeInputType',
  description: 'input type for FinAccountAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    finAccountId: {type: GraphQLString}
  })
});

export {FinAccountAttributeInputType};
    