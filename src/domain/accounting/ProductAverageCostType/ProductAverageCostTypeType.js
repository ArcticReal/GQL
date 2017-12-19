
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

import {ProductAverageCostType} from '../../accounting/ProductAverageCost/ProductAverageCostType.js';


const ProductAverageCostTypeType = new GraphQLObjectType({
  name: 'ProductAverageCostTypeType',
  description: 'Type for ProductAverageCostType in accounting',

  fields: () => ({
    parentType: {
      type: ProductAverageCostTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (productAverageCostType, args, {loaders}) => loaders.ofbiz.load(`accounting/productAverageCost/productAverageCostTypes/find?productAverageCostTypeId=${productAverageCostType.parentTypeId}`)
    },
    productAverageCostTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    productAverageCosts: {
      type: new GraphQLList(ProductAverageCostType),
      args : {},
      resolve: (productAverageCostType, args, {loaders}) => loaders.ofbizArray.load(`accounting/productAverageCosts/find?productAverageCostTypeId=${productAverageCostType.productAverageCostTypeId}`)
    },
    productAverageCostTypes: {
      type: new GraphQLList(ProductAverageCostTypeType),
      args : {},
      resolve: (productAverageCostType, args, {loaders}) => loaders.ofbizArray.load(`accounting/productAverageCost/productAverageCostTypes/find?productAverageCostTypeId=${productAverageCostType.productAverageCostTypeId}`)
    }
  })
});

export {ProductAverageCostTypeType};
    