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

const PaymentGlAccountTypeMapInputType = new GraphQLInputObjectType({
  name: 'PaymentGlAccountTypeMapInputType',
  description: 'input type for PaymentGlAccountTypeMap',

  fields: () => ({
    glAccountTypeId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    paymentTypeId: {type: GraphQLString}
  })
});

export {PaymentGlAccountTypeMapInputType};
    