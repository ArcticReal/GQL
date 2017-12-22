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

const PaymentGroupMemberResponseType = new GraphQLObjectType({
  name: 'PaymentGroupMemberResponseType',
  description: 'response type for PaymentGroupMember',

  fields: () => ({
    fromDate: {type: GraphQLString},
    paymentGroupId: {type: GraphQLString},
    paymentId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {PaymentGroupMemberResponseType};
    