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

const PaymentGroupInputType = new GraphQLInputObjectType({
  name: 'PaymentGroupInputType',
  description: 'input type for PaymentGroup',

  fields: () => ({
    paymentGroupId: {type: GraphQLString},
    paymentGroupName: {type: GraphQLString},
    paymentGroupTypeId: {type: GraphQLString}
  })
});

export {PaymentGroupInputType};
    