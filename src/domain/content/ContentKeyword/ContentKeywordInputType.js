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

const ContentKeywordInputType = new GraphQLInputObjectType({
  name: 'ContentKeywordInputType',
  description: 'input type for ContentKeyword',

  fields: () => ({
    contentId: {type: GraphQLString},
    keyword: {type: GraphQLString},
    relevancyWeight: {type: GraphQLInt}
  })
});

export {ContentKeywordInputType};
    