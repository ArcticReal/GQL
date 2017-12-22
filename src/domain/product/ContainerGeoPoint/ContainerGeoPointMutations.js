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
import {ContainerGeoPointResponseType} from '../../product/ContainerGeoPoint/ContainerGeoPointResponseType.js';
import {ContainerGeoPointInputType} from '../../product/ContainerGeoPoint/ContainerGeoPointInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContainerGeoPoint = {
  type: ContainerGeoPointResponseType,
  description: 'mutation for ofbiz createContainerGeoPoint method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/container/containerGeoPoints/add?`, null, req);
  }
};
export {createContainerGeoPoint};


const deleteContainerGeoPointByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContainerGeoPointByIdUpdated method',
  args:{containerGeoPointId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/container/containerGeoPoints/${args.containerGeoPointId}?`, null, req);
  }
};
export {deleteContainerGeoPointByIdUpdated};


const updateContainerGeoPoint = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContainerGeoPoint method',
  args:{containerGeoPointToBeUpdated: {type: ContainerGeoPointInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/container/containerGeoPoints/${args.nullVal}?`, args.containerGeoPointToBeUpdated, req);
  }
};
export {updateContainerGeoPoint};
