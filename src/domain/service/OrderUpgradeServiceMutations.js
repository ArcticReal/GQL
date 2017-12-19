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


const migrateCustRequestRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz migrateCustRequestRole method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderUpgrade/migrateCustRequestRole?`, null, req);
  }
};
export {migrateCustRequestRole};


const migrateOrderItemAssociation = {
  type: GraphQLString,
  description: 'mutation for ofbiz migrateOrderItemAssociation method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderUpgrade/migrateOrderItemAssociation?`, null, req);
  }
};
export {migrateOrderItemAssociation};


const migrateOrderShipment = {
  type: GraphQLString,
  description: 'mutation for ofbiz migrateOrderShipment method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderUpgrade/migrateOrderShipment?`, null, req);
  }
};
export {migrateOrderShipment};
