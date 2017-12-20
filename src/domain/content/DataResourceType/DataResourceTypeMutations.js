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
import {DataResourceTypeInputType} from '../../content/DataResourceType/DataResourceTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createDataResourceType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createDataResourceType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/dataResource/dataResourceTypes/add?`, null, req);
  }
};
export {createDataResourceType};


const updateDataResourceType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateDataResourceType method',
  args:{dataResourceTypeToBeUpdated: {type: DataResourceTypeInputType},dataResourceTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/dataResource/dataResourceTypes/${args.dataResourceTypeId}?`, args.dataResourceTypeToBeUpdated, req);
  }
};
export {updateDataResourceType};


const deleteDataResourceTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteDataResourceTypeByIdUpdated method',
  args:{dataResourceTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/dataResource/dataResourceTypes/${args.dataResourceTypeId}?`, null, req);
  }
};
export {deleteDataResourceTypeByIdUpdated};
