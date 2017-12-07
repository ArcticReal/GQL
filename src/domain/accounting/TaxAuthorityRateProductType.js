
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {InvoiceItemType} from '../accounting/InvoiceItemType.js';
import {OrderAdjustmentType} from '../order/OrderAdjustmentType.js';
import {ProductCategoryType} from '../product/ProductCategoryType.js';
import {ReturnAdjustmentType} from '../order/ReturnAdjustmentType.js';
import {TaxAuthorityRateTypeType} from '../accounting/TaxAuthorityRateTypeType.js';
import {ProductStoreType} from '../product/ProductStoreType.js';
import {TaxAuthorityType} from '../accounting/TaxAuthorityType.js';


const TaxAuthorityRateProductType = new GraphQLObjectType({
  name: 'TaxAuthorityRateProductType',
  description: 'Type for TaxAuthorityRateProduct in accounting',

  fields: () => ({
    taxShipping: {type: GraphQLBoolean},
    taxPercentage: {type: GraphQLFloat},
    taxAuthorityRateSeqId: {type: GraphQLString},
    description: {type: GraphQLString},
    titleTransferEnumId: {type: GraphQLString},
    taxPromotions: {type: GraphQLBoolean},
    thruDate: {type: GraphQLString},
    taxAuthPartyId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (taxAuthorityRateProduct, args, {loaders}) => loaders.ofbiz.load(`productCategorys/find?productCategoryId=${taxAuthorityRateProduct.productCategoryId}`)
    },
    taxAuthGeo: {
      type: TaxAuthorityType,
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (taxAuthorityRateProduct, args, {loaders}) => loaders.ofbiz.load(`taxAuthoritys/find?taxAuthGeoId=${taxAuthorityRateProduct.taxAuthGeoId}`)
    },
    minItemPrice: {type: GraphQLFloat},
    minPurchase: {type: GraphQLFloat},
    taxAuthorityRateType: {
      type: TaxAuthorityRateTypeType,
      args : {taxAuthorityRateTypeId: {type: GraphQLString}},
      resolve: (taxAuthorityRateProduct, args, {loaders}) => loaders.ofbiz.load(`taxAuthorityRateTypes/find?taxAuthorityRateTypeId=${taxAuthorityRateProduct.taxAuthorityRateTypeId}`)
    },
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (taxAuthorityRateProduct, args, {loaders}) => loaders.ofbiz.load(`productStores/find?productStoreId=${taxAuthorityRateProduct.productStoreId}`)
    },
    invoiceItem: {
      type: new GraphQLList(InvoiceItemType),
      args : {taxAuthorityRateSeqId: {type: GraphQLString}},
      resolve: (taxAuthorityRateProduct, args, {loaders}) => loaders.ofbizArray.load(`invoiceItems/find?taxAuthorityRateSeqId=${taxAuthorityRateProduct.taxAuthorityRateSeqId}`)
    },
    returnAdjustment: {
      type: new GraphQLList(ReturnAdjustmentType),
      args : {taxAuthorityRateSeqId: {type: GraphQLString}},
      resolve: (taxAuthorityRateProduct, args, {loaders}) => loaders.ofbizArray.load(`returnAdjustments/find?taxAuthorityRateSeqId=${taxAuthorityRateProduct.taxAuthorityRateSeqId}`)
    },
    orderAdjustment: {
      type: new GraphQLList(OrderAdjustmentType),
      args : {taxAuthorityRateSeqId: {type: GraphQLString}},
      resolve: (taxAuthorityRateProduct, args, {loaders}) => loaders.ofbizArray.load(`orderAdjustments/find?taxAuthorityRateSeqId=${taxAuthorityRateProduct.taxAuthorityRateSeqId}`)
    }
  })
});

export {TaxAuthorityRateProductType};
    