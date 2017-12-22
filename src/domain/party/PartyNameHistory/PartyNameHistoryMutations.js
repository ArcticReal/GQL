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
import {PartyNameHistoryInputType} from '../../party/PartyNameHistory/PartyNameHistoryInputType.js';
import {PartyNameHistoryResponseType} from '../../party/PartyNameHistory/PartyNameHistoryResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyNameHistory = {
  type: PartyNameHistoryResponseType,
  description: 'mutation for ofbiz createPartyNameHistory method',
  args:{partyNameHistoryToBeAdded: {type: PartyNameHistoryInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyNameHistorys/add?`, args.partyNameHistoryToBeAdded, req);
  }
};
export {createPartyNameHistory};


const updatePartyNameHistory = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyNameHistory method',
  args:{partyNameHistoryToBeUpdated: {type: PartyNameHistoryInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyNameHistorys/${args.nullVal}?`, args.partyNameHistoryToBeUpdated, req);
  }
};
export {updatePartyNameHistory};


const deletePartyNameHistoryByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyNameHistoryByIdUpdated method',
  args:{partyNameHistoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyNameHistorys/${args.partyNameHistoryId}?`, null, req);
  }
};
export {deletePartyNameHistoryByIdUpdated};
