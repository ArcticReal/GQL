
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

import {PostalAddressType} from '../../party/PostalAddress/PostalAddressType.js';
import {PaymentMethodType} from '../../accounting/PaymentMethod/PaymentMethodType.js';


const CreditCardType = new GraphQLObjectType({
  name: 'CreditCardType',
  description: 'Type for CreditCard in accounting',

  fields: () => ({
    firstNameOnCard: {type: GraphQLString},
    issueNumber: {type: GraphQLString},
    cardType: {type: GraphQLString},
    lastFailedAuthDate: {type: GraphQLString},
    consecutiveFailedNsf: {type: GraphQLInt},
    contactMech: {
      type: PostalAddressType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (creditCard, args, {loaders}) => loaders.ofbiz.load(`party/postalAddresss/find?contactMechId=${creditCard.contactMechId}`)
    },
    companyNameOnCard: {type: GraphQLString},
    titleOnCard: {type: GraphQLString},
    lastNameOnCard: {type: GraphQLString},
    paymentMethod: {
      type: PaymentMethodType,
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (creditCard, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentMethods/find?paymentMethodId=${creditCard.paymentMethodId}`)
    },
    middleNameOnCard: {type: GraphQLString},
    validFromDate: {type: GraphQLString},
    expireDate: {type: GraphQLString},
    consecutiveFailedAuths: {type: GraphQLInt},
    lastFailedNsfDate: {type: GraphQLString},
    cardNumber: {type: GraphQLString},
    suffixOnCard: {type: GraphQLString}
  })
});

export {CreditCardType};
    