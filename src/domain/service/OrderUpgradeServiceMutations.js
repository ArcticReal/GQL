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
import {ResopnseType,KeyValueInputType} from '../../framework/helpTypes.js';


const migrateCustRequestRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz migrateCustRequestRole method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderUpgrade/migrateCustRequestRole?`, null, req);
  }
};
export {migrateCustRequestRole};


const migrateOrderItemAssociation = {
  type: ResopnseType,
  description: 'mutation for ofbiz migrateOrderItemAssociation method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderUpgrade/migrateOrderItemAssociation?`, null, req);
  }
};
export {migrateOrderItemAssociation};


const migrateOrderShipment = {
  type: ResopnseType,
  description: 'mutation for ofbiz migrateOrderShipment method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderUpgrade/migrateOrderShipment?`, null, req);
  }
};
export {migrateOrderShipment};
