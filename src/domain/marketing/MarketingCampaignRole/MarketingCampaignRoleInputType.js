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

const MarketingCampaignRoleInputType = new GraphQLInputObjectType({
  name: 'MarketingCampaignRoleInputType',
  description: 'input type for MarketingCampaignRole',

  fields: () => ({
    marketingCampaignId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {MarketingCampaignRoleInputType};
    