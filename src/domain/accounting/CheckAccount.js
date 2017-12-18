
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


const CheckAccountType = new GraphQLObjectType({
  name: 'CheckAccountType',
  description: 'Type for CheckAccount in accounting',

  fields: () => ({
    companyNameOnAccount: {type: GraphQLString},
    branchCode: {type: GraphQLString},
    routingNumber: {type: GraphQLString},
    nameOnAccount: {type: GraphQLString},
    paymentMethod: {
      type: PaymentMethodType,
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (checkAccount, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentMethods/find?paymentMethodId=${checkAccount.paymentMethodId}`)
    },
    accountType: {type: GraphQLString},
    bankName: {type: GraphQLString},
    accountNumber: {type: GraphQLString},
    contactMech: {
      type: PostalAddressType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (checkAccount, args, {loaders}) => loaders.ofbiz.load(`party/postalAddresss/find?contactMechId=${checkAccount.contactMechId}`)
    }
  })
});

export {CheckAccountType};
    




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
    