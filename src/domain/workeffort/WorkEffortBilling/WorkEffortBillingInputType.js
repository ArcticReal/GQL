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

const WorkEffortBillingInputType = new GraphQLInputObjectType({
  name: 'WorkEffortBillingInputType',
  description: 'input type for WorkEffortBilling',

  fields: () => ({
    invoiceId: {type: GraphQLString},
    invoiceItemSeqId: {type: GraphQLString},
    percentage: {type: GraphQLFloat},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortBillingInputType};
    