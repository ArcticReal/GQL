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

const PaymentGroupResponseType = new GraphQLObjectType({
  name: 'PaymentGroupResponseType',
  description: 'response type for PaymentGroup',

  fields: () => ({
    paymentGroupId: {type: GraphQLString},
    paymentGroupName: {type: GraphQLString},
    paymentGroupTypeId: {type: GraphQLString}
  })
});

export {PaymentGroupResponseType};
    