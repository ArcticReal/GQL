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

const PaymentMethodInputType = new GraphQLInputObjectType({
  name: 'PaymentMethodInputType',
  description: 'input type for PaymentMethod',

  fields: () => ({
    description: {type: GraphQLString},
    finAccountId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    paymentMethodId: {type: GraphQLString},
    paymentMethodTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PaymentMethodInputType};
    