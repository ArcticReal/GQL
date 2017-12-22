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
import {ResponseType,KeyValueInputType} from '../../framework/helpTypes.js';


const createShipmentPackages = {
  type: ResponseType,
  description: 'mutation for ofbiz createShipmentPackages method',
  args:{shipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturings/createShipmentPackages?shipmentId=${args.shipmentId}`, null, req);
  }
};
export {createShipmentPackages};
