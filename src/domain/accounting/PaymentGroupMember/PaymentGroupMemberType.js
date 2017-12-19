
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

import {PaymentGroupType} from '../../accounting/PaymentGroup/PaymentGroupType.js';
import {PaymentType} from '../../accounting/Payment/PaymentType.js';


const PaymentGroupMemberType = new GraphQLObjectType({
  name: 'PaymentGroupMemberType',
  description: 'Type for PaymentGroupMember in accounting',

  fields: () => ({
    paymentGroup: {
      type: PaymentGroupType,
      args : {paymentGroupId: {type: GraphQLString}},
      resolve: (paymentGroupMember, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentGroups/find?paymentGroupId=${paymentGroupMember.paymentGroupId}`)
    },
    fromDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    payment: {
      type: PaymentType,
      args : {paymentId: {type: GraphQLString}},
      resolve: (paymentGroupMember, args, {loaders}) => loaders.ofbiz.load(`accounting/payments/find?paymentId=${paymentGroupMember.paymentId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {PaymentGroupMemberType};
    