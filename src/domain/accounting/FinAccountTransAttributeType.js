
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FinAccountTransType} from '../accounting/FinAccountTransType.js';


const FinAccountTransAttributeType = new GraphQLObjectType({
  name: 'FinAccountTransAttributeType',
  description: 'Type for FinAccountTransAttribute in accounting',

  fields: () => ({
    finAccountTrans: {
      type: FinAccountTransType,
      args : {finAccountTransId: {type: GraphQLString}},
      resolve: (finAccountTransAttribute, args, {loaders}) => loaders.ofbiz.load(`finAccountTranss/find?finAccountTransId=${finAccountTransAttribute.finAccountTransId}`)
    },
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLInt},
    attrName: {type: GraphQLString}
  })
});

export {FinAccountTransAttributeType};
    