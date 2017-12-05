
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductContentType} from '../product/ProductContentType.js';
import {Content} from '../product/Content.js';
import {ProductPromo} from '../product/ProductPromo.js';


const ProductPromoContent = new GraphQLObjectType({
  name: 'ProductPromoContentType',
  description: 'Type for ProductPromoContent in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productPromoContentType: {
      type: ProductContentTypeType,
      args : {productPromoContentTypeId: {type: GraphQLString}},
      resolve: (productPromoContent, args, {loaders}) => loaders.ofbizArray.load(`productContentTypes/find?productContentTypeId=${args.productPromoContentTypeId}`)
    },
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (productPromoContent, args, {loaders}) => loaders.ofbizArray.load(`contents/find?=${args.contentId}`)
    },
    productPromo: {
      type: ProductPromoType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromoContent, args, {loaders}) => loaders.ofbizArray.load(`productPromos/find?=${args.productPromoId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductPromoContent};
    