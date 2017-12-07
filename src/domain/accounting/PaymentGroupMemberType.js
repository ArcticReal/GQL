
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PaymentGroupType} from '../accounting/PaymentGroupType.js';
import {PaymentType} from '../accounting/PaymentType.js';


const PaymentGroupMemberType = new GraphQLObjectType({
  name: 'PaymentGroupMemberType',
  description: 'Type for PaymentGroupMember in accounting',

  fields: () => ({
    paymentGroup: {
      type: PaymentGroupType,
      args : {paymentGroupId: {type: GraphQLString}},
      resolve: (paymentGroupMember, args, {loaders}) => loaders.ofbiz.load(`paymentGroups/find?paymentGroupId=${paymentGroupMember.paymentGroupId}`)
    },
    fromDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    payment: {
      type: PaymentType,
      args : {paymentId: {type: GraphQLString}},
      resolve: (paymentGroupMember, args, {loaders}) => loaders.ofbiz.load(`payments/find?paymentId=${paymentGroupMember.paymentId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {PaymentGroupMemberType};
    