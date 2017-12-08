
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

import {AgreementItemType} from '../party/AgreementItem.js';
import {PartyType} from '../party/Party.js';
import {ProductType} from '../product/Product.js';
import {SupplierRatingTypeType} from '../product/SupplierRatingType.js';
import {SupplierPrefOrderType} from '../product/SupplierPrefOrder.js';


const SupplierProductType = new GraphQLObjectType({
  name: 'SupplierProductType',
  description: 'Type for SupplierProduct in product',

  fields: () => ({
    supplierProductName: {type: GraphQLString},
    comments: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (supplierProduct, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${supplierProduct.productId}`)
    },
    canDropShip: {type: GraphQLBoolean},
    minimumOrderQuantity: {type: GraphQLFloat},
    supplierRatingType: {
      type: SupplierRatingTypeType,
      args : {supplierRatingTypeId: {type: GraphQLString}},
      resolve: (supplierProduct, args, {loaders}) => loaders.ofbiz.load(`supplierRatingTypes/find?supplierRatingTypeId=${supplierProduct.supplierRatingTypeId}`)
    },
    agreementItemSeqId: {type: GraphQLString},
    quantityUomId: {type: GraphQLString},
    supplierProductId: {type: GraphQLString},
    supplierPrefOrder: {
      type: SupplierPrefOrderType,
      args : {supplierPrefOrderId: {type: GraphQLString}},
      resolve: (supplierProduct, args, {loaders}) => loaders.ofbiz.load(`supplierPrefOrders/find?supplierPrefOrderId=${supplierProduct.supplierPrefOrderId}`)
    },
    unitsIncluded: {type: GraphQLFloat},
    orderQtyIncrements: {type: GraphQLFloat},
    currencyUomId: {type: GraphQLString},
    availableFromDate: {type: GraphQLString},
    shippingPrice: {type: GraphQLFloat},
    agreement: {
      type: AgreementItemType,
      args : {agreementId: {type: GraphQLString}},
      resolve: (supplierProduct, args, {loaders}) => loaders.ofbiz.load(`agreementItems/find?agreementId=${supplierProduct.agreementId}`)
    },
    availableThruDate: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (supplierProduct, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${supplierProduct.partyId}`)
    },
    standardLeadTimeDays: {type: GraphQLFloat},
    lastPrice: {type: GraphQLFloat}
  })
});

export {SupplierProductType};
    




const SupplierProductInputType = new GraphQLInputObjectType({
  name: 'SupplierProductInputType',
  description: 'input type for SupplierProduct in product',

  fields: () => ({
    supplierProductName: {type: GraphQLString},
    comments: {type: GraphQLString},
    productId: {type: GraphQLString},
    canDropShip: {type: GraphQLBoolean},
    minimumOrderQuantity: {type: GraphQLFloat},
    supplierRatingTypeId: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString},
    quantityUomId: {type: GraphQLString},
    supplierProductId: {type: GraphQLString},
    supplierPrefOrderId: {type: GraphQLString},
    unitsIncluded: {type: GraphQLFloat},
    orderQtyIncrements: {type: GraphQLFloat},
    currencyUomId: {type: GraphQLString},
    availableFromDate: {type: GraphQLString},
    shippingPrice: {type: GraphQLFloat},
    agreementId: {type: GraphQLString},
    availableThruDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    standardLeadTimeDays: {type: GraphQLFloat},
    lastPrice: {type: GraphQLFloat}
  })
});

export {SupplierProductInputType};
    