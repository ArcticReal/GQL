
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {QuantityBreakTypeType} from '../product/QuantityBreakTypeType.js';
import {ShipmentCostEstimateType} from '../shipment/ShipmentCostEstimateType.js';


const QuantityBreakType = new GraphQLObjectType({
  name: 'QuantityBreakType',
  description: 'Type for QuantityBreak in product',

  fields: () => ({
    thruQuantity: {type: GraphQLFloat},
    quantityBreakType: {
      type: QuantityBreakTypeType,
      args : {quantityBreakTypeId: {type: GraphQLString}},
      resolve: (quantityBreak, args, {loaders}) => loaders.ofbiz.load(`quantityBreakTypes/find?quantityBreakTypeId=${quantityBreak.quantityBreakTypeId}`)
    },
    fromQuantity: {type: GraphQLFloat},
    quantityBreakId: {type: GraphQLString},
    shipmentCostEstimate: {
      type: new GraphQLList(ShipmentCostEstimateType),
      args : {quantityBreakId: {type: GraphQLString}},
      resolve: (quantityBreak, args, {loaders}) => loaders.ofbizArray.load(`shipmentCostEstimates/find?quantityBreakId=${quantityBreak.quantityBreakId}`)
    }
  })
});

export {QuantityBreakType};
    