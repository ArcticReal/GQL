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


const createDataResourceType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createDataResourceType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/dataResource/dataResourceTypes/add?`, null, req);
  }
};
export {createDataResourceType};


const updateDataResourceType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateDataResourceType method',
  args:{dataResourceTypeToBeUpdated: {type: DataResourceTypeInputType},dataResourceTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/dataResource/dataResourceTypes/${args.dataResourceTypeId}?`, args.dataResourceTypeToBeUpdated, req);
  }
};
export {updateDataResourceType};


const deleteDataResourceTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteDataResourceTypeByIdUpdated method',
  args:{dataResourceTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/dataResource/dataResourceTypes/${args.dataResourceTypeId}?`, null, req);
  }
};
export {deleteDataResourceTypeByIdUpdated};
