
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductPromo} from '../product/ProductPromo.js';


const ProductPromoRule = new GraphQLObjectType({
  name: 'ProductPromoRuleType',
  description: 'Type for ProductPromoRule in product',

  fields: () => ({
    productPromoRuleId: {type: GraphQLString},
    ruleName: {type: GraphQLString},
    productPromo: {
      type: ProductPromoType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromoRule, args, {loaders}) => loaders.ofbizArray.load(`productPromos/find?=${args.productPromoId}`)
    }
  })
});

export {ProductPromoRule};
    