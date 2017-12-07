
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


const PaymentGroupTypeType = new GraphQLObjectType({
  name: 'PaymentGroupTypeType',
  description: 'Type for PaymentGroupType in accounting',

  fields: () => ({
    parentType: {
      type: PaymentGroupTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (paymentGroupType, args, {loaders}) => loaders.ofbiz.load(`paymentGroupTypes/find?paymentGroupTypeId=${paymentGroupType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    paymentGroupTypeId: {type: GraphQLString},
    paymentGroupType: {
      type: new GraphQLList(PaymentGroupTypeType),
      args : {paymentGroupTypeId: {type: GraphQLString}},
      resolve: (paymentGroupType, args, {loaders}) => loaders.ofbizArray.load(`paymentGroupTypes/find?paymentGroupTypeId=${paymentGroupType.paymentGroupTypeId}`)
    },
    paymentGroup: {
      type: new GraphQLList(PaymentGroupType),
      args : {paymentGroupTypeId: {type: GraphQLString}},
      resolve: (paymentGroupType, args, {loaders}) => loaders.ofbizArray.load(`paymentGroups/find?paymentGroupTypeId=${paymentGroupType.paymentGroupTypeId}`)
    }
  })
});

export {PaymentGroupTypeType};
    