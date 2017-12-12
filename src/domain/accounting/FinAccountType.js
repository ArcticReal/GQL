
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
      resolve: (finAccountType, args, {loaders}) => loaders.ofbiz.load(`accounting/finAccount/finAccountTypes/find?finAccountTypeId=${finAccountType.parentTypeId}`)
    },
    replenishEnumId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    finAccountTypeId: {type: GraphQLString},
    isRefundable: {type: GraphQLBoolean},
    finAccountTypeAttrs: {
      type: new GraphQLList(FinAccountTypeAttrType),
      args : {},
      resolve: (finAccountType, args, {loaders}) => loaders.ofbizArray.load(`accounting/finAccount/finAccountTypeAttrs/find?finAccountTypeId=${finAccountType.finAccountTypeId}`)
    },
    finAccounts: {
      type: new GraphQLList(FinAccountType),
      args : {},
      resolve: (finAccountType, args, {loaders}) => loaders.ofbizArray.load(`accounting/finAccounts/find?finAccountTypeId=${finAccountType.finAccountTypeId}`)
    },
    finAccountTypeGlAccounts: {
      type: new GraphQLList(FinAccountTypeGlAccountType),
      args : {},
      resolve: (finAccountType, args, {loaders}) => loaders.ofbizArray.load(`accounting/finAccount/finAccountTypeGlAccounts/find?finAccountTypeId=${finAccountType.finAccountTypeId}`)
    },
    finAccountTypes: {
      type: new GraphQLList(FinAccountTypeType),
      args : {},
      resolve: (finAccountType, args, {loaders}) => loaders.ofbizArray.load(`accounting/finAccount/finAccountTypes/find?finAccountTypeId=${finAccountType.finAccountTypeId}`)
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
    