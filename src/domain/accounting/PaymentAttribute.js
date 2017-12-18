
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

import {PaymentType} from '../accounting/Payment.js';


const PaymentAttributeType = new GraphQLObjectType({
  name: 'PaymentAttributeType',
  description: 'Type for PaymentAttribute in accounting',

  fields: () => ({
    payment: {
      type: PaymentType,
      args : {paymentId: {type: GraphQLString}},
      resolve: (paymentAttribute, args, {loaders}) => loaders.ofbiz.load(`accounting/payments/find?paymentId=${paymentAttribute.paymentId}`)
    },
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {PaymentAttributeType};
    




const PaymentAttributeInputType = new GraphQLInputObjectType({
  name: 'PaymentAttributeInputType',
  description: 'input type for PaymentAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    paymentId: {type: GraphQLString}
  })
});

export {PaymentAttributeInputType};
    