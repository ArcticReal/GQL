
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {QuantityBreakType} from '../product/QuantityBreakType.js';


const QuantityBreak = new GraphQLObjectType({
  name: 'QuantityBreakType',
  description: 'Type for QuantityBreak in product',

  fields: () => ({
    thruQuantity: {type: GraphQLFloat},
    quantityBreakType: {
      type: QuantityBreakTypeType,
      args : {quantityBreakTypeId: {type: GraphQLString}},
      resolve: (quantityBreak, args, {loaders}) => loaders.ofbizArray.load(`quantityBreakTypes/find?=${args.quantityBreakTypeId}`)
    },
    fromQuantity: {type: GraphQLFloat},
    quantityBreakId: {type: GraphQLString}
  })
});

export {QuantityBreak};
    