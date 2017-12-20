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
import {CommunicationEventProductInputType} from '../../party/CommunicationEventProduct/CommunicationEventProductInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCommunicationEventProduct = {
  type: ResopnseType,
  description: 'mutation for ofbiz createCommunicationEventProduct method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/communicationEvent/communicationEventProducts/add?`, null, req);
  }
};
export {createCommunicationEventProduct};


const deleteCommunicationEventProductByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteCommunicationEventProductByIdUpdated method',
  args:{communicationEventProductId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/communicationEvent/communicationEventProducts/${args.communicationEventProductId}?`, null, req);
  }
};
export {deleteCommunicationEventProductByIdUpdated};


const updateCommunicationEventProduct = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateCommunicationEventProduct method',
  args:{communicationEventProductToBeUpdated: {type: CommunicationEventProductInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/communicationEvent/communicationEventProducts/${args.nullVal}?`, args.communicationEventProductToBeUpdated, req);
  }
};
export {updateCommunicationEventProduct};
