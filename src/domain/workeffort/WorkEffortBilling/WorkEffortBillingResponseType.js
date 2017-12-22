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

const WorkEffortBillingResponseType = new GraphQLObjectType({
  name: 'WorkEffortBillingResponseType',
  description: 'response type for WorkEffortBilling',

  fields: () => ({
    invoiceId: {type: GraphQLString},
    invoiceItemSeqId: {type: GraphQLString},
    percentage: {type: GraphQLFloat},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortBillingResponseType};
    