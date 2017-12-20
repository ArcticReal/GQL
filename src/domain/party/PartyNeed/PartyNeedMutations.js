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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyNeed = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPartyNeed method',
  args:{partyNeedToBeAdded: {type: PartyNeedInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyNeeds/add?`, args.partyNeedToBeAdded, req);
  }
};
export {createPartyNeed};


const updatePartyNeed = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePartyNeed method',
  args:{partyNeedToBeUpdated: {type: PartyNeedInputType},partyNeedId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyNeeds/${args.partyNeedId}?`, args.partyNeedToBeUpdated, req);
  }
};
export {updatePartyNeed};


const deletePartyNeedByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePartyNeedByIdUpdated method',
  args:{partyNeedId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyNeeds/${args.partyNeedId}?`, null, req);
  }
};
export {deletePartyNeedByIdUpdated};
