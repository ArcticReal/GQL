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


const migrateFacilityRole = {
  type: ResponseType,
  description: 'mutation for ofbiz migrateFacilityRole method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productUpgrade/migrateFacilityRole?`, null, req);
  }
};
export {migrateFacilityRole};


const migrateFacilitySquareFootage = {
  type: ResponseType,
  description: 'mutation for ofbiz migrateFacilitySquareFootage method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productUpgrade/migrateFacilitySquareFootage?`, null, req);
  }
};
export {migrateFacilitySquareFootage};


const migrateProductKeyword = {
  type: ResponseType,
  description: 'mutation for ofbiz migrateProductKeyword method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productUpgrade/migrateProductKeyword?`, null, req);
  }
};
export {migrateProductKeyword};
