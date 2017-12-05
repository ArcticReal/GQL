
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const ProductSearchResult = new GraphQLObjectType({
  name: 'ProductSearchResultType',
  description: 'Type for ProductSearchResult in product',

  fields: () => ({
    productSearchResultId: {type: GraphQLString},
    visitId: {type: GraphQLString},
    orderByName: {type: GraphQLString},
    numResults: {type: GraphQLInt},
    secondsTotal: {type: GraphQLFloat},
    searchDate: {type: GraphQLString},
    isAscending: {type: GraphQLBoolean}
  })
});

export {ProductSearchResult};
    