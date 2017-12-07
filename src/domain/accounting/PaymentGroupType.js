
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PaymentGroupMemberType} from '../accounting/PaymentGroupMemberType.js';
import {PaymentGroupTypeType} from '../accounting/PaymentGroupTypeType.js';


const PaymentGroupType = new GraphQLObjectType({
  name: 'PaymentGroupType',
  description: 'Type for PaymentGroup in accounting',

  fields: () => ({
    paymentGroupId: {type: GraphQLString},
    paymentGroupName: {type: GraphQLString},
    paymentGroupType: {
      type: PaymentGroupTypeType,
      args : {paymentGroupTypeId: {type: GraphQLString}},
      resolve: (paymentGroup, args, {loaders}) => loaders.ofbiz.load(`paymentGroupTypes/find?paymentGroupTypeId=${paymentGroup.paymentGroupTypeId}`)
    },
    paymentGroupMember: {
      type: new GraphQLList(PaymentGroupMemberType),
      args : {paymentGroupId: {type: GraphQLString}},
      resolve: (paymentGroup, args, {loaders}) => loaders.ofbizArray.load(`paymentGroupMembers/find?paymentGroupId=${paymentGroup.paymentGroupId}`)
    }
  })
});

export {PaymentGroupType};
    