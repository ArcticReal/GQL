
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

import {FinAccountTransTypeAttrType} from '../accounting/FinAccountTransTypeAttr.js';
import {FinAccountTransType} from '../accounting/FinAccountTrans.js';


const FinAccountTransTypeType = new GraphQLObjectType({
  name: 'FinAccountTransTypeType',
  description: 'Type for FinAccountTransType in accounting',

  fields: () => ({
    finAccountTransTypeId: {type: GraphQLString},
    parentType: {
      type: FinAccountTransTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (finAccountTransType, args, {loaders}) => loaders.ofbiz.load(`finAccountTransTypes/find?finAccountTransTypeId=${finAccountTransType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    finAccountTranses: {
      type: new GraphQLList(FinAccountTransType),
      args : {finAccountTransTypeId: {type: GraphQLString}},
      resolve: (finAccountTransType, args, {loaders}) => loaders.ofbizArray.load(`finAccountTranss/find?finAccountTransTypeId=${finAccountTransType.finAccountTransTypeId}`)
    },
    finAccountTransTypeAttrs: {
      type: new GraphQLList(FinAccountTransTypeAttrType),
      args : {finAccountTransTypeId: {type: GraphQLString}},
      resolve: (finAccountTransType, args, {loaders}) => loaders.ofbizArray.load(`finAccountTransTypeAttrs/find?finAccountTransTypeId=${finAccountTransType.finAccountTransTypeId}`)
    },
    finAccountTransTypes: {
      type: new GraphQLList(FinAccountTransTypeType),
      args : {finAccountTransTypeId: {type: GraphQLString}},
      resolve: (finAccountTransType, args, {loaders}) => loaders.ofbizArray.load(`finAccountTransTypes/find?finAccountTransTypeId=${finAccountTransType.finAccountTransTypeId}`)
    }
  })
});

export {FinAccountTransTypeType};
    




const FinAccountTransTypeInputType = new GraphQLInputObjectType({
  name: 'FinAccountTransTypeInputType',
  description: 'input type for FinAccountTransType in accounting',

  fields: () => ({
    finAccountTransTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString}
  })
});

export {FinAccountTransTypeInputType};
    