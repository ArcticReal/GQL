
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

import {ContentType} from '../../content/Content/ContentType.js';
import {ProductCategoryContentTypeType} from '../../product/ProductCategoryContentType/ProductCategoryContentTypeType.js';
import {ProductCategoryType} from '../../product/ProductCategory/ProductCategoryType.js';


const ProductCategoryContentType = new GraphQLObjectType({
  name: 'ProductCategoryContentType',
  description: 'Type for ProductCategoryContent in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    prodCatContentType: {
      type: ProductCategoryContentTypeType,
      args : {prodCatContentTypeId: {type: GraphQLString}},
      resolve: (productCategoryContent, args, {loaders}) => loaders.ofbiz.load(`product/product/productCategoryContentTypes/find?prodCatContentTypeId=${productCategoryContent.prodCatContentTypeId}`)
    },
    purchaseFromDate: {type: GraphQLString},
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategoryContent, args, {loaders}) => loaders.ofbiz.load(`product/product/productCategorys/find?productCategoryId=${productCategoryContent.productCategoryId}`)
    },
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (productCategoryContent, args, {loaders}) => loaders.ofbiz.load(`/contents/find?contentId=${productCategoryContent.contentId}`)
    },
    useDaysLimit: {type: GraphQLFloat},
    purchaseThruDate: {type: GraphQLString},
    useCountLimit: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductCategoryContentType};
    