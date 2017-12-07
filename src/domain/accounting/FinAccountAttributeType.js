
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FinAccountType} from '../accounting/FinAccountType.js';


const FinAccountAttributeType = new GraphQLObjectType({
  name: 'FinAccountAttributeType',
  description: 'Type for FinAccountAttribute in accounting',

  fields: () => ({
    finAccount: {
      type: FinAccountType,
      args : {finAccountId: {type: GraphQLString}},
      resolve: (finAccountAttribute, args, {loaders}) => loaders.ofbiz.load(`finAccounts/find?finAccountId=${finAccountAttribute.finAccountId}`)
    },
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLInt},
    attrName: {type: GraphQLString}
  })
});

export {FinAccountAttributeType};
    