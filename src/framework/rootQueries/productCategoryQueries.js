import {
  GraphQLList,
  GraphQLString,
} from 'graphql';

import {ProductCategoryType} from '../../domain/product/ProductCategory.js';

const productCategoryQueries = {
  productCategories: {
    type: new GraphQLList(ProductCategoryType),
    resolve: (root, args, {loaders}) => loaders.ofbizArray.load(`product/product/productCategorys/find`)
  },
  productCategory: {
    type: ProductCategoryType,
    args: {
      productCategoryId: {
        type: GraphQLString
      },
    },
    resolve: (root, args, {loaders}) => loaders.ofbiz.load(`product/product/productCategorys/${args.productCategoryId}`)
  }
};

export {productCategoryQueries};
