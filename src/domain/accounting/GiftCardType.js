
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PostalAddressType} from '../party/PostalAddressType.js';
import {PaymentMethodType} from '../accounting/PaymentMethodType.js';


const GiftCardType = new GraphQLObjectType({
  name: 'GiftCardType',
  description: 'Type for GiftCard in accounting',

  fields: () => ({
    paymentMethod: {
      type: PaymentMethodType,
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (giftCard, args, {loaders}) => loaders.ofbiz.load(`paymentMethods/find?paymentMethodId=${giftCard.paymentMethodId}`)
    },
    pinNumber: {type: GraphQLString},
    expireDate: {type: GraphQLString},
    cardNumber: {type: GraphQLString},
    contactMech: {
      type: PostalAddressType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (giftCard, args, {loaders}) => loaders.ofbiz.load(`postalAddresss/find?contactMechId=${giftCard.contactMechId}`)
    }
  })
});

export {GiftCardType};
    