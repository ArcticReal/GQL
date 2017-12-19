
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

import {ProductPriceActionType} from '../../product/ProductPriceAction/ProductPriceActionType.js';
import {MarketingCampaignPriceType} from '../../marketing/MarketingCampaignPrice/MarketingCampaignPriceType.js';
import {ProductPriceCondType} from '../../product/ProductPriceCond/ProductPriceCondType.js';


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
    productPriceConds: {
      type: new GraphQLList(ProductPriceCondType),
      args : {},
      resolve: (productPriceRule, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPriceConds/find?productPriceRuleId=${productPriceRule.productPriceRuleId}`)
    },
    productPriceActions: {
      type: new GraphQLList(ProductPriceActionType),
      args : {},
      resolve: (productPriceRule, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPriceActions/find?productPriceRuleId=${productPriceRule.productPriceRuleId}`)
    },
    marketingCampaignPrices: {
      type: new GraphQLList(MarketingCampaignPriceType),
      args : {},
      resolve: (productPriceRule, args, {loaders}) => loaders.ofbizArray.load(`marketing/marketingCampaign/marketingCampaignPrices/find?productPriceRuleId=${productPriceRule.productPriceRuleId}`)
    }
  })
});

export {ProductPriceRuleType};
    