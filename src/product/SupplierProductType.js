
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Product} from '../product/Product.js';
import {SupplierRatingType} from '../product/SupplierRatingType.js';
import {SupplierPrefOrder} from '../product/SupplierPrefOrder.js';
import {AgreementItem} from '../product/AgreementItem.js';
import {Party} from '../product/Party.js';


const SupplierProduct = new GraphQLObjectType({
  name: 'SupplierProductType',
  description: 'Type for SupplierProduct in product',

  fields: () => ({
    supplierProductName: {type: GraphQLString},
    comments: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (supplierProduct, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    canDropShip: {type: GraphQLBoolean},
    minimumOrderQuantity: {type: GraphQLFloat},
    supplierRatingType: {
      type: SupplierRatingTypeType,
      args : {supplierRatingTypeId: {type: GraphQLString}},
      resolve: (supplierProduct, args, {loaders}) => loaders.ofbizArray.load(`supplierRatingTypes/find?=${args.supplierRatingTypeId}`)
    },
    agreementItemSeqId: {type: GraphQLString},
    quantityUomId: {type: GraphQLString},
    supplierProductId: {type: GraphQLString},
    supplierPrefOrder: {
      type: SupplierPrefOrderType,
      args : {supplierPrefOrderId: {type: GraphQLString}},
      resolve: (supplierProduct, args, {loaders}) => loaders.ofbizArray.load(`supplierPrefOrders/find?=${args.supplierPrefOrderId}`)
    },
    unitsIncluded: {type: GraphQLFloat},
    orderQtyIncrements: {type: GraphQLFloat},
    currencyUomId: {type: GraphQLString},
    availableFromDate: {type: GraphQLString},
    shippingPrice: {type: GraphQLFloat},
    agreement: {
      type: AgreementItemType,
      args : {agreementId: {type: GraphQLString}},
      resolve: (supplierProduct, args, {loaders}) => loaders.ofbizArray.load(`agreementItems/find?=${args.agreementId}`)
    },
    availableThruDate: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (supplierProduct, args, {loaders}) => loaders.ofbizArray.load(`partys/find?=${args.partyId}`)
    },
    standardLeadTimeDays: {type: GraphQLFloat},
    lastPrice: {type: GraphQLFloat}
  })
});

export {SupplierProduct};
    