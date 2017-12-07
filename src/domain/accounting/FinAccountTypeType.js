
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
import {FinAccountTypeGlAccountType} from '../accounting/FinAccountTypeGlAccountType.js';
import {FinAccountTypeAttrType} from '../accounting/FinAccountTypeAttrType.js';


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
    finAccountTypeAttr: {
      type: new GraphQLList(FinAccountTypeAttrType),
      args : {finAccountTypeId: {type: GraphQLString}},
      resolve: (finAccountType, args, {loaders}) => loaders.ofbizArray.load(`finAccountTypeAttrs/find?finAccountTypeId=${finAccountType.finAccountTypeId}`)
    },
    finAccount: {
      type: new GraphQLList(FinAccountType),
      args : {finAccountTypeId: {type: GraphQLString}},
      resolve: (finAccountType, args, {loaders}) => loaders.ofbizArray.load(`finAccounts/find?finAccountTypeId=${finAccountType.finAccountTypeId}`)
    },
    finAccountTypeGlAccount: {
      type: new GraphQLList(FinAccountTypeGlAccountType),
      args : {finAccountTypeId: {type: GraphQLString}},
      resolve: (finAccountType, args, {loaders}) => loaders.ofbizArray.load(`finAccountTypeGlAccounts/find?finAccountTypeId=${finAccountType.finAccountTypeId}`)
    },
    finAccountType: {
      type: new GraphQLList(FinAccountTypeType),
      args : {finAccountTypeId: {type: GraphQLString}},
      resolve: (finAccountType, args, {loaders}) => loaders.ofbizArray.load(`finAccountTypes/find?finAccountTypeId=${finAccountType.finAccountTypeId}`)
    }
  })
});

export {FinAccountTypeType};
    