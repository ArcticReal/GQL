
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ShipmentType} from '../shipment/ShipmentType.js';
import {UserLoginType} from '../login/UserLoginType.js';


const ShipmentStatusType = new GraphQLObjectType({
  name: 'ShipmentStatusType',
  description: 'Type for ShipmentStatus in shipment',

  fields: () => ({
    statusDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    shipment: {
      type: ShipmentType,
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentStatus, args, {loaders}) => loaders.ofbiz.load(`shipments/find?shipmentId=${shipmentStatus.shipmentId}`)
    },
    changeByUserLogin: {
      type: UserLoginType,
      args : {changeByUserLoginId: {type: GraphQLString}},
      resolve: (shipmentStatus, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${shipmentStatus.changeByUserLoginId}`)
    }
  })
});

export {ShipmentStatusType};
    