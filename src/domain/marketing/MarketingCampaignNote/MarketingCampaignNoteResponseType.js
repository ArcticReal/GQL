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

const MarketingCampaignNoteResponseType = new GraphQLObjectType({
  name: 'MarketingCampaignNoteResponseType',
  description: 'response type for MarketingCampaignNote',

  fields: () => ({
    marketingCampaignId: {type: GraphQLString},
    noteId: {type: GraphQLString}
  })
});

export {MarketingCampaignNoteResponseType};
    