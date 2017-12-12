
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

import {FinAccountTransTypeType} from '../accounting/FinAccountTransType.js';


const FinAccountTransTypeAttrType = new GraphQLObjectType({
  name: 'FinAccountTransTypeAttrType',
  description: 'Type for FinAccountTransTypeAttr in accounting',

  fields: () => ({
    finAccountTransType: {
      type: FinAccountTransTypeType,
      args : {finAccountTransTypeId: {type: GraphQLString}},
      resolve: (finAccountTransTypeAttr, args, {loaders}) => loaders.ofbiz.load(`accounting/finAccount/finAccountTransTypes/find?finAccountTransTypeId=${finAccountTransTypeAttr.finAccountTransTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {FinAccountTransTypeAttrType};
    




const FinAccountTransTypeAttrInputType = new GraphQLInputObjectType({
  name: 'FinAccountTransTypeAttrInputType',
  description: 'input type for FinAccountTransTypeAttr in accounting',

  fields: () => ({
    finAccountTransTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {FinAccountTransTypeAttrInputType};
    