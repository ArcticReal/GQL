
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductCategoryType} from '../product/ProductCategoryType.js';
import {ProductCategory} from '../product/ProductCategory.js';


const ProductCategory = new GraphQLObjectType({
  name: 'ProductCategoryType',
  description: 'Type for ProductCategory in product',

  fields: () => ({
    longDescription: {type: GraphQLString},
    productCategoryType: {
      type: ProductCategoryTypeType,
      args : {productCategoryTypeId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`productCategoryTypes/find?=${args.productCategoryTypeId}`)
    },
    productCategoryId: {type: GraphQLString},
    linkOneImageUrl: {type: GraphQLString},
    detailScreen: {type: GraphQLString},
    primaryParentCategory: {
      type: ProductCategoryType,
      args : {primaryParentCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`productCategorys/find?productCategoryId=${args.primaryParentCategoryId}`)
    },
    categoryImageUrl: {type: GraphQLString},
    description: {type: GraphQLString},
    showInSelect: {type: GraphQLBoolean},
    linkTwoImageUrl: {type: GraphQLString},
    categoryName: {type: GraphQLString}
  })
});

export {ProductCategory};
    