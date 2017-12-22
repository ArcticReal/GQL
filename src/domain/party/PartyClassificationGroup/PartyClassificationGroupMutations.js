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
import {PartyClassificationGroupInputType} from '../../party/PartyClassificationGroup/PartyClassificationGroupInputType.js';
import {PartyClassificationGroupResponseType} from '../../party/PartyClassificationGroup/PartyClassificationGroupResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyClassificationGroup = {
  type: PartyClassificationGroupResponseType,
  description: 'mutation for ofbiz createPartyClassificationGroup method',
  args:{partyClassificationGroupToBeAdded: {type: PartyClassificationGroupInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyClassificationGroups/add?`, args.partyClassificationGroupToBeAdded, req);
  }
};
export {createPartyClassificationGroup};


const updatePartyClassificationGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyClassificationGroup method',
  args:{partyClassificationGroupToBeUpdated: {type: PartyClassificationGroupInputType},partyClassificationGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyClassificationGroups/${args.partyClassificationGroupId}?`, args.partyClassificationGroupToBeUpdated, req);
  }
};
export {updatePartyClassificationGroup};


const deletePartyClassificationGroupByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyClassificationGroupByIdUpdated method',
  args:{partyClassificationGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyClassificationGroups/${args.partyClassificationGroupId}?`, null, req);
  }
};
export {deletePartyClassificationGroupByIdUpdated};
