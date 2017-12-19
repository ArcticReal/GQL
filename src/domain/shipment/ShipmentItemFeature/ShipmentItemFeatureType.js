
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

import {ProductFeatureType} from '../../product/ProductFeature/ProductFeatureType.js';
import {ShipmentItemType} from '../../shipment/ShipmentItem/ShipmentItemType.js';


const ShipmentItemFeatureType = new GraphQLObjectType({
  name: 'ShipmentItemFeatureType',
  description: 'Type for ShipmentItemFeature in shipment',

  fields: () => ({
    shipment: {
      type: ShipmentItemType,
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentItemFeature, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentItems/find?shipmentId=${shipmentItemFeature.shipmentId}`)
    },
    productFeature: {
      type: ProductFeatureType,
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (shipmentItemFeature, args, {loaders}) => loaders.ofbiz.load(`product/product/productFeatures/find?productFeatureId=${shipmentItemFeature.productFeatureId}`)
    },
    shipmentItemSeqId: {type: GraphQLString}
  })
});

export {ShipmentItemFeatureType};
    