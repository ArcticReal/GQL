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

const MarketingCampaignNoteInputType = new GraphQLInputObjectType({
  name: 'MarketingCampaignNoteInputType',
  description: 'input type for MarketingCampaignNote',

  fields: () => ({
    marketingCampaignId: {type: GraphQLString},
    noteId: {type: GraphQLString}
  })
});

export {MarketingCampaignNoteInputType};
    