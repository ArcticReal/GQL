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

const WorkOrderItemFulfillmentResponseType = new GraphQLObjectType({
  name: 'WorkOrderItemFulfillmentResponseType',
  description: 'response type for WorkOrderItemFulfillment',

  fields: () => ({
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    shipGroupSeqId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkOrderItemFulfillmentResponseType};
    