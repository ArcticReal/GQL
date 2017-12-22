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
import {DataResourceTypeResponseType} from '../../content/DataResourceType/DataResourceTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createDataResourceType = {
  type: DataResourceTypeResponseType,
  description: 'mutation for ofbiz createDataResourceType method',
  args:{dataResourceTypeToBeAdded: {type: DataResourceTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/dataResource/dataResourceTypes/add?`, args.dataResourceTypeToBeAdded, req);
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
