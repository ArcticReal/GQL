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

const MarketingCampaignPriceResponseType = new GraphQLObjectType({
  name: 'MarketingCampaignPriceResponseType',
  description: 'response type for MarketingCampaignPrice',

  fields: () => ({
    marketingCampaignId: {type: GraphQLString},
    productPriceRuleId: {type: GraphQLString}
  })
});

export {MarketingCampaignPriceResponseType};
    