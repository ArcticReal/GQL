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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createContainer = {
  type: GraphQLString,
  description: 'mutation for ofbiz createContainer method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/containers/add?`, null, req);
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
