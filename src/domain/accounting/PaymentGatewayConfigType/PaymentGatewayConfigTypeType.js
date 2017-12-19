
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

import {PaymentGatewayConfigType} from '../../accounting/PaymentGatewayConfig/PaymentGatewayConfigType.js';


const PaymentGatewayConfigTypeType = new GraphQLObjectType({
  name: 'PaymentGatewayConfigTypeType',
  description: 'Type for PaymentGatewayConfigType in accounting',

  fields: () => ({
    parentType: {
      type: PaymentGatewayConfigTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (paymentGatewayConfigType, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentGatewayConfigTypes/find?paymentGatewayConfigTypeId=${paymentGatewayConfigType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    paymentGatewayConfigTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    paymentGatewayConfigTypes: {
      type: new GraphQLList(PaymentGatewayConfigTypeType),
      args : {},
      resolve: (paymentGatewayConfigType, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentGatewayConfigTypes/find?paymentGatewayConfigTypeId=${paymentGatewayConfigType.paymentGatewayConfigTypeId}`)
    },
    paymentGatewayConfigs: {
      type: new GraphQLList(PaymentGatewayConfigType),
      args : {},
      resolve: (paymentGatewayConfigType, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentGatewayConfigs/find?paymentGatewayConfigTypeId=${paymentGatewayConfigType.paymentGatewayConfigTypeId}`)
    }
  })
});

export {PaymentGatewayConfigTypeType};
    