
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

import {PaymentGroupMemberType} from '../accounting/PaymentGroupMember.js';
import {PaymentGroupTypeType} from '../accounting/PaymentGroupType.js';


const PaymentGroupType = new GraphQLObjectType({
  name: 'PaymentGroupType',
  description: 'Type for PaymentGroup in accounting',

  fields: () => ({
    paymentGroupId: {type: GraphQLString},
    paymentGroupName: {type: GraphQLString},
    paymentGroupType: {
      type: PaymentGroupTypeType,
      args : {paymentGroupTypeId: {type: GraphQLString}},
      resolve: (paymentGroup, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentGroupTypes/find?paymentGroupTypeId=${paymentGroup.paymentGroupTypeId}`)
    },
    paymentGroupMembers: {
      type: new GraphQLList(PaymentGroupMemberType),
      args : {},
      resolve: (paymentGroup, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentGroupMembers/find?paymentGroupId=${paymentGroup.paymentGroupId}`)
    }
  })
});

export {PaymentGroupType};
    




const PaymentGroupInputType = new GraphQLInputObjectType({
  name: 'PaymentGroupInputType',
  description: 'input type for PaymentGroup in accounting',

  fields: () => ({
    paymentGroupId: {type: GraphQLString},
    paymentGroupName: {type: GraphQLString},
    paymentGroupTypeId: {type: GraphQLString}
  })
});

export {PaymentGroupInputType};
    