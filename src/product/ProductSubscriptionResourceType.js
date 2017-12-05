
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
import {SubscriptionResource} from '../product/SubscriptionResource.js';
import {RoleType} from '../product/RoleType.js';
import {ProductStore} from '../product/ProductStore.js';


const ProductSubscriptionResource = new GraphQLObjectType({
  name: 'ProductSubscriptionResourceType',
  description: 'Type for ProductSubscriptionResource in product',

  fields: () => ({
    purchaseFromDate: {type: GraphQLString},
    maxLifeTimeUomId: {type: GraphQLString},
    useTimeUomId: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productSubscriptionResource, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    subscriptionResource: {
      type: SubscriptionResourceType,
      args : {subscriptionResourceId: {type: GraphQLString}},
      resolve: (productSubscriptionResource, args, {loaders}) => loaders.ofbizArray.load(`subscriptionResources/find?=${args.subscriptionResourceId}`)
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
      resolve: (productSubscriptionResource, args, {loaders}) => loaders.ofbizArray.load(`roleTypes/find?roleTypeId=${args.useRoleTypeId}`)
    },
    maxLifeTime: {type: GraphQLInt},
    useTime: {type: GraphQLInt},
    purchaseThruDate: {type: GraphQLString},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productSubscriptionResource, args, {loaders}) => loaders.ofbizArray.load(`productStores/find?=${args.productStoreId}`)
    },
    gracePeriodOnExpiry: {type: GraphQLInt},
    hostedPathAlias: {type: GraphQLString}
  })
});

export {ProductSubscriptionResource};
    