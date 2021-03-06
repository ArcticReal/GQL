
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

import {ProductType} from '../../product/Product/ProductType.js';
import {ShipmentItemType} from '../../shipment/ShipmentItem/ShipmentItemType.js';


const ShipmentPackageContentType = new GraphQLObjectType({
  name: 'ShipmentPackageContentType',
  description: 'Type for ShipmentPackageContent in shipment',

  fields: () => ({
    quantity: {type: GraphQLFloat},
    shipment: {
      type: ShipmentItemType,
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentPackageContent, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentItems/find?shipmentId=${shipmentPackageContent.shipmentId}`)
    },
    subProductQuantity: {type: GraphQLFloat},
    shipmentPackageSeqId: {type: GraphQLString},
    subProduct: {
      type: ProductType,
      args : {subProductId: {type: GraphQLString}},
      resolve: (shipmentPackageContent, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${shipmentPackageContent.subProductId}`)
    },
    shipmentItemSeqId: {type: GraphQLString}
  })
});

export {ShipmentPackageContentType};
    