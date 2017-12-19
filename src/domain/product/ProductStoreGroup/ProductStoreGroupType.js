
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

import {VendorProductType} from '../../product/VendorProduct/VendorProductType.js';
import {ProductStoreGroupRollupType} from '../../product/ProductStoreGroupRollup/ProductStoreGroupRollupType.js';
import {ProductStoreGroupMemberType} from '../../product/ProductStoreGroupMember/ProductStoreGroupMemberType.js';
import {ProductStoreGroupTypeType} from '../../product/ProductStoreGroupType/ProductStoreGroupTypeType.js';
import {ProductStoreType} from '../../product/ProductStore/ProductStoreType.js';
import {ProductPriceType} from '../../product/ProductPrice/ProductPriceType.js';
import {ProductStoreGroupRoleType} from '../../product/ProductStoreGroupRole/ProductStoreGroupRoleType.js';


const ProductStoreGroupType = new GraphQLObjectType({
  name: 'ProductStoreGroupType',
  description: 'Type for ProductStoreGroup in product',

  fields: () => ({
    productStoreGroupType: {
      type: ProductStoreGroupTypeType,
      args : {productStoreGroupTypeId: {type: GraphQLString}},
      resolve: (productStoreGroup, args, {loaders}) => loaders.ofbiz.load(`product/product/productStoreGroupTypes/find?productStoreGroupTypeId=${productStoreGroup.productStoreGroupTypeId}`)
    },
    primaryParentGroup: {
      type: ProductStoreGroupType,
      args : {primaryParentGroupId: {type: GraphQLString}},
      resolve: (productStoreGroup, args, {loaders}) => loaders.ofbiz.load(`product/product/productStoreGroups/find?productStoreGroupId=${productStoreGroup.primaryParentGroupId}`)
    },
    productStoreGroupName: {type: GraphQLString},
    description: {type: GraphQLString},
    productStoreGroupId: {type: GraphQLString},
    productStores: {
      type: new GraphQLList(ProductStoreType),
      args : {},
      resolve: (productStoreGroup, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStores/find?productStoreGroupId=${productStoreGroup.productStoreGroupId}`)
    },
    productStoreGroupMembers: {
      type: new GraphQLList(ProductStoreGroupMemberType),
      args : {},
      resolve: (productStoreGroup, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStoreGroupMembers/find?productStoreGroupId=${productStoreGroup.productStoreGroupId}`)
    },
    productStoreGroupRollups: {
      type: new GraphQLList(ProductStoreGroupRollupType),
      args : {},
      resolve: (productStoreGroup, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStoreGroupRollups/find?productStoreGroupId=${productStoreGroup.productStoreGroupId}`)
    },
    vendorProducts: {
      type: new GraphQLList(VendorProductType),
      args : {},
      resolve: (productStoreGroup, args, {loaders}) => loaders.ofbizArray.load(`product/product/vendorProducts/find?productStoreGroupId=${productStoreGroup.productStoreGroupId}`)
    },
    productStoreGroups: {
      type: new GraphQLList(ProductStoreGroupType),
      args : {},
      resolve: (productStoreGroup, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStoreGroups/find?productStoreGroupId=${productStoreGroup.productStoreGroupId}`)
    },
    productPrices: {
      type: new GraphQLList(ProductPriceType),
      args : {},
      resolve: (productStoreGroup, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPrices/find?productStoreGroupId=${productStoreGroup.productStoreGroupId}`)
    },
    productStoreGroupRoles: {
      type: new GraphQLList(ProductStoreGroupRoleType),
      args : {},
      resolve: (productStoreGroup, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStoreGroupRoles/find?productStoreGroupId=${productStoreGroup.productStoreGroupId}`)
    }
  })
});

export {ProductStoreGroupType};
    