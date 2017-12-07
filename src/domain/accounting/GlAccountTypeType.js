
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CostComponentCalcType} from '../product/CostComponentCalcType.js';
import {AcctgTransEntryType} from '../accounting/AcctgTransEntryType.js';
import {ProductCategoryGlAccountType} from '../product/ProductCategoryGlAccountType.js';
import {GlAccountTypeDefaultType} from '../accounting/GlAccountTypeDefaultType.js';
import {ProductGlAccountType} from '../product/ProductGlAccountType.js';
import {GlAccountType} from '../accounting/GlAccountType.js';
import {PaymentGlAccountTypeMapType} from '../accounting/PaymentGlAccountTypeMapType.js';
import {PartyGlAccountType} from '../accounting/PartyGlAccountType.js';


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
    glAccountTypeDefault: {
      type: new GraphQLList(GlAccountTypeDefaultType),
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`glAccountTypeDefaults/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    },
    partyGlAccount: {
      type: new GraphQLList(PartyGlAccountType),
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`partyGlAccounts/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    },
    costComponentCalc: {
      type: new GraphQLList(CostComponentCalcType),
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`costComponentCalcs/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    },
    acctgTransEntry: {
      type: new GraphQLList(AcctgTransEntryType),
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`acctgTransEntrys/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    },
    productCategoryGlAccount: {
      type: new GraphQLList(ProductCategoryGlAccountType),
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`productCategoryGlAccounts/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    },
    glAccount: {
      type: new GraphQLList(GlAccountType),
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`glAccounts/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    },
    productGlAccount: {
      type: new GraphQLList(ProductGlAccountType),
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`productGlAccounts/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    },
    glAccountType: {
      type: new GraphQLList(GlAccountTypeType),
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`glAccountTypes/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    },
    paymentGlAccountTypeMap: {
      type: new GraphQLList(PaymentGlAccountTypeMapType),
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`paymentGlAccountTypeMaps/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    },
    costComponentCalc: {
      type: new GraphQLList(CostComponentCalcType),
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`costComponentCalcs/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    }
  })
});

export {GlAccountTypeType};
    