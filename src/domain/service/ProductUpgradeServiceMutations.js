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


const migrateFacilityRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz migrateFacilityRole method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productUpgrade/migrateFacilityRole?`, null, req);
  }
};
export {migrateFacilityRole};


const migrateFacilitySquareFootage = {
  type: ResopnseType,
  description: 'mutation for ofbiz migrateFacilitySquareFootage method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productUpgrade/migrateFacilitySquareFootage?`, null, req);
  }
};
export {migrateFacilitySquareFootage};


const migrateProductKeyword = {
  type: ResopnseType,
  description: 'mutation for ofbiz migrateProductKeyword method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productUpgrade/migrateProductKeyword?`, null, req);
  }
};
export {migrateProductKeyword};
