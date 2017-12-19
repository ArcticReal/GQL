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

const OrderDeliveryScheduleInputType = new GraphQLInputObjectType({
  name: 'OrderDeliveryScheduleInputType',
  description: 'input type for OrderDeliverySchedule',

  fields: () => ({
    cartons: {type: GraphQLInt},
    estimatedReadyDate: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    skidsPallets: {type: GraphQLInt},
    statusId: {type: GraphQLString},
    totalCubicSize: {type: GraphQLFloat},
    totalCubicUomId: {type: GraphQLString},
    totalWeight: {type: GraphQLFloat},
    totalWeightUomId: {type: GraphQLString},
    unitsPieces: {type: GraphQLFloat}
  })
});

export {OrderDeliveryScheduleInputType};
    