
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {RoleTypeType} from '../party/RoleTypeType.js';
import {ContentType} from '../content/ContentType.js';
import {ProductType} from '../product/ProductType.js';
import {ProductContentTypeType} from '../product/ProductContentTypeType.js';


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
      resolve: (productContent, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productContent.productId}`)
    },
    sequenceNum: {type: GraphQLInt},
    useRoleType: {
      type: RoleTypeType,
      args : {useRoleTypeId: {type: GraphQLString}},
      resolve: (productContent, args, {loaders}) => loaders.ofbiz.load(`roleTypes/find?roleTypeId=${productContent.useRoleTypeId}`)
    },
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (productContent, args, {loaders}) => loaders.ofbiz.load(`contents/find?contentId=${productContent.contentId}`)
    },
    useTime: {type: GraphQLInt},
    purchaseThruDate: {type: GraphQLString},
    useCountLimit: {type: GraphQLInt},
    productContentType: {
      type: ProductContentTypeType,
      args : {productContentTypeId: {type: GraphQLString}},
      resolve: (productContent, args, {loaders}) => loaders.ofbiz.load(`productContentTypes/find?productContentTypeId=${productContent.productContentTypeId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductContentType};
    