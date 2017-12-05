
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductStore} from '../product/ProductStore.js';
import {ProductStoreGroup} from '../product/ProductStoreGroup.js';


const ProductStoreGroupMember = new GraphQLObjectType({
  name: 'ProductStoreGroupMemberType',
  description: 'Type for ProductStoreGroupMember in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStoreGroupMember, args, {loaders}) => loaders.ofbizArray.load(`productStores/find?=${args.productStoreId}`)
    },
    productStoreGroup: {
      type: ProductStoreGroupType,
      args : {productStoreGroupId: {type: GraphQLString}},
      resolve: (productStoreGroupMember, args, {loaders}) => loaders.ofbizArray.load(`productStoreGroups/find?=${args.productStoreGroupId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreGroupMember};
    