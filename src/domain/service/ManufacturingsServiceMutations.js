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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';


const createShipmentPackages = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentPackages method',
  args:{shipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturings/createShipmentPackages?shipmentId=${args.shipmentId}`, null, req);
  }
};
export {createShipmentPackages};
