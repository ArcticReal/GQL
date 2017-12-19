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
import {CarrierShipmentMethodInputType} from '../../shipment/CarrierShipmentMethod/CarrierShipmentMethodInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createCarrierShipmentMethod = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCarrierShipmentMethod method',
  args:{carrierShipmentMethodToBeAdded: {type: CarrierShipmentMethodInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/carrierShipmentMethods/add?`, args.carrierShipmentMethodToBeAdded, req);
  }
};
export {createCarrierShipmentMethod};


const deleteCarrierShipmentMethodByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCarrierShipmentMethodByIdUpdated method',
  args:{carrierShipmentMethodId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/carrierShipmentMethods/${args.carrierShipmentMethodId}?`, null, req);
  }
};
export {deleteCarrierShipmentMethodByIdUpdated};


const updateCarrierShipmentMethod = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCarrierShipmentMethod method',
  args:{carrierShipmentMethodToBeUpdated: {type: CarrierShipmentMethodInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/carrierShipmentMethods/${args.roleTypeId}?`, args.carrierShipmentMethodToBeUpdated, req);
  }
};
export {updateCarrierShipmentMethod};
