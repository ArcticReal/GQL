
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

import {ProductSearchConstraintType} from '../../product/ProductSearchConstraint/ProductSearchConstraintType.js';


const ProductSearchResultType = new GraphQLObjectType({
  name: 'ProductSearchResultType',
  description: 'Type for ProductSearchResult in product',

  fields: () => ({
    productSearchResultId: {type: GraphQLString},
    visitId: {type: GraphQLString},
    orderByName: {type: GraphQLString},
    numResults: {type: GraphQLInt},
    secondsTotal: {type: GraphQLFloat},
    searchDate: {type: GraphQLString},
    isAscending: {type: GraphQLBoolean},
    productSearchConstraints: {
      type: new GraphQLList(ProductSearchConstraintType),
      args : {},
      resolve: (productSearchResult, args, {loaders}) => loaders.ofbizArray.load(`product/product/productSearchConstraints/find?productSearchResultId=${productSearchResult.productSearchResultId}`)
    }
  })
});

export {ProductSearchResultType};
    