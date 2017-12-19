
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

import {ProductPromoType} from '../../product/ProductPromo/ProductPromoType.js';
import {ContentType} from '../../content/Content/ContentType.js';
import {ProductContentTypeType} from '../../product/ProductContentType/ProductContentTypeType.js';


const ProductPromoContentType = new GraphQLObjectType({
  name: 'ProductPromoContentType',
  description: 'Type for ProductPromoContent in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productPromoContentType: {
      type: ProductContentTypeType,
      args : {productPromoContentTypeId: {type: GraphQLString}},
      resolve: (productPromoContent, args, {loaders}) => loaders.ofbiz.load(`product/product/productContentTypes/find?productContentTypeId=${productPromoContent.productPromoContentTypeId}`)
    },
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (productPromoContent, args, {loaders}) => loaders.ofbiz.load(`/contents/find?contentId=${productPromoContent.contentId}`)
    },
    productPromo: {
      type: ProductPromoType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromoContent, args, {loaders}) => loaders.ofbiz.load(`product/product/productPromos/find?productPromoId=${productPromoContent.productPromoId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductPromoContentType};
    