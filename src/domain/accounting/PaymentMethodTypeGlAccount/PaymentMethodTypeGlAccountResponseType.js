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

const PaymentMethodTypeGlAccountResponseType = new GraphQLObjectType({
  name: 'PaymentMethodTypeGlAccountResponseType',
  description: 'response type for PaymentMethodTypeGlAccount',

  fields: () => ({
    glAccountId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    paymentMethodTypeId: {type: GraphQLString}
  })
});

export {PaymentMethodTypeGlAccountResponseType};
    