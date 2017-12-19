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

const MarketingCampaignPriceInputType = new GraphQLInputObjectType({
  name: 'MarketingCampaignPriceInputType',
  description: 'input type for MarketingCampaignPrice',

  fields: () => ({
    marketingCampaignId: {type: GraphQLString},
    productPriceRuleId: {type: GraphQLString}
  })
});

export {MarketingCampaignPriceInputType};
    