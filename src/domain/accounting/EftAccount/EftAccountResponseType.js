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

const EftAccountResponseType = new GraphQLObjectType({
  name: 'EftAccountResponseType',
  description: 'response type for EftAccount',

  fields: () => ({
    accountNumber: {type: GraphQLString},
    accountType: {type: GraphQLString},
    bankName: {type: GraphQLString},
    companyNameOnAccount: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    nameOnAccount: {type: GraphQLString},
    paymentMethodId: {type: GraphQLString},
    routingNumber: {type: GraphQLString},
    yearsAtBank: {type: GraphQLInt}
  })
});

export {EftAccountResponseType};
    