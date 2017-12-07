
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FinAccountTransTypeAttrType} from '../accounting/FinAccountTransTypeAttrType.js';
import {FinAccountTransType} from '../accounting/FinAccountTransType.js';


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
    finAccountTrans: {
      type: new GraphQLList(FinAccountTransType),
      args : {finAccountTransTypeId: {type: GraphQLString}},
      resolve: (finAccountTransType, args, {loaders}) => loaders.ofbizArray.load(`finAccountTranss/find?finAccountTransTypeId=${finAccountTransType.finAccountTransTypeId}`)
    },
    finAccountTransTypeAttr: {
      type: new GraphQLList(FinAccountTransTypeAttrType),
      args : {finAccountTransTypeId: {type: GraphQLString}},
      resolve: (finAccountTransType, args, {loaders}) => loaders.ofbizArray.load(`finAccountTransTypeAttrs/find?finAccountTransTypeId=${finAccountTransType.finAccountTransTypeId}`)
    },
    finAccountTransType: {
      type: new GraphQLList(FinAccountTransTypeType),
      args : {finAccountTransTypeId: {type: GraphQLString}},
      resolve: (finAccountTransType, args, {loaders}) => loaders.ofbizArray.load(`finAccountTransTypes/find?finAccountTransTypeId=${finAccountTransType.finAccountTransTypeId}`)
    }
  })
});

export {FinAccountTransTypeType};
    