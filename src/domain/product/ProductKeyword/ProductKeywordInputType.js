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

const ProductKeywordInputType = new GraphQLInputObjectType({
  name: 'ProductKeywordInputType',
  description: 'input type for ProductKeyword',

  fields: () => ({
    keyword: {type: GraphQLString},
    keywordTypeId: {type: GraphQLString},
    productId: {type: GraphQLString},
    relevancyWeight: {type: GraphQLInt},
    statusId: {type: GraphQLString}
  })
});

export {ProductKeywordInputType};
    