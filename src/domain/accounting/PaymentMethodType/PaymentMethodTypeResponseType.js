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

const PaymentMethodTypeResponseType = new GraphQLObjectType({
  name: 'PaymentMethodTypeResponseType',
  description: 'response type for PaymentMethodType',

  fields: () => ({
    defaultGlAccountId: {type: GraphQLString},
    description: {type: GraphQLString},
    paymentMethodTypeId: {type: GraphQLString}
  })
});

export {PaymentMethodTypeResponseType};
    