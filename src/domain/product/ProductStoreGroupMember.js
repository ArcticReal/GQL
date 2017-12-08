
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

import {ProductStoreGroupType} from '../product/ProductStoreGroup.js';
import {ProductStoreType} from '../product/ProductStore.js';


const ProductStoreGroupMemberType = new GraphQLObjectType({
  name: 'ProductStoreGroupMemberType',
  description: 'Type for ProductStoreGroupMember in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStoreGroupMember, args, {loaders}) => loaders.ofbiz.load(`productStores/find?productStoreId=${productStoreGroupMember.productStoreId}`)
    },
    productStoreGroup: {
      type: ProductStoreGroupType,
      args : {productStoreGroupId: {type: GraphQLString}},
      resolve: (productStoreGroupMember, args, {loaders}) => loaders.ofbiz.load(`productStoreGroups/find?productStoreGroupId=${productStoreGroupMember.productStoreGroupId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreGroupMemberType};
    




const ProductStoreGroupMemberInputType = new GraphQLInputObjectType({
  name: 'ProductStoreGroupMemberInputType',
  description: 'input type for ProductStoreGroupMember in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    productStoreId: {type: GraphQLString},
    productStoreGroupId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreGroupMemberInputType};
    