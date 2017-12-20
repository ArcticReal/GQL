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
import {ContainerTypeInputType} from '../../product/ContainerType/ContainerTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContainerType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContainerType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/container/containerTypes/add?`, null, req);
  }
};
export {createContainerType};


const updateContainerType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContainerType method',
  args:{containerTypeToBeUpdated: {type: ContainerTypeInputType},containerTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/container/containerTypes/${args.containerTypeId}?`, args.containerTypeToBeUpdated, req);
  }
};
export {updateContainerType};


const deleteContainerTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteContainerTypeByIdUpdated method',
  args:{containerTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/container/containerTypes/${args.containerTypeId}?`, null, req);
  }
};
export {deleteContainerTypeByIdUpdated};
