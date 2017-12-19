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

const PaymentMethodTypeInputType = new GraphQLInputObjectType({
  name: 'PaymentMethodTypeInputType',
  description: 'input type for PaymentMethodType',

  fields: () => ({
    defaultGlAccountId: {type: GraphQLString},
    description: {type: GraphQLString},
    paymentMethodTypeId: {type: GraphQLString}
  })
});

export {PaymentMethodTypeInputType};
    