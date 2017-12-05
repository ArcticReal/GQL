
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductPriceActionType} from '../product/ProductPriceActionType.js';
import {ProductPriceRule} from '../product/ProductPriceRule.js';


const ProductPriceAction = new GraphQLObjectType({
  name: 'ProductPriceActionType',
  description: 'Type for ProductPriceAction in product',

  fields: () => ({
    amount: {type: GraphQLFloat},
    productPriceActionSeqId: {type: GraphQLString},
    productPriceActionType: {
      type: ProductPriceActionTypeType,
      args : {productPriceActionTypeId: {type: GraphQLString}},
      resolve: (productPriceAction, args, {loaders}) => loaders.ofbizArray.load(`productPriceActionTypes/find?=${args.productPriceActionTypeId}`)
    },
    productPriceRule: {
      type: ProductPriceRuleType,
      args : {productPriceRuleId: {type: GraphQLString}},
      resolve: (productPriceAction, args, {loaders}) => loaders.ofbizArray.load(`productPriceRules/find?=${args.productPriceRuleId}`)
    },
    rateCode: {type: GraphQLString}
  })
});

export {ProductPriceAction};
    