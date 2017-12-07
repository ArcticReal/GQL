
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ContentType} from '../content/ContentType.js';
import {ProductCategoryContentTypeType} from '../product/ProductCategoryContentTypeType.js';
import {ProductCategoryType} from '../product/ProductCategoryType.js';


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
    