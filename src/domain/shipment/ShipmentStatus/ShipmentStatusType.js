
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

import {ShipmentType} from '../../shipment/Shipment/ShipmentType.js';
import {UserLoginType} from '../../login/UserLogin/UserLoginType.js';


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
    