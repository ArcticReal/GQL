
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

import {ContentType} from '../content/Content.js';
import {ProductCategoryContentTypeType} from '../product/ProductCategoryContentType.js';
import {ProductCategoryType} from '../product/ProductCategory.js';


const ProductCategoryContentType = new GraphQLObjectType({
  name: 'ProductCategoryContentType',
  description: 'Type for ProductCategoryContent in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    prodCatContentType: {
      type: ProductCategoryContentTypeType,
      args : {prodCatContentTypeId: {type: GraphQLString}},
      resolve: (productCategoryContent, args, {loaders}) => loaders.ofbiz.load(`productCategoryContentTypes/find?prodCatContentTypeId=${productCategoryContent.prodCatContentTypeId}`)
    },
    purchaseFromDate: {type: GraphQLString},
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategoryContent, args, {loaders}) => loaders.ofbiz.load(`productCategorys/find?productCategoryId=${productCategoryContent.productCategoryId}`)
    },
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (productCategoryContent, args, {loaders}) => loaders.ofbiz.load(`contents/find?contentId=${productCategoryContent.contentId}`)
    },
    useDaysLimit: {type: GraphQLFloat},
    purchaseThruDate: {type: GraphQLString},
    useCountLimit: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductCategoryContentType};
    




const ProductCategoryContentInputType = new GraphQLInputObjectType({
  name: 'ProductCategoryContentInputType',
  description: 'input type for ProductCategoryContent in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    prodCatContentTypeId: {type: GraphQLString},
    purchaseFromDate: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    contentId: {type: GraphQLString},
    useDaysLimit: {type: GraphQLFloat},
    purchaseThruDate: {type: GraphQLString},
    useCountLimit: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductCategoryContentInputType};
    