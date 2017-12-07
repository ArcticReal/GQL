
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {VendorProductType} from '../product/VendorProductType.js';
import {ProductStoreGroupRollupType} from '../product/ProductStoreGroupRollupType.js';
import {ProductStoreGroupMemberType} from '../product/ProductStoreGroupMemberType.js';
import {ProductStoreGroupTypeType} from '../product/ProductStoreGroupTypeType.js';
import {ProductStoreType} from '../product/ProductStoreType.js';
import {ProductPriceType} from '../product/ProductPriceType.js';
import {ProductStoreGroupRoleType} from '../product/ProductStoreGroupRoleType.js';


const ProductStoreGroupType = new GraphQLObjectType({
  name: 'ProductStoreGroupType',
  description: 'Type for ProductStoreGroup in product',

  fields: () => ({
    productStoreGroupType: {
      type: ProductStoreGroupTypeType,
      args : {productStoreGroupTypeId: {type: GraphQLString}},
      resolve: (productStoreGroup, args, {loaders}) => loaders.ofbiz.load(`productStoreGroupTypes/find?productStoreGroupTypeId=${productStoreGroup.productStoreGroupTypeId}`)
    },
    primaryParentGroup: {
      type: ProductStoreGroupType,
      args : {primaryParentGroupId: {type: GraphQLString}},
      resolve: (productStoreGroup, args, {loaders}) => loaders.ofbiz.load(`productStoreGroups/find?productStoreGroupId=${productStoreGroup.primaryParentGroupId}`)
    },
    productStoreGroupName: {type: GraphQLString},
    description: {type: GraphQLString},
    productStoreGroupId: {type: GraphQLString},
    productStore: {
      type: new GraphQLList(ProductStoreType),
      args : {productStoreGroupId: {type: GraphQLString}},
      resolve: (productStoreGroup, args, {loaders}) => loaders.ofbizArray.load(`productStores/find?productStoreGroupId=${productStoreGroup.productStoreGroupId}`)
    },
    productStoreGroupMember: {
      type: new GraphQLList(ProductStoreGroupMemberType),
      args : {productStoreGroupId: {type: GraphQLString}},
      resolve: (productStoreGroup, args, {loaders}) => loaders.ofbizArray.load(`productStoreGroupMembers/find?productStoreGroupId=${productStoreGroup.productStoreGroupId}`)
    },
    productStoreGroupRollup: {
      type: new GraphQLList(ProductStoreGroupRollupType),
      args : {productStoreGroupId: {type: GraphQLString}},
      resolve: (productStoreGroup, args, {loaders}) => loaders.ofbizArray.load(`productStoreGroupRollups/find?productStoreGroupId=${productStoreGroup.productStoreGroupId}`)
    },
    productStoreGroupRollup: {
      type: new GraphQLList(ProductStoreGroupRollupType),
      args : {productStoreGroupId: {type: GraphQLString}},
      resolve: (productStoreGroup, args, {loaders}) => loaders.ofbizArray.load(`productStoreGroupRollups/find?productStoreGroupId=${productStoreGroup.productStoreGroupId}`)
    },
    vendorProduct: {
      type: new GraphQLList(VendorProductType),
      args : {productStoreGroupId: {type: GraphQLString}},
      resolve: (productStoreGroup, args, {loaders}) => loaders.ofbizArray.load(`vendorProducts/find?productStoreGroupId=${productStoreGroup.productStoreGroupId}`)
    },
    productStoreGroup: {
      type: new GraphQLList(ProductStoreGroupType),
      args : {productStoreGroupId: {type: GraphQLString}},
      resolve: (productStoreGroup, args, {loaders}) => loaders.ofbizArray.load(`productStoreGroups/find?productStoreGroupId=${productStoreGroup.productStoreGroupId}`)
    },
    productPrice: {
      type: new GraphQLList(ProductPriceType),
      args : {productStoreGroupId: {type: GraphQLString}},
      resolve: (productStoreGroup, args, {loaders}) => loaders.ofbizArray.load(`productPrices/find?productStoreGroupId=${productStoreGroup.productStoreGroupId}`)
    },
    productStoreGroupRole: {
      type: new GraphQLList(ProductStoreGroupRoleType),
      args : {productStoreGroupId: {type: GraphQLString}},
      resolve: (productStoreGroup, args, {loaders}) => loaders.ofbizArray.load(`productStoreGroupRoles/find?productStoreGroupId=${productStoreGroup.productStoreGroupId}`)
    }
  })
});

export {ProductStoreGroupType};
    