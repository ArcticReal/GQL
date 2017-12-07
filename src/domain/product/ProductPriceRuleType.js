
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
import {MarketingCampaignPriceType} from '../marketing/MarketingCampaignPriceType.js';
import {ProductPriceCondType} from '../product/ProductPriceCondType.js';


const ProductPriceRuleType = new GraphQLObjectType({
  name: 'ProductPriceRuleType',
  description: 'Type for ProductPriceRule in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    ruleName: {type: GraphQLString},
    description: {type: GraphQLString},
    isSale: {type: GraphQLBoolean},
    productPriceRuleId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    productPriceCond: {
      type: new GraphQLList(ProductPriceCondType),
      args : {productPriceRuleId: {type: GraphQLString}},
      resolve: (productPriceRule, args, {loaders}) => loaders.ofbizArray.load(`productPriceConds/find?productPriceRuleId=${productPriceRule.productPriceRuleId}`)
    },
    productPriceAction: {
      type: new GraphQLList(ProductPriceActionType),
      args : {productPriceRuleId: {type: GraphQLString}},
      resolve: (productPriceRule, args, {loaders}) => loaders.ofbizArray.load(`productPriceActions/find?productPriceRuleId=${productPriceRule.productPriceRuleId}`)
    },
    marketingCampaignPrice: {
      type: new GraphQLList(MarketingCampaignPriceType),
      args : {productPriceRuleId: {type: GraphQLString}},
      resolve: (productPriceRule, args, {loaders}) => loaders.ofbizArray.load(`marketingCampaignPrices/find?productPriceRuleId=${productPriceRule.productPriceRuleId}`)
    }
  })
});

export {ProductPriceRuleType};
    