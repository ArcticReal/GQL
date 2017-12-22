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

const MarketingCampaignRoleResponseType = new GraphQLObjectType({
  name: 'MarketingCampaignRoleResponseType',
  description: 'response type for MarketingCampaignRole',

  fields: () => ({
    marketingCampaignId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {MarketingCampaignRoleResponseType};
    