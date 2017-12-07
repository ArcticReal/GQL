
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductAverageCostType} from '../accounting/ProductAverageCostType.js';


const ProductAverageCostTypeType = new GraphQLObjectType({
  name: 'ProductAverageCostTypeType',
  description: 'Type for ProductAverageCostType in accounting',

  fields: () => ({
    parentType: {
      type: ProductAverageCostTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (productAverageCostType, args, {loaders}) => loaders.ofbiz.load(`productAverageCostTypes/find?productAverageCostTypeId=${productAverageCostType.parentTypeId}`)
    },
    productAverageCostTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    productAverageCost: {
      type: new GraphQLList(ProductAverageCostType),
      args : {productAverageCostTypeId: {type: GraphQLString}},
      resolve: (productAverageCostType, args, {loaders}) => loaders.ofbizArray.load(`productAverageCosts/find?productAverageCostTypeId=${productAverageCostType.productAverageCostTypeId}`)
    },
    productAverageCostType: {
      type: new GraphQLList(ProductAverageCostTypeType),
      args : {productAverageCostTypeId: {type: GraphQLString}},
      resolve: (productAverageCostType, args, {loaders}) => loaders.ofbizArray.load(`productAverageCostTypes/find?productAverageCostTypeId=${productAverageCostType.productAverageCostTypeId}`)
    }
  })
});

export {ProductAverageCostTypeType};
    