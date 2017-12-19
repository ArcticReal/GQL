
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

import {SubscriptionResourceType} from '../../product/SubscriptionResource/SubscriptionResourceType.js';
import {RoleTypeType} from '../../party/RoleType/RoleTypeType.js';
import {ProductType} from '../../product/Product/ProductType.js';
import {ProductStoreType} from '../../product/ProductStore/ProductStoreType.js';


const ProductSubscriptionResourceType = new GraphQLObjectType({
  name: 'ProductSubscriptionResourceType',
  description: 'Type for ProductSubscriptionResource in product',

  fields: () => ({
    purchaseFromDate: {type: GraphQLString},
    maxLifeTimeUomId: {type: GraphQLString},
    useTimeUomId: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productSubscriptionResource, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${productSubscriptionResource.productId}`)
    },
    subscriptionResource: {
      type: SubscriptionResourceType,
      args : {subscriptionResourceId: {type: GraphQLString}},
      resolve: (productSubscriptionResource, args, {loaders}) => loaders.ofbiz.load(`product/subscription/subscriptionResources/find?subscriptionResourceId=${productSubscriptionResource.subscriptionResourceId}`)
    },
    canclAutmExtTimeUomId: {type: GraphQLString},
    useCountLimit: {type: GraphQLInt},
    availableTimeUomId: {type: GraphQLString},
    allowProductStoreChange: {type: GraphQLBoolean},
    thruDate: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    canclAutmExtTime: {type: GraphQLInt},
    gracePeriodOnExpiryUomId: {type: GraphQLString},
    isDefault: {type: GraphQLBoolean},
    availableTime: {type: GraphQLInt},
    displayMaintenancePage: {type: GraphQLBoolean},
    automaticExtend: {type: GraphQLBoolean},
    useRoleType: {
      type: RoleTypeType,
      args : {useRoleTypeId: {type: GraphQLString}},
      resolve: (productSubscriptionResource, args, {loaders}) => loaders.ofbiz.load(`party/roleTypes/find?roleTypeId=${productSubscriptionResource.useRoleTypeId}`)
    },
    maxLifeTime: {type: GraphQLInt},
    useTime: {type: GraphQLInt},
    purchaseThruDate: {type: GraphQLString},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productSubscriptionResource, args, {loaders}) => loaders.ofbiz.load(`product/product/productStores/find?productStoreId=${productSubscriptionResource.productStoreId}`)
    },
    gracePeriodOnExpiry: {type: GraphQLInt},
    hostedPathAlias: {type: GraphQLString}
  })
});

export {ProductSubscriptionResourceType};
    