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

const DeliveryInputType = new GraphQLInputObjectType({
  name: 'DeliveryInputType',
  description: 'input type for Delivery',

  fields: () => ({
    actualArrivalDate: {type: GraphQLString},
    actualStartDate: {type: GraphQLString},
    deliveryId: {type: GraphQLString},
    destFacilityId: {type: GraphQLString},
    endMileage: {type: GraphQLFloat},
    estimatedArrivalDate: {type: GraphQLString},
    estimatedStartDate: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    fuelUsed: {type: GraphQLFloat},
    originFacilityId: {type: GraphQLString},
    startMileage: {type: GraphQLFloat}
  })
});

export {DeliveryInputType};
    