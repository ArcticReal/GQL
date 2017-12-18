
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

import {PaymentTypeType} from '../accounting/PaymentType.js';


const PaymentTypeAttrType = new GraphQLObjectType({
  name: 'PaymentTypeAttrType',
  description: 'Type for PaymentTypeAttr in accounting',

  fields: () => ({
    paymentType: {
      type: PaymentTypeType,
      args : {paymentTypeId: {type: GraphQLString}},
      resolve: (paymentTypeAttr, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentTypes/find?paymentTypeId=${paymentTypeAttr.paymentTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {PaymentTypeAttrType};
    




const PaymentTypeAttrInputType = new GraphQLInputObjectType({
  name: 'PaymentTypeAttrInputType',
  description: 'input type for PaymentTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    paymentTypeId: {type: GraphQLString}
  })
});

export {PaymentTypeAttrInputType};
    