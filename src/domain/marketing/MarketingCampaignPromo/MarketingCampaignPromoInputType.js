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

const MarketingCampaignPromoInputType = new GraphQLInputObjectType({
  name: 'MarketingCampaignPromoInputType',
  description: 'input type for MarketingCampaignPromo',

  fields: () => ({
    marketingCampaignId: {type: GraphQLString},
    productPromoId: {type: GraphQLString}
  })
});

export {MarketingCampaignPromoInputType};
    