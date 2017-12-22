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
import {ContainerInputType} from '../../product/Container/ContainerInputType.js';
import {ContainerResponseType} from '../../product/Container/ContainerResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContainer = {
  type: ContainerResponseType,
  description: 'mutation for ofbiz createContainer method',
  args:{containerToBeAdded: {type: ContainerInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/containers/add?`, args.containerToBeAdded, req);
  }
};
export {createContainer};


const updateContainer = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContainer method',
  args:{containerToBeUpdated: {type: ContainerInputType},containerId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/containers/${args.containerId}?`, args.containerToBeUpdated, req);
  }
};
export {updateContainer};


const deleteContainerByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContainerByIdUpdated method',
  args:{containerId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/containers/${args.containerId}?`, null, req);
  }
};
export {deleteContainerByIdUpdated};
