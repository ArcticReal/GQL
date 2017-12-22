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

const ProductSearchResultResponseType = new GraphQLObjectType({
  name: 'ProductSearchResultResponseType',
  description: 'response type for ProductSearchResult',

  fields: () => ({
    isAscending: {type: GraphQLBoolean},
    numResults: {type: GraphQLInt},
    orderByName: {type: GraphQLString},
    productSearchResultId: {type: GraphQLString},
    searchDate: {type: GraphQLString},
    secondsTotal: {type: GraphQLFloat},
    visitId: {type: GraphQLString}
  })
});

export {ProductSearchResultResponseType};
    