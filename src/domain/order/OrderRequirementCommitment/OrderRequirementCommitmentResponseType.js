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

const OrderRequirementCommitmentResponseType = new GraphQLObjectType({
  name: 'OrderRequirementCommitmentResponseType',
  description: 'response type for OrderRequirementCommitment',

  fields: () => ({
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    requirementId: {type: GraphQLString}
  })
});

export {OrderRequirementCommitmentResponseType};
    