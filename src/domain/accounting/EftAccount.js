
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

import {PostalAddressType} from '../party/PostalAddress.js';
import {PaymentMethodType} from '../accounting/PaymentMethod.js';


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
    