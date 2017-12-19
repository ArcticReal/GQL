
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

import {CostComponentCalcType} from '../../product/CostComponentCalc/CostComponentCalcType.js';
import {AcctgTransEntryType} from '../../accounting/AcctgTransEntry/AcctgTransEntryType.js';
import {ProductCategoryGlAccountType} from '../../product/ProductCategoryGlAccount/ProductCategoryGlAccountType.js';
import {GlAccountTypeDefaultType} from '../../accounting/GlAccountTypeDefault/GlAccountTypeDefaultType.js';
import {ProductGlAccountType} from '../../product/ProductGlAccount/ProductGlAccountType.js';
import {GlAccountType} from '../../accounting/GlAccount/GlAccountType.js';
import {PaymentGlAccountTypeMapType} from '../../accounting/PaymentGlAccountTypeMap/PaymentGlAccountTypeMapType.js';
import {PartyGlAccountType} from '../../accounting/PartyGlAccount/PartyGlAccountType.js';


const GlAccountTypeType = new GraphQLObjectType({
  name: 'GlAccountTypeType',
  description: 'Type for GlAccountType in accounting',

  fields: () => ({
    parentType: {
      type: GlAccountTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccount/glAccountTypes/find?glAccountTypeId=${glAccountType.parentTypeId}`)
    },
    glAccountTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    glAccountTypeDefaults: {
      type: new GraphQLList(GlAccountTypeDefaultType),
      args : {},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/glAccountTypeDefaults/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    },
    partyGlAccounts: {
      type: new GraphQLList(PartyGlAccountType),
      args : {},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/partyGlAccounts/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    },
    costComponentCalcs: {
      type: new GraphQLList(CostComponentCalcType),
      args : {},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`product/costComponent/costComponentCalcs/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    },
    acctgTransEntries: {
      type: new GraphQLList(AcctgTransEntryType),
      args : {},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTrans/acctgTransEntrys/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    },
    productCategoryGlAccounts: {
      type: new GraphQLList(ProductCategoryGlAccountType),
      args : {},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productCategoryGlAccounts/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    },
    glAccounts: {
      type: new GraphQLList(GlAccountType),
      args : {},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccounts/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    },
    productGlAccounts: {
      type: new GraphQLList(ProductGlAccountType),
      args : {},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productGlAccounts/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    },
    glAccountTypes: {
      type: new GraphQLList(GlAccountTypeType),
      args : {},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/glAccountTypes/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    },
    paymentGlAccountTypeMaps: {
      type: new GraphQLList(PaymentGlAccountTypeMapType),
      args : {},
      resolve: (glAccountType, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/paymentGlAccountTypeMaps/find?glAccountTypeId=${glAccountType.glAccountTypeId}`)
    }
  })
});

export {GlAccountTypeType};
    