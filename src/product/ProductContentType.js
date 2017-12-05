
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Product} from '../product/Product.js';
import {RoleType} from '../product/RoleType.js';
import {Content} from '../product/Content.js';
import {ProductContentType} from '../product/ProductContentType.js';


const ProductContent = new GraphQLObjectType({
  name: 'ProductContentType',
  description: 'Type for ProductContent in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    purchaseFromDate: {type: GraphQLString},
    useTimeUomId: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productContent, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    sequenceNum: {type: GraphQLInt},
    useRoleType: {
      type: RoleTypeType,
      args : {useRoleTypeId: {type: GraphQLString}},
      resolve: (productContent, args, {loaders}) => loaders.ofbizArray.load(`roleTypes/find?roleTypeId=${args.useRoleTypeId}`)
    },
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (productContent, args, {loaders}) => loaders.ofbizArray.load(`contents/find?=${args.contentId}`)
    },
    useTime: {type: GraphQLInt},
    purchaseThruDate: {type: GraphQLString},
    useCountLimit: {type: GraphQLInt},
    productContentType: {
      type: ProductContentTypeType,
      args : {productContentTypeId: {type: GraphQLString}},
      resolve: (productContent, args, {loaders}) => loaders.ofbizArray.load(`productContentTypes/find?=${args.productContentTypeId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductContent};
    