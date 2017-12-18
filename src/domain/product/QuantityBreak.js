
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

import {QuantityBreakTypeType} from '../product/QuantityBreakType.js';
import {ShipmentCostEstimateType} from '../shipment/ShipmentCostEstimate.js';


const QuantityBreakType = new GraphQLObjectType({
  name: 'QuantityBreakType',
  description: 'Type for QuantityBreak in product',

  fields: () => ({
    thruQuantity: {type: GraphQLFloat},
    quantityBreakType: {
      type: QuantityBreakTypeType,
      args : {quantityBreakTypeId: {type: GraphQLString}},
      resolve: (quantityBreak, args, {loaders}) => loaders.ofbiz.load(`product/quantityBreak/quantityBreakTypes/find?quantityBreakTypeId=${quantityBreak.quantityBreakTypeId}`)
    },
    fromQuantity: {type: GraphQLFloat},
    quantityBreakId: {type: GraphQLString},
    shipmentCostEstimates: {
      type: new GraphQLList(ShipmentCostEstimateType),
      args : {},
      resolve: (quantityBreak, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentCostEstimates/find?quantityBreakId=${quantityBreak.quantityBreakId}`)
    }
  })
});

export {QuantityBreakType};
    




const QuantityBreakInputType = new GraphQLInputObjectType({
  name: 'QuantityBreakInputType',
  description: 'input type for QuantityBreak',

  fields: () => ({
    fromQuantity: {type: GraphQLFloat},
    quantityBreakId: {type: GraphQLString},
    quantityBreakTypeId: {type: GraphQLString},
    thruQuantity: {type: GraphQLFloat}
  })
});

export {QuantityBreakInputType};
    