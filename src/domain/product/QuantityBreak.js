
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
      resolve: (quantityBreak, args, {loaders}) => loaders.ofbiz.load(`quantityBreakTypes/find?quantityBreakTypeId=${quantityBreak.quantityBreakTypeId}`)
    },
    fromQuantity: {type: GraphQLFloat},
    quantityBreakId: {type: GraphQLString},
    shipmentCostEstimates: {
      type: new GraphQLList(ShipmentCostEstimateType),
      args : {quantityBreakId: {type: GraphQLString}},
      resolve: (quantityBreak, args, {loaders}) => loaders.ofbizArray.load(`shipmentCostEstimates/find?quantityBreakId=${quantityBreak.quantityBreakId}`)
    }
  })
});

export {QuantityBreakType};
    




const QuantityBreakInputType = new GraphQLInputObjectType({
  name: 'QuantityBreakInputType',
  description: 'input type for QuantityBreak in product',

  fields: () => ({
    thruQuantity: {type: GraphQLFloat},
    quantityBreakTypeId: {type: GraphQLString},
    fromQuantity: {type: GraphQLFloat},
    quantityBreakId: {type: GraphQLString}
  })
});

export {QuantityBreakInputType};
    