
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

import {ShipmentType} from '../shipment/Shipment.js';
import {UserLoginType} from '../login/UserLogin.js';


const ShipmentStatusType = new GraphQLObjectType({
  name: 'ShipmentStatusType',
  description: 'Type for ShipmentStatus in shipment',

  fields: () => ({
    statusDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    shipment: {
      type: ShipmentType,
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentStatus, args, {loaders}) => loaders.ofbiz.load(`/shipments/find?shipmentId=${shipmentStatus.shipmentId}`)
    },
    changeByUserLogin: {
      type: UserLoginType,
      args : {changeByUserLoginId: {type: GraphQLString}},
      resolve: (shipmentStatus, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${shipmentStatus.changeByUserLoginId}`)
    }
  })
});

export {ShipmentStatusType};
    




const ShipmentStatusInputType = new GraphQLInputObjectType({
  name: 'ShipmentStatusInputType',
  description: 'input type for ShipmentStatus in shipment',

  fields: () => ({
    statusDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    shipmentId: {type: GraphQLString},
    changeByUserLoginId: {type: GraphQLString}
  })
});

export {ShipmentStatusInputType};
    