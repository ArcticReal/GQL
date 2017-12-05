
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductPriceRule} from '../product/ProductPriceRule.js';


const ProductPriceCond = new GraphQLObjectType({
  name: 'ProductPriceCondType',
  description: 'Type for ProductPriceCond in product',

  fields: () => ({
    productPriceCondSeqId: {type: GraphQLString},
    inputParamEnumId: {type: GraphQLString},
    condValue: {type: GraphQLString},
    productPriceRule: {
      type: ProductPriceRuleType,
      args : {productPriceRuleId: {type: GraphQLString}},
      resolve: (productPriceCond, args, {loaders}) => loaders.ofbizArray.load(`productPriceRules/find?=${args.productPriceRuleId}`)
    },
    operatorEnumId: {type: GraphQLString}
  })
});

export {ProductPriceCond};
    