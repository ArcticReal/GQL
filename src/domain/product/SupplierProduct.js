
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
      resolve: (supplierProduct, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${supplierProduct.productId}`)
    },
    canDropShip: {type: GraphQLBoolean},
    minimumOrderQuantity: {type: GraphQLFloat},
    supplierRatingType: {
      type: SupplierRatingTypeType,
      args : {supplierRatingTypeId: {type: GraphQLString}},
      resolve: (supplierProduct, args, {loaders}) => loaders.ofbiz.load(`product/supplierRatingTypes/find?supplierRatingTypeId=${supplierProduct.supplierRatingTypeId}`)
    },
    agreementItemSeqId: {type: GraphQLString},
    quantityUomId: {type: GraphQLString},
    supplierProductId: {type: GraphQLString},
    supplierPrefOrder: {
      type: SupplierPrefOrderType,
      args : {supplierPrefOrderId: {type: GraphQLString}},
      resolve: (supplierProduct, args, {loaders}) => loaders.ofbiz.load(`product/supplierPrefOrders/find?supplierPrefOrderId=${supplierProduct.supplierPrefOrderId}`)
    },
    unitsIncluded: {type: GraphQLFloat},
    orderQtyIncrements: {type: GraphQLFloat},
    currencyUomId: {type: GraphQLString},
    availableFromDate: {type: GraphQLString},
    shippingPrice: {type: GraphQLFloat},
    agreement: {
      type: AgreementItemType,
      args : {agreementId: {type: GraphQLString}},
      resolve: (supplierProduct, args, {loaders}) => loaders.ofbiz.load(`party/agreement/agreementItems/find?agreementId=${supplierProduct.agreementId}`)
    },
    availableThruDate: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (supplierProduct, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${supplierProduct.partyId}`)
    },
    standardLeadTimeDays: {type: GraphQLFloat},
    lastPrice: {type: GraphQLFloat}
  })
});

export {SupplierProductType};
    




const SupplierProductInputType = new GraphQLInputObjectType({
  name: 'SupplierProductInputType',
  description: 'input type for SupplierProduct',

  fields: () => ({
    agreementId: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString},
    availableFromDate: {type: GraphQLString},
    availableThruDate: {type: GraphQLString},
    canDropShip: {type: GraphQLBoolean},
    comments: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    lastPrice: {type: GraphQLFloat},
    minimumOrderQuantity: {type: GraphQLFloat},
    orderQtyIncrements: {type: GraphQLFloat},
    partyId: {type: GraphQLString},
    productId: {type: GraphQLString},
    quantityUomId: {type: GraphQLString},
    shippingPrice: {type: GraphQLFloat},
    standardLeadTimeDays: {type: GraphQLFloat},
    supplierPrefOrderId: {type: GraphQLString},
    supplierProductId: {type: GraphQLString},
    supplierProductName: {type: GraphQLString},
    supplierRatingTypeId: {type: GraphQLString},
    unitsIncluded: {type: GraphQLFloat}
  })
});

export {SupplierProductInputType};
    