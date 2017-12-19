
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


const EftAccountType = new GraphQLObjectType({
  name: 'EftAccountType',
  description: 'Type for EftAccount in accounting',

  fields: () => ({
    companyNameOnAccount: {type: GraphQLString},
    routingNumber: {type: GraphQLString},
    nameOnAccount: {type: GraphQLString},
    paymentMethod: {
      type: PaymentMethodType,
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (eftAccount, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentMethods/find?paymentMethodId=${eftAccount.paymentMethodId}`)
    },
    accountType: {type: GraphQLString},
    bankName: {type: GraphQLString},
    yearsAtBank: {type: GraphQLInt},
    accountNumber: {type: GraphQLString},
    contactMech: {
      type: PostalAddressType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (eftAccount, args, {loaders}) => loaders.ofbiz.load(`party/postalAddresss/find?contactMechId=${eftAccount.contactMechId}`)
    }
  })
});

export {EftAccountType};
    