
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

import {ProductStoreGroupType} from '../../product/ProductStoreGroup/ProductStoreGroupType.js';
import {ProductStoreType} from '../../product/ProductStore/ProductStoreType.js';


const ProductStoreGroupMemberType = new GraphQLObjectType({
  name: 'ProductStoreGroupMemberType',
  description: 'Type for ProductStoreGroupMember in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStoreGroupMember, args, {loaders}) => loaders.ofbiz.load(`product/product/productStores/find?productStoreId=${productStoreGroupMember.productStoreId}`)
    },
    productStoreGroup: {
      type: ProductStoreGroupType,
      args : {productStoreGroupId: {type: GraphQLString}},
      resolve: (productStoreGroupMember, args, {loaders}) => loaders.ofbiz.load(`product/product/productStoreGroups/find?productStoreGroupId=${productStoreGroupMember.productStoreGroupId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreGroupMemberType};
    