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

const ContentRevisionInputType = new GraphQLInputObjectType({
  name: 'ContentRevisionInputType',
  description: 'input type for ContentRevision',

  fields: () => ({
    comments: {type: GraphQLString},
    committedByPartyId: {type: GraphQLString},
    contentId: {type: GraphQLString},
    contentRevisionSeqId: {type: GraphQLString}
  })
});

export {ContentRevisionInputType};
    