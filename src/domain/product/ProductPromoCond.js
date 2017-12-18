
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

import {ProductPromoRuleType} from '../product/ProductPromoRule.js';


const ProductPromoCondType = new GraphQLObjectType({
  name: 'ProductPromoCondType',
  description: 'Type for ProductPromoCond in product',

  fields: () => ({
    productPromoRuleId: {type: GraphQLString},
    inputParamEnumId: {type: GraphQLString},
    condValue: {type: GraphQLString},
    productPromo: {
      type: ProductPromoRuleType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromoCond, args, {loaders}) => loaders.ofbiz.load(`product/product/productPromoRules/find?productPromoId=${productPromoCond.productPromoId}`)
    },
    operatorEnumId: {type: GraphQLString},
    otherValue: {type: GraphQLString},
    productPromoCondSeqId: {type: GraphQLString}
  })
});

export {ProductPromoCondType};
    




const ProductPromoCondInputType = new GraphQLInputObjectType({
  name: 'ProductPromoCondInputType',
  description: 'input type for ProductPromoCond',

  fields: () => ({
    condValue: {type: GraphQLString},
    inputParamEnumId: {type: GraphQLString},
    operatorEnumId: {type: GraphQLString},
    otherValue: {type: GraphQLString},
    productPromoCondSeqId: {type: GraphQLString},
    productPromoId: {type: GraphQLString},
    productPromoRuleId: {type: GraphQLString}
  })
});

export {ProductPromoCondInputType};
    