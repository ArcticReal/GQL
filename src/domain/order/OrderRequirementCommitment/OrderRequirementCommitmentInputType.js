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

const OrderRequirementCommitmentInputType = new GraphQLInputObjectType({
  name: 'OrderRequirementCommitmentInputType',
  description: 'input type for OrderRequirementCommitment',

  fields: () => ({
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    requirementId: {type: GraphQLString}
  })
});

export {OrderRequirementCommitmentInputType};
    