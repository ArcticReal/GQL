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
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyNameHistory = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPartyNameHistory method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyNameHistorys/add?`, null, req);
  }
};
export {createPartyNameHistory};


const updatePartyNameHistory = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePartyNameHistory method',
  args:{partyNameHistoryToBeUpdated: {type: PartyNameHistoryInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyNameHistorys/${args.nullVal}?`, args.partyNameHistoryToBeUpdated, req);
  }
};
export {updatePartyNameHistory};


const deletePartyNameHistoryByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePartyNameHistoryByIdUpdated method',
  args:{partyNameHistoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyNameHistorys/${args.partyNameHistoryId}?`, null, req);
  }
};
export {deletePartyNameHistoryByIdUpdated};
