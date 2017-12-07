
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PaymentTypeType} from '../accounting/PaymentTypeType.js';


const PaymentTypeAttrType = new GraphQLObjectType({
  name: 'PaymentTypeAttrType',
  description: 'Type for PaymentTypeAttr in accounting',

  fields: () => ({
    paymentType: {
      type: PaymentTypeType,
      args : {paymentTypeId: {type: GraphQLString}},
      resolve: (paymentTypeAttr, args, {loaders}) => loaders.ofbiz.load(`paymentTypes/find?paymentTypeId=${paymentTypeAttr.paymentTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {PaymentTypeAttrType};
    