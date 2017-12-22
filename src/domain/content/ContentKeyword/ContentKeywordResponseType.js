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

const ContentKeywordResponseType = new GraphQLObjectType({
  name: 'ContentKeywordResponseType',
  description: 'response type for ContentKeyword',

  fields: () => ({
    contentId: {type: GraphQLString},
    keyword: {type: GraphQLString},
    relevancyWeight: {type: GraphQLInt}
  })
});

export {ContentKeywordResponseType};
    