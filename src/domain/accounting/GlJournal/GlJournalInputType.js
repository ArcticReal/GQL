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

const GlJournalInputType = new GraphQLInputObjectType({
  name: 'GlJournalInputType',
  description: 'input type for GlJournal',

  fields: () => ({
    glJournalId: {type: GraphQLString},
    glJournalName: {type: GraphQLString},
    isPosted: {type: GraphQLBoolean},
    organizationPartyId: {type: GraphQLString},
    postedDate: {type: GraphQLString}
  })
});

export {GlJournalInputType};
    