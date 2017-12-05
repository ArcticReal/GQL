
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductPromoRule} from '../product/ProductPromoRule.js';


const ProductPromoCond = new GraphQLObjectType({
  name: 'ProductPromoCondType',
  description: 'Type for ProductPromoCond in product',

  fields: () => ({
    productPromoRuleId: {type: GraphQLString},
    inputParamEnumId: {type: GraphQLString},
    condValue: {type: GraphQLString},
    productPromo: {
      type: ProductPromoRuleType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromoCond, args, {loaders}) => loaders.ofbizArray.load(`productPromoRules/find?=${args.productPromoId}`)
    },
    operatorEnumId: {type: GraphQLString},
    otherValue: {type: GraphQLString},
    productPromoCondSeqId: {type: GraphQLString}
  })
});

export {ProductPromoCond};
    