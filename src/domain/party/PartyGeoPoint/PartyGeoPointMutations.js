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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createPartyGeoPoint = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyGeoPoint method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyGeoPoints/add?`, null, req);
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
