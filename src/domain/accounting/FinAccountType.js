
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
import {FinAccountTypeGlAccountType} from '../accounting/FinAccountTypeGlAccount.js';
import {FinAccountTypeAttrType} from '../accounting/FinAccountTypeAttr.js';


const FinAccountTypeType = new GraphQLObjectType({
  name: 'FinAccountTypeType',
  description: 'Type for FinAccountType in accounting',

  fields: () => ({
    parentType: {
      type: FinAccountTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (finAccountType, args, {loaders}) => loaders.ofbiz.load(`finAccountTypes/find?finAccountTypeId=${finAccountType.parentTypeId}`)
    },
    replenishEnumId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    finAccountTypeId: {type: GraphQLString},
    isRefundable: {type: GraphQLBoolean},
    finAccountTypeAttrs: {
      type: new GraphQLList(FinAccountTypeAttrType),
      args : {finAccountTypeId: {type: GraphQLString}},
      resolve: (finAccountType, args, {loaders}) => loaders.ofbizArray.load(`finAccountTypeAttrs/find?finAccountTypeId=${finAccountType.finAccountTypeId}`)
    },
    finAccounts: {
      type: new GraphQLList(FinAccountType),
      args : {finAccountTypeId: {type: GraphQLString}},
      resolve: (finAccountType, args, {loaders}) => loaders.ofbizArray.load(`finAccounts/find?finAccountTypeId=${finAccountType.finAccountTypeId}`)
    },
    finAccountTypeGlAccounts: {
      type: new GraphQLList(FinAccountTypeGlAccountType),
      args : {finAccountTypeId: {type: GraphQLString}},
      resolve: (finAccountType, args, {loaders}) => loaders.ofbizArray.load(`finAccountTypeGlAccounts/find?finAccountTypeId=${finAccountType.finAccountTypeId}`)
    },
    finAccountTypes: {
      type: new GraphQLList(FinAccountTypeType),
      args : {finAccountTypeId: {type: GraphQLString}},
      resolve: (finAccountType, args, {loaders}) => loaders.ofbizArray.load(`finAccountTypes/find?finAccountTypeId=${finAccountType.finAccountTypeId}`)
    }
  })
});

export {FinAccountTypeType};
    




const FinAccountTypeInputType = new GraphQLInputObjectType({
  name: 'FinAccountTypeInputType',
  description: 'input type for FinAccountType in accounting',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    replenishEnumId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    finAccountTypeId: {type: GraphQLString},
    isRefundable: {type: GraphQLBoolean}
  })
});

export {FinAccountTypeInputType};
    