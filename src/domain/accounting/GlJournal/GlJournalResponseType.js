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

const GlJournalResponseType = new GraphQLObjectType({
  name: 'GlJournalResponseType',
  description: 'response type for GlJournal',

  fields: () => ({
    glJournalId: {type: GraphQLString},
    glJournalName: {type: GraphQLString},
    isPosted: {type: GraphQLBoolean},
    organizationPartyId: {type: GraphQLString},
    postedDate: {type: GraphQLString}
  })
});

export {GlJournalResponseType};
    