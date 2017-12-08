
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
    




const GiftCardInputType = new GraphQLInputObjectType({
  name: 'GiftCardInputType',
  description: 'input type for GiftCard in accounting',

  fields: () => ({
    paymentMethodId: {type: GraphQLString},
    pinNumber: {type: GraphQLString},
    expireDate: {type: GraphQLString},
    cardNumber: {type: GraphQLString},
    contactMechId: {type: GraphQLString}
  })
});

export {GiftCardInputType};
    