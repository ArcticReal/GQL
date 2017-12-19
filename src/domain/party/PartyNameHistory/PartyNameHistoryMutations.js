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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createPartyNameHistory = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyNameHistory method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyNameHistorys/add?`, null, req);
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
