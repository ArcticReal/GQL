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

const MarketingCampaignPromoResponseType = new GraphQLObjectType({
  name: 'MarketingCampaignPromoResponseType',
  description: 'response type for MarketingCampaignPromo',

  fields: () => ({
    marketingCampaignId: {type: GraphQLString},
    productPromoId: {type: GraphQLString}
  })
});

export {MarketingCampaignPromoResponseType};
    