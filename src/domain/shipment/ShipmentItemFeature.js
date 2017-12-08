
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

import {ProductFeatureType} from '../product/ProductFeature.js';
import {ShipmentItemType} from '../shipment/ShipmentItem.js';


const ShipmentItemFeatureType = new GraphQLObjectType({
  name: 'ShipmentItemFeatureType',
  description: 'Type for ShipmentItemFeature in shipment',

  fields: () => ({
    shipment: {
      type: ShipmentItemType,
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentItemFeature, args, {loaders}) => loaders.ofbiz.load(`shipmentItems/find?shipmentId=${shipmentItemFeature.shipmentId}`)
    },
    productFeature: {
      type: ProductFeatureType,
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (shipmentItemFeature, args, {loaders}) => loaders.ofbiz.load(`productFeatures/find?productFeatureId=${shipmentItemFeature.productFeatureId}`)
    },
    shipmentItemSeqId: {type: GraphQLString}
  })
});

export {ShipmentItemFeatureType};
    




const ShipmentItemFeatureInputType = new GraphQLInputObjectType({
  name: 'ShipmentItemFeatureInputType',
  description: 'input type for ShipmentItemFeature in shipment',

  fields: () => ({
    shipmentId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString}
  })
});

export {ShipmentItemFeatureInputType};
    