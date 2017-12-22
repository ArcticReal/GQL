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
import {PaymentGatewayOrbitalInputType} from '../../accounting/PaymentGatewayOrbital/PaymentGatewayOrbitalInputType.js';
import {PaymentGatewayOrbitalResponseType} from '../../accounting/PaymentGatewayOrbital/PaymentGatewayOrbitalResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentGatewayOrbital = {
  type: PaymentGatewayOrbitalResponseType,
  description: 'mutation for ofbiz createPaymentGatewayOrbital method',
  args:{paymentGatewayOrbitalToBeAdded: {type: PaymentGatewayOrbitalInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentGatewayOrbitals/add?`, args.paymentGatewayOrbitalToBeAdded, req);
  }
};
export {createPaymentGatewayOrbital};


const updatePaymentGatewayOrbital = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePaymentGatewayOrbital method',
  args:{paymentGatewayOrbitalToBeUpdated: {type: PaymentGatewayOrbitalInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentGatewayOrbitals/${args.nullVal}?`, args.paymentGatewayOrbitalToBeUpdated, req);
  }
};
export {updatePaymentGatewayOrbital};


const deletePaymentGatewayOrbitalByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePaymentGatewayOrbitalByIdUpdated method',
  args:{paymentGatewayOrbitalId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentGatewayOrbitals/${args.paymentGatewayOrbitalId}?`, null, req);
  }
};
export {deletePaymentGatewayOrbitalByIdUpdated};
