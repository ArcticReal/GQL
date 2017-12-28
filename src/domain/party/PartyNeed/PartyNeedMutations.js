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
import {PartyNeedInputType} from '../../party/PartyNeed/PartyNeedInputType.js';
import {PartyNeedResponseType} from '../../party/PartyNeed/PartyNeedResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyNeed = {
  type: PartyNeedResponseType,
  description: 'mutation for ofbiz createPartyNeed method',
  args:{partyNeedToBeAdded: {type: PartyNeedInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyNeeds/add?`, args.partyNeedToBeAdded, req);
  }
};
export {createPartyNeed};


const updatePartyNeed = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyNeed method',
  args:{partyNeedToBeUpdated: {type: PartyNeedInputType},partyNeedId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyNeeds/${args.partyNeedId}?`, args.partyNeedToBeUpdated, req);
  }
};
export {updatePartyNeed};


const deletePartyNeedByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyNeedByIdUpdated method',
  args:{partyNeedId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyNeeds/${args.partyNeedId}?`, null, req);
  }
};
export {deletePartyNeedByIdUpdated};
