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
import {PartyGeoPointInputType} from '../../party/PartyGeoPoint/PartyGeoPointInputType.js';
import {PartyGeoPointResponseType} from '../../party/PartyGeoPoint/PartyGeoPointResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyGeoPoint = {
  type: PartyGeoPointResponseType,
  description: 'mutation for ofbiz createPartyGeoPoint method',
  args:{partyGeoPointToBeAdded: {type: PartyGeoPointInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyGeoPoints/add?`, args.partyGeoPointToBeAdded, req);
  }
};
export {createPartyGeoPoint};


const updatePartyGeoPoint = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyGeoPoint method',
  args:{partyGeoPointToBeUpdated: {type: PartyGeoPointInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyGeoPoints/${args.nullVal}?`, args.partyGeoPointToBeUpdated, req);
  }
};
export {updatePartyGeoPoint};


const deletePartyGeoPointByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyGeoPointByIdUpdated method',
  args:{partyGeoPointId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyGeoPoints/${args.partyGeoPointId}?`, null, req);
  }
};
export {deletePartyGeoPointByIdUpdated};
