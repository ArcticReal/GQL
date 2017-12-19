
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

import {FinAccountTransTypeAttrType} from '../../accounting/FinAccountTransTypeAttr/FinAccountTransTypeAttrType.js';
import {FinAccountTransType} from '../../accounting/FinAccountTrans/FinAccountTransType.js';


const FinAccountTransTypeType = new GraphQLObjectType({
  name: 'FinAccountTransTypeType',
  description: 'Type for FinAccountTransType in accounting',

  fields: () => ({
    finAccountTransTypeId: {type: GraphQLString},
    parentType: {
      type: FinAccountTransTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (finAccountTransType, args, {loaders}) => loaders.ofbiz.load(`accounting/finAccount/finAccountTransTypes/find?finAccountTransTypeId=${finAccountTransType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    finAccountTranses: {
      type: new GraphQLList(FinAccountTransType),
      args : {},
      resolve: (finAccountTransType, args, {loaders}) => loaders.ofbizArray.load(`accounting/finAccount/finAccountTranss/find?finAccountTransTypeId=${finAccountTransType.finAccountTransTypeId}`)
    },
    finAccountTransTypeAttrs: {
      type: new GraphQLList(FinAccountTransTypeAttrType),
      args : {},
      resolve: (finAccountTransType, args, {loaders}) => loaders.ofbizArray.load(`accounting/finAccount/finAccountTransTypeAttrs/find?finAccountTransTypeId=${finAccountTransType.finAccountTransTypeId}`)
    },
    finAccountTransTypes: {
      type: new GraphQLList(FinAccountTransTypeType),
      args : {},
      resolve: (finAccountTransType, args, {loaders}) => loaders.ofbizArray.load(`accounting/finAccount/finAccountTransTypes/find?finAccountTransTypeId=${finAccountTransType.finAccountTransTypeId}`)
    }
  })
});

export {FinAccountTransTypeType};
    