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

const PaymentGlAccountTypeMapResponseType = new GraphQLObjectType({
  name: 'PaymentGlAccountTypeMapResponseType',
  description: 'response type for PaymentGlAccountTypeMap',

  fields: () => ({
    glAccountTypeId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    paymentTypeId: {type: GraphQLString}
  })
});

export {PaymentGlAccountTypeMapResponseType};
    