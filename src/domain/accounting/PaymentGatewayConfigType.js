
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

import {PaymentGatewayConfigType} from '../accounting/PaymentGatewayConfig.js';


const PaymentGatewayConfigTypeType = new GraphQLObjectType({
  name: 'PaymentGatewayConfigTypeType',
  description: 'Type for PaymentGatewayConfigType in accounting',

  fields: () => ({
    parentType: {
      type: PaymentGatewayConfigTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (paymentGatewayConfigType, args, {loaders}) => loaders.ofbiz.load(`paymentGatewayConfigTypes/find?paymentGatewayConfigTypeId=${paymentGatewayConfigType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    paymentGatewayConfigTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    paymentGatewayConfigTypes: {
      type: new GraphQLList(PaymentGatewayConfigTypeType),
      args : {paymentGatewayConfigTypeId: {type: GraphQLString}},
      resolve: (paymentGatewayConfigType, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayConfigTypes/find?paymentGatewayConfigTypeId=${paymentGatewayConfigType.paymentGatewayConfigTypeId}`)
    },
    paymentGatewayConfigs: {
      type: new GraphQLList(PaymentGatewayConfigType),
      args : {paymentGatewayConfigTypeId: {type: GraphQLString}},
      resolve: (paymentGatewayConfigType, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayConfigs/find?paymentGatewayConfigTypeId=${paymentGatewayConfigType.paymentGatewayConfigTypeId}`)
    }
  })
});

export {PaymentGatewayConfigTypeType};
    




const PaymentGatewayConfigTypeInputType = new GraphQLInputObjectType({
  name: 'PaymentGatewayConfigTypeInputType',
  description: 'input type for PaymentGatewayConfigType in accounting',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    paymentGatewayConfigTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {PaymentGatewayConfigTypeInputType};
    