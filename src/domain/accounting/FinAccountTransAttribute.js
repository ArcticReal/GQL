
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

import {FinAccountTransType} from '../accounting/FinAccountTrans.js';


const FinAccountTransAttributeType = new GraphQLObjectType({
  name: 'FinAccountTransAttributeType',
  description: 'Type for FinAccountTransAttribute in accounting',

  fields: () => ({
    finAccountTrans: {
      type: FinAccountTransType,
      args : {finAccountTransId: {type: GraphQLString}},
      resolve: (finAccountTransAttribute, args, {loaders}) => loaders.ofbiz.load(`accounting/finAccount/finAccountTranss/find?finAccountTransId=${finAccountTransAttribute.finAccountTransId}`)
    },
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {FinAccountTransAttributeType};
    




const FinAccountTransAttributeInputType = new GraphQLInputObjectType({
  name: 'FinAccountTransAttributeInputType',
  description: 'input type for FinAccountTransAttribute in accounting',

  fields: () => ({
    finAccountTransId: {type: GraphQLString},
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {FinAccountTransAttributeInputType};
    