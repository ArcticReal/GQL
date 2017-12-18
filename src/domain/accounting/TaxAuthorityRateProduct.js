
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

import {InvoiceItemType} from '../accounting/InvoiceItem.js';
import {OrderAdjustmentType} from '../order/OrderAdjustment.js';
import {ProductCategoryType} from '../product/ProductCategory.js';
import {ReturnAdjustmentType} from '../order/ReturnAdjustment.js';
import {TaxAuthorityRateTypeType} from '../accounting/TaxAuthorityRateType.js';
import {ProductStoreType} from '../product/ProductStore.js';
import {TaxAuthorityType} from '../accounting/TaxAuthority.js';


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
      resolve: (taxAuthorityRateProduct, args, {loaders}) => loaders.ofbiz.load(`product/product/productCategorys/find?productCategoryId=${taxAuthorityRateProduct.productCategoryId}`)
    },
    taxAuthGeo: {
      type: TaxAuthorityType,
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (taxAuthorityRateProduct, args, {loaders}) => loaders.ofbiz.load(`accounting/taxAuthoritys/find?taxAuthGeoId=${taxAuthorityRateProduct.taxAuthGeoId}`)
    },
    minItemPrice: {type: GraphQLFloat},
    minPurchase: {type: GraphQLFloat},
    taxAuthorityRateType: {
      type: TaxAuthorityRateTypeType,
      args : {taxAuthorityRateTypeId: {type: GraphQLString}},
      resolve: (taxAuthorityRateProduct, args, {loaders}) => loaders.ofbiz.load(`accounting/taxAuthority/taxAuthorityRateTypes/find?taxAuthorityRateTypeId=${taxAuthorityRateProduct.taxAuthorityRateTypeId}`)
    },
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (taxAuthorityRateProduct, args, {loaders}) => loaders.ofbiz.load(`product/product/productStores/find?productStoreId=${taxAuthorityRateProduct.productStoreId}`)
    },
    invoiceItems: {
      type: new GraphQLList(InvoiceItemType),
      args : {},
      resolve: (taxAuthorityRateProduct, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceItems/find?taxAuthorityRateSeqId=${taxAuthorityRateProduct.taxAuthorityRateSeqId}`)
    },
    returnAdjustments: {
      type: new GraphQLList(ReturnAdjustmentType),
      args : {},
      resolve: (taxAuthorityRateProduct, args, {loaders}) => loaders.ofbizArray.load(`order/returnAdjustments/find?taxAuthorityRateSeqId=${taxAuthorityRateProduct.taxAuthorityRateSeqId}`)
    },
    orderAdjustments: {
      type: new GraphQLList(OrderAdjustmentType),
      args : {},
      resolve: (taxAuthorityRateProduct, args, {loaders}) => loaders.ofbizArray.load(`order/orderAdjustments/find?taxAuthorityRateSeqId=${taxAuthorityRateProduct.taxAuthorityRateSeqId}`)
    }
  })
});

export {TaxAuthorityRateProductType};
    




const TaxAuthorityRateProductInputType = new GraphQLInputObjectType({
  name: 'TaxAuthorityRateProductInputType',
  description: 'input type for TaxAuthorityRateProduct',

  fields: () => ({
    description: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    minItemPrice: {type: GraphQLFloat},
    minPurchase: {type: GraphQLFloat},
    productCategoryId: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    taxAuthGeoId: {type: GraphQLString},
    taxAuthPartyId: {type: GraphQLString},
    taxAuthorityRateSeqId: {type: GraphQLString},
    taxAuthorityRateTypeId: {type: GraphQLString},
    taxPercentage: {type: GraphQLFloat},
    taxPromotions: {type: GraphQLBoolean},
    taxShipping: {type: GraphQLBoolean},
    thruDate: {type: GraphQLString},
    titleTransferEnumId: {type: GraphQLString}
  })
});

export {TaxAuthorityRateProductInputType};
    