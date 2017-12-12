
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

import {ProductPriceRuleType} from '../product/ProductPriceRule.js';


const ProductPriceCondType = new GraphQLObjectType({
  name: 'ProductPriceCondType',
  description: 'Type for ProductPriceCond in product',

  fields: () => ({
    productPriceCondSeqId: {type: GraphQLString},
    inputParamEnumId: {type: GraphQLString},
    condValue: {type: GraphQLString},
    productPriceRule: {
      type: ProductPriceRuleType,
      args : {productPriceRuleId: {type: GraphQLString}},
      resolve: (productPriceCond, args, {loaders}) => loaders.ofbiz.load(`product/product/productPriceRules/find?productPriceRuleId=${productPriceCond.productPriceRuleId}`)
    },
    operatorEnumId: {type: GraphQLString}
  })
});

export {ProductPriceCondType};
    




const ProductPriceCondInputType = new GraphQLInputObjectType({
  name: 'ProductPriceCondInputType',
  description: 'input type for ProductPriceCond in product',

  fields: () => ({
    productPriceCondSeqId: {type: GraphQLString},
    inputParamEnumId: {type: GraphQLString},
    condValue: {type: GraphQLString},
    productPriceRuleId: {type: GraphQLString},
    operatorEnumId: {type: GraphQLString}
  })
});

export {ProductPriceCondInputType};
    