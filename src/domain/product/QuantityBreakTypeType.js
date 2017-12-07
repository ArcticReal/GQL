
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


const QuantityBreakTypeType = new GraphQLObjectType({
  name: 'QuantityBreakTypeType',
  description: 'Type for QuantityBreakType in product',

  fields: () => ({
    quantityBreakTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    quantityBreak: {
      type: new GraphQLList(QuantityBreakType),
      args : {quantityBreakTypeId: {type: GraphQLString}},
      resolve: (quantityBreakType, args, {loaders}) => loaders.ofbizArray.load(`quantityBreaks/find?quantityBreakTypeId=${quantityBreakType.quantityBreakTypeId}`)
    }
  })
});

export {QuantityBreakTypeType};
    