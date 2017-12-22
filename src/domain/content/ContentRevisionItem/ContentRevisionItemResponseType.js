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

const ContentRevisionItemResponseType = new GraphQLObjectType({
  name: 'ContentRevisionItemResponseType',
  description: 'response type for ContentRevisionItem',

  fields: () => ({
    contentId: {type: GraphQLString},
    contentRevisionSeqId: {type: GraphQLString},
    itemContentId: {type: GraphQLString},
    newDataResourceId: {type: GraphQLString},
    oldDataResourceId: {type: GraphQLString}
  })
});

export {ContentRevisionItemResponseType};
    