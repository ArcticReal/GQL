
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

import {QuantityBreakType} from '../product/QuantityBreak.js';


const QuantityBreakTypeType = new GraphQLObjectType({
  name: 'QuantityBreakTypeType',
  description: 'Type for QuantityBreakType in product',

  fields: () => ({
    quantityBreakTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    quantityBreaks: {
      type: new GraphQLList(QuantityBreakType),
      args : {},
      resolve: (quantityBreakType, args, {loaders}) => loaders.ofbizArray.load(`product/quantityBreaks/find?quantityBreakTypeId=${quantityBreakType.quantityBreakTypeId}`)
    }
  })
});

export {QuantityBreakTypeType};
    




const QuantityBreakTypeInputType = new GraphQLInputObjectType({
  name: 'QuantityBreakTypeInputType',
  description: 'input type for QuantityBreakType in product',

  fields: () => ({
    quantityBreakTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {QuantityBreakTypeInputType};
    