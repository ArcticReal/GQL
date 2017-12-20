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
import {DataResourceInputType} from '../../content/DataResource/DataResourceInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createDataResource = {
  type: ResopnseType,
  description: 'mutation for ofbiz createDataResource method',
  args:{dataResourceToBeAdded: {type: DataResourceInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/dataResources/add?`, args.dataResourceToBeAdded, req);
  }
};
export {createDataResource};


const updateDataResource = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateDataResource method',
  args:{dataResourceToBeUpdated: {type: DataResourceInputType},dataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/dataResources/${args.dataResourceId}?`, args.dataResourceToBeUpdated, req);
  }
};
export {updateDataResource};


const deleteDataResourceByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteDataResourceByIdUpdated method',
  args:{dataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/dataResources/${args.dataResourceId}?`, null, req);
  }
};
export {deleteDataResourceByIdUpdated};
