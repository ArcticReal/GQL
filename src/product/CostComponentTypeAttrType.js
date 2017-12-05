
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CostComponentType} from '../product/CostComponentType.js';


const CostComponentTypeAttr = new GraphQLObjectType({
  name: 'CostComponentTypeAttrType',
  description: 'Type for CostComponentTypeAttr in product',

  fields: () => ({
    costComponentType: {
      type: CostComponentTypeType,
      args : {costComponentTypeId: {type: GraphQLString}},
      resolve: (costComponentTypeAttr, args, {loaders}) => loaders.ofbizArray.load(`costComponentTypes/find?=${args.costComponentTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {CostComponentTypeAttr};
    