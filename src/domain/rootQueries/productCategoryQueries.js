import {
  GraphQLList,
  GraphQLString,
} from 'graphql';

import {ProductCategoryType} from '../product/ProductCategory.js';

const productCategoryQueries = {
  productCategories: {
    type: new GraphQLList(ProductCategoryType),
    resolve: (root, args, {loaders}) => loaders.ofbizArray.load(`productCategorys/find`)
  },
  productCategory: {
    type: ProductCategoryType,
    args: {
      productCategoryId: {
        type: GraphQLString
      },
    },
    resolve: (root, args, {loaders}) => loaders.ofbiz.load(`productCategorys/${args.productCategoryId}`)
  }
};

export {productCategoryQueries};
