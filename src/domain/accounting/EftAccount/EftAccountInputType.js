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

const EftAccountInputType = new GraphQLInputObjectType({
  name: 'EftAccountInputType',
  description: 'input type for EftAccount',

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

export {EftAccountInputType};
    