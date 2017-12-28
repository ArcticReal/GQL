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
import {CommunicationEventProductResponseType} from '../../party/CommunicationEventProduct/CommunicationEventProductResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCommunicationEventProduct = {
  type: CommunicationEventProductResponseType,
  description: 'mutation for ofbiz createCommunicationEventProduct method',
  args:{communicationEventProductToBeAdded: {type: CommunicationEventProductInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/communicationEvent/communicationEventProducts/add?`, args.communicationEventProductToBeAdded, req);
  }
};
export {createCommunicationEventProduct};


const deleteCommunicationEventProductByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCommunicationEventProductByIdUpdated method',
  args:{communicationEventProductId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/communicationEvent/communicationEventProducts/${args.communicationEventProductId}?`, null, req);
  }
};
export {deleteCommunicationEventProductByIdUpdated};


const updateCommunicationEventProduct = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCommunicationEventProduct method',
  args:{communicationEventProductToBeUpdated: {type: CommunicationEventProductInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/communicationEvent/communicationEventProducts/${args.nullVal}?`, args.communicationEventProductToBeUpdated, req);
  }
};
export {updateCommunicationEventProduct};
