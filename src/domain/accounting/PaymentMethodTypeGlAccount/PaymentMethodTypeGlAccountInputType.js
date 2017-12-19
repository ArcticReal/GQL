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

const PaymentMethodTypeGlAccountInputType = new GraphQLInputObjectType({
  name: 'PaymentMethodTypeGlAccountInputType',
  description: 'input type for PaymentMethodTypeGlAccount',

  fields: () => ({
    glAccountId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    paymentMethodTypeId: {type: GraphQLString}
  })
});

export {PaymentMethodTypeGlAccountInputType};
    