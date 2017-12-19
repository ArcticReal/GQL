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

const CreditCardInputType = new GraphQLInputObjectType({
  name: 'CreditCardInputType',
  description: 'input type for CreditCard',

  fields: () => ({
    cardNumber: {type: GraphQLString},
    cardType: {type: GraphQLString},
    companyNameOnCard: {type: GraphQLString},
    consecutiveFailedAuths: {type: GraphQLInt},
    consecutiveFailedNsf: {type: GraphQLInt},
    contactMechId: {type: GraphQLString},
    expireDate: {type: GraphQLString},
    firstNameOnCard: {type: GraphQLString},
    issueNumber: {type: GraphQLString},
    lastFailedAuthDate: {type: GraphQLString},
    lastFailedNsfDate: {type: GraphQLString},
    lastNameOnCard: {type: GraphQLString},
    middleNameOnCard: {type: GraphQLString},
    paymentMethodId: {type: GraphQLString},
    suffixOnCard: {type: GraphQLString},
    titleOnCard: {type: GraphQLString},
    validFromDate: {type: GraphQLString}
  })
});

export {CreditCardInputType};
    