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
import {PartyStatusResponseType} from '../../party/PartyStatus/PartyStatusResponseType.js';
import {PartyStatusInputType} from '../../party/PartyStatus/PartyStatusInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyStatus = {
  type: PartyStatusResponseType,
  description: 'mutation for ofbiz createPartyStatus method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyStatuss/add?`, null, req);
  }
};
export {createPartyStatus};


const updatePartyStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyStatus method',
  args:{partyStatusToBeUpdated: {type: PartyStatusInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyStatuss/${args.nullVal}?`, args.partyStatusToBeUpdated, req);
  }
};
export {updatePartyStatus};


const deletePartyStatusByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyStatusByIdUpdated method',
  args:{partyStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyStatuss/${args.partyStatusId}?`, null, req);
  }
};
export {deletePartyStatusByIdUpdated};
