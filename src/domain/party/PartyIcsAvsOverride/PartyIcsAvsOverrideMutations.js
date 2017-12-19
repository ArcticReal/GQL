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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createPartyIcsAvsOverride = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyIcsAvsOverride method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyIcsAvsOverrides/add?`, null, req);
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
