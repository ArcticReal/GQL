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

const ProductSearchResultInputType = new GraphQLInputObjectType({
  name: 'ProductSearchResultInputType',
  description: 'input type for ProductSearchResult',

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

export {ProductSearchResultInputType};
    