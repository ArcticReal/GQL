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

const OrderItemShipGrpInvResInputType = new GraphQLInputObjectType({
  name: 'OrderItemShipGrpInvResInputType',
  description: 'input type for OrderItemShipGrpInvRes',

  fields: () => ({
    createdDatetime: {type: GraphQLString},
    currentPromisedDate: {type: GraphQLString},
    inventoryItemId: {type: GraphQLString},
    oldPickStartDate: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    priority: {type: GraphQLBoolean},
    promisedDatetime: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    quantityNotAvailable: {type: GraphQLFloat},
    reserveOrderEnumId: {type: GraphQLString},
    reservedDatetime: {type: GraphQLString},
    sequenceId: {type: GraphQLInt},
    shipGroupSeqId: {type: GraphQLString}
  })
});

export {OrderItemShipGrpInvResInputType};
    