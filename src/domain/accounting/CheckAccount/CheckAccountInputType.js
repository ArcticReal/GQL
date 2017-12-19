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

const CheckAccountInputType = new GraphQLInputObjectType({
  name: 'CheckAccountInputType',
  description: 'input type for CheckAccount',

  fields: () => ({
    accountNumber: {type: GraphQLString},
    accountType: {type: GraphQLString},
    bankName: {type: GraphQLString},
    branchCode: {type: GraphQLString},
    companyNameOnAccount: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    nameOnAccount: {type: GraphQLString},
    paymentMethodId: {type: GraphQLString},
    routingNumber: {type: GraphQLString}
  })
});

export {CheckAccountInputType};
    