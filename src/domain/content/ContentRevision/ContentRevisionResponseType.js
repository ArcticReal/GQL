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

const ContentRevisionResponseType = new GraphQLObjectType({
  name: 'ContentRevisionResponseType',
  description: 'response type for ContentRevision',

  fields: () => ({
    comments: {type: GraphQLString},
    committedByPartyId: {type: GraphQLString},
    contentId: {type: GraphQLString},
    contentRevisionSeqId: {type: GraphQLString}
  })
});

export {ContentRevisionResponseType};
    