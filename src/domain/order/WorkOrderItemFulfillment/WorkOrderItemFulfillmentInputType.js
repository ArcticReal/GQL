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

const WorkOrderItemFulfillmentInputType = new GraphQLInputObjectType({
  name: 'WorkOrderItemFulfillmentInputType',
  description: 'input type for WorkOrderItemFulfillment',

  fields: () => ({
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    shipGroupSeqId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkOrderItemFulfillmentInputType};
    