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
import {PartyIcsAvsOverrideInputType} from '../../party/PartyIcsAvsOverride/PartyIcsAvsOverrideInputType.js';
import {PartyIcsAvsOverrideResponseType} from '../../party/PartyIcsAvsOverride/PartyIcsAvsOverrideResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyIcsAvsOverride = {
  type: PartyIcsAvsOverrideResponseType,
  description: 'mutation for ofbiz createPartyIcsAvsOverride method',
  args:{partyIcsAvsOverrideToBeAdded: {type: PartyIcsAvsOverrideInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyIcsAvsOverrides/add?`, args.partyIcsAvsOverrideToBeAdded, req);
  }
};
export {createPartyIcsAvsOverride};


const updatePartyIcsAvsOverride = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyIcsAvsOverride method',
  args:{partyIcsAvsOverrideToBeUpdated: {type: PartyIcsAvsOverrideInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyIcsAvsOverrides/${args.nullVal}?`, args.partyIcsAvsOverrideToBeUpdated, req);
  }
};
export {updatePartyIcsAvsOverride};


const deletePartyIcsAvsOverrideByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyIcsAvsOverrideByIdUpdated method',
  args:{partyIcsAvsOverrideId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyIcsAvsOverrides/${args.partyIcsAvsOverrideId}?`, null, req);
  }
};
export {deletePartyIcsAvsOverrideByIdUpdated};
