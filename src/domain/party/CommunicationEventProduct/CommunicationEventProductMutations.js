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


const createCommunicationEventProduct = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCommunicationEventProduct method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/communicationEvent/communicationEventProducts/add?`, null, req);
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
