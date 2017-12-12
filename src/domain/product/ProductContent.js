
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

import {RoleTypeType} from '../party/RoleType.js';
import {ContentType} from '../content/Content.js';
import {ProductType} from '../product/Product.js';
import {ProductContentTypeType} from '../product/ProductContentType.js';


const ProductContentType = new GraphQLObjectType({
  name: 'ProductContentType',
  description: 'Type for ProductContent in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    purchaseFromDate: {type: GraphQLString},
    useTimeUomId: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productContent, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${productContent.productId}`)
    },
    sequenceNum: {type: GraphQLInt},
    useRoleType: {
      type: RoleTypeType,
      args : {useRoleTypeId: {type: GraphQLString}},
      resolve: (productContent, args, {loaders}) => loaders.ofbiz.load(`party/roleTypes/find?roleTypeId=${productContent.useRoleTypeId}`)
    },
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (productContent, args, {loaders}) => loaders.ofbiz.load(`/contents/find?contentId=${productContent.contentId}`)
    },
    useTime: {type: GraphQLInt},
    purchaseThruDate: {type: GraphQLString},
    useCountLimit: {type: GraphQLInt},
    productContentType: {
      type: ProductContentTypeType,
      args : {productContentTypeId: {type: GraphQLString}},
      resolve: (productContent, args, {loaders}) => loaders.ofbiz.load(`product/product/productContentTypes/find?productContentTypeId=${productContent.productContentTypeId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductContentType};
    




const ProductContentInputType = new GraphQLInputObjectType({
  name: 'ProductContentInputType',
  description: 'input type for ProductContent in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    purchaseFromDate: {type: GraphQLString},
    useTimeUomId: {type: GraphQLString},
    productId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    useRoleTypeId: {type: GraphQLString},
    contentId: {type: GraphQLString},
    useTime: {type: GraphQLInt},
    purchaseThruDate: {type: GraphQLString},
    useCountLimit: {type: GraphQLInt},
    productContentTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductContentInputType};
    