
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

import {ProductCategoryTypeAttrType} from '../../product/ProductCategoryTypeAttr/ProductCategoryTypeAttrType.js';
import {ProductCategoryType} from '../../product/ProductCategory/ProductCategoryType.js';


const ProductCategoryTypeType = new GraphQLObjectType({
  name: 'ProductCategoryTypeType',
  description: 'Type for ProductCategoryType in product',

  fields: () => ({
    productCategoryTypeId: {type: GraphQLString},
    parentType: {
      type: ProductCategoryTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (productCategoryType, args, {loaders}) => loaders.ofbiz.load(`product/product/productCategoryTypes/find?productCategoryTypeId=${productCategoryType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    productCategories: {
      type: new GraphQLList(ProductCategoryType),
      args : {},
      resolve: (productCategoryType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productCategorys/find?productCategoryTypeId=${productCategoryType.productCategoryTypeId}`)
    },
    productCategoryTypes: {
      type: new GraphQLList(ProductCategoryTypeType),
      args : {},
      resolve: (productCategoryType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productCategoryTypes/find?productCategoryTypeId=${productCategoryType.productCategoryTypeId}`)
    },
    productCategoryTypeAttrs: {
      type: new GraphQLList(ProductCategoryTypeAttrType),
      args : {},
      resolve: (productCategoryType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productCategoryTypeAttrs/find?productCategoryTypeId=${productCategoryType.productCategoryTypeId}`)
    }
  })
});

export {ProductCategoryTypeType};
    