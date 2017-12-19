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

const PaymentGroupMemberInputType = new GraphQLInputObjectType({
  name: 'PaymentGroupMemberInputType',
  description: 'input type for PaymentGroupMember',

  fields: () => ({
    fromDate: {type: GraphQLString},
    paymentGroupId: {type: GraphQLString},
    paymentId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {PaymentGroupMemberInputType};
    