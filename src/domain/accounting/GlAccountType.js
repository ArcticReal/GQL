
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

import {CostComponentCalcType} from '../product/CostComponentCalc.js';
import {AcctgTransEntryType} from '../accounting/AcctgTransEntry.js';
import {ProductCategoryGlAccountType} from '../product/ProductCategoryGlAccount.js';
import {GlAccountTypeDefaultType} from '../accounting/GlAccountTypeDefault.js';
import {ProductGlAccountType} from '../product/ProductGlAccount.js';
import {GlAccountType} from '../accounting/GlAccount.js';
import {PaymentGlAccountTypeMapType} from '../accounting/PaymentGlAccountTypeMap.js';
import {PartyGlAccountType} from '../accounting/PartyGlAccount.js';


const GlAccountTypeType = new GraphQLObjectType({
  name: 'GlAccountTypeType',
  description: 'Type for GlAccountType in accounting',

  fields: () => ({
    parentType: {
      type: GlAccountTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbiz.load(`glAccountTypes/find?glAccountTypeId=${glAccountType.parentTypeId}`)
    },
    glAccountTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    glAccountTypeDefaults: {
      type: new GraphQLList(GlAccountTypeDefaultType),
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`glAccountTypeDefaults/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    },
    partyGlAccounts: {
      type: new GraphQLList(PartyGlAccountType),
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`partyGlAccounts/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    },
    costComponentCalcs: {
      type: new GraphQLList(CostComponentCalcType),
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`costComponentCalcs/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    },
    acctgTransEntries: {
      type: new GraphQLList(AcctgTransEntryType),
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`acctgTransEntrys/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    },
    productCategoryGlAccounts: {
      type: new GraphQLList(ProductCategoryGlAccountType),
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`productCategoryGlAccounts/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    },
    glAccounts: {
      type: new GraphQLList(GlAccountType),
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`glAccounts/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    },
    productGlAccounts: {
      type: new GraphQLList(ProductGlAccountType),
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`productGlAccounts/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    },
    glAccountTypes: {
      type: new GraphQLList(GlAccountTypeType),
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`glAccountTypes/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    },
    paymentGlAccountTypeMaps: {
      type: new GraphQLList(PaymentGlAccountTypeMapType),
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`paymentGlAccountTypeMaps/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    }
  })
});

export {GlAccountTypeType};
    




const GlAccountTypeInputType = new GraphQLInputObjectType({
  name: 'GlAccountTypeInputType',
  description: 'input type for GlAccountType in accounting',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    glAccountTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString}
  })
});

export {GlAccountTypeInputType};
    