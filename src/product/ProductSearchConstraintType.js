
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductSearchResult} from '../product/ProductSearchResult.js';


const ProductSearchConstraint = new GraphQLObjectType({
  name: 'ProductSearchConstraintType',
  description: 'Type for ProductSearchConstraint in product',

  fields: () => ({
    isAnd: {type: GraphQLBoolean},
    removeStems: {type: GraphQLBoolean},
    lowValue: {type: GraphQLString},
    productSearchResult: {
      type: ProductSearchResultType,
      args : {productSearchResultId: {type: GraphQLString}},
      resolve: (productSearchConstraint, args, {loaders}) => loaders.ofbizArray.load(`productSearchResults/find?=${args.productSearchResultId}`)
    },
    constraintSeqId: {type: GraphQLString},
    infoString: {type: GraphQLString},
    anyPrefix: {type: GraphQLBoolean},
    highValue: {type: GraphQLString},
    includeSubCategories: {type: GraphQLBoolean},
    anySuffix: {type: GraphQLBoolean},
    constraintName: {type: GraphQLString}
  })
});

export {ProductSearchConstraint};
    