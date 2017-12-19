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

const ProductSubscriptionResourceInputType = new GraphQLInputObjectType({
  name: 'ProductSubscriptionResourceInputType',
  description: 'input type for ProductSubscriptionResource',

  fields: () => ({
    automaticExtend: {type: GraphQLBoolean},
    availableTime: {type: GraphQLInt},
    availableTimeUomId: {type: GraphQLString},
    canclAutmExtTime: {type: GraphQLInt},
    canclAutmExtTimeUomId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    gracePeriodOnExpiry: {type: GraphQLInt},
    gracePeriodOnExpiryUomId: {type: GraphQLString},
    maxLifeTime: {type: GraphQLInt},
    maxLifeTimeUomId: {type: GraphQLString},
    productId: {type: GraphQLString},
    purchaseFromDate: {type: GraphQLString},
    purchaseThruDate: {type: GraphQLString},
    subscriptionResourceId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    useCountLimit: {type: GraphQLInt},
    useRoleTypeId: {type: GraphQLString},
    useTime: {type: GraphQLInt},
    useTimeUomId: {type: GraphQLString}
  })
});

export {ProductSubscriptionResourceInputType};
    