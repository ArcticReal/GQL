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

const ProductKeywordResponseType = new GraphQLObjectType({
  name: 'ProductKeywordResponseType',
  description: 'response type for ProductKeyword',

  fields: () => ({
    keyword: {type: GraphQLString},
    keywordTypeId: {type: GraphQLString},
    productId: {type: GraphQLString},
    relevancyWeight: {type: GraphQLInt},
    statusId: {type: GraphQLString}
  })
});

export {ProductKeywordResponseType};
    