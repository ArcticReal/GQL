
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

import {SubscriptionResourceType} from '../product/SubscriptionResource.js';
import {RoleTypeType} from '../party/RoleType.js';
import {ProductType} from '../product/Product.js';
import {ProductStoreType} from '../product/ProductStore.js';


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
      resolve: (productSubscriptionResource, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productSubscriptionResource.productId}`)
    },
    subscriptionResource: {
      type: SubscriptionResourceType,
      args : {subscriptionResourceId: {type: GraphQLString}},
      resolve: (productSubscriptionResource, args, {loaders}) => loaders.ofbiz.load(`subscriptionResources/find?subscriptionResourceId=${productSubscriptionResource.subscriptionResourceId}`)
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
      resolve: (productSubscriptionResource, args, {loaders}) => loaders.ofbiz.load(`roleTypes/find?roleTypeId=${productSubscriptionResource.useRoleTypeId}`)
    },
    maxLifeTime: {type: GraphQLInt},
    useTime: {type: GraphQLInt},
    purchaseThruDate: {type: GraphQLString},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productSubscriptionResource, args, {loaders}) => loaders.ofbiz.load(`productStores/find?productStoreId=${productSubscriptionResource.productStoreId}`)
    },
    gracePeriodOnExpiry: {type: GraphQLInt},
    hostedPathAlias: {type: GraphQLString}
  })
});

export {ProductSubscriptionResourceType};
    




const ProductSubscriptionResourceInputType = new GraphQLInputObjectType({
  name: 'ProductSubscriptionResourceInputType',
  description: 'input type for ProductSubscriptionResource in product',

  fields: () => ({
    purchaseFromDate: {type: GraphQLString},
    maxLifeTimeUomId: {type: GraphQLString},
    useTimeUomId: {type: GraphQLString},
    productId: {type: GraphQLString},
    subscriptionResourceId: {type: GraphQLString},
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
    useRoleTypeId: {type: GraphQLString},
    maxLifeTime: {type: GraphQLInt},
    useTime: {type: GraphQLInt},
    purchaseThruDate: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    gracePeriodOnExpiry: {type: GraphQLInt},
    hostedPathAlias: {type: GraphQLString}
  })
});

export {ProductSubscriptionResourceInputType};
    