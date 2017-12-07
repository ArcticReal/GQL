
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PaymentType} from '../accounting/PaymentType.js';


const PaymentAttributeType = new GraphQLObjectType({
  name: 'PaymentAttributeType',
  description: 'Type for PaymentAttribute in accounting',

  fields: () => ({
    payment: {
      type: PaymentType,
      args : {paymentId: {type: GraphQLString}},
      resolve: (paymentAttribute, args, {loaders}) => loaders.ofbiz.load(`payments/find?paymentId=${paymentAttribute.paymentId}`)
    },
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLInt},
    attrName: {type: GraphQLString}
  })
});

export {PaymentAttributeType};
    