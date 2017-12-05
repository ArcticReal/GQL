
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


const CostComponentType = new GraphQLObjectType({
  name: 'CostComponentTypeType',
  description: 'Type for CostComponentType in product',

  fields: () => ({
    costComponentTypeId: {type: GraphQLString},
    parentType: {
      type: CostComponentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (costComponentType, args, {loaders}) => loaders.ofbizArray.load(`costComponentTypes/find?costComponentTypeId=${args.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString}
  })
});

export {CostComponentType};
    