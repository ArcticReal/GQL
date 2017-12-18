
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

import {ProductSearchResultType} from '../product/ProductSearchResult.js';


const ProductSearchConstraintType = new GraphQLObjectType({
  name: 'ProductSearchConstraintType',
  description: 'Type for ProductSearchConstraint in product',

  fields: () => ({
    isAnd: {type: GraphQLBoolean},
    removeStems: {type: GraphQLBoolean},
    lowValue: {type: GraphQLString},
    productSearchResult: {
      type: ProductSearchResultType,
      args : {productSearchResultId: {type: GraphQLString}},
      resolve: (productSearchConstraint, args, {loaders}) => loaders.ofbiz.load(`product/product/productSearchResults/find?productSearchResultId=${productSearchConstraint.productSearchResultId}`)
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

export {ProductSearchConstraintType};
    




const ProductSearchConstraintInputType = new GraphQLInputObjectType({
  name: 'ProductSearchConstraintInputType',
  description: 'input type for ProductSearchConstraint',

  fields: () => ({
    anyPrefix: {type: GraphQLBoolean},
    anySuffix: {type: GraphQLBoolean},
    constraintName: {type: GraphQLString},
    constraintSeqId: {type: GraphQLString},
    highValue: {type: GraphQLString},
    includeSubCategories: {type: GraphQLBoolean},
    infoString: {type: GraphQLString},
    isAnd: {type: GraphQLBoolean},
    lowValue: {type: GraphQLString},
    productSearchResultId: {type: GraphQLString},
    removeStems: {type: GraphQLBoolean}
  })
});

export {ProductSearchConstraintInputType};
    