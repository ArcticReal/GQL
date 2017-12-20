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
import {PartyAcctgPreferenceInputType} from '../../accounting/PartyAcctgPreference/PartyAcctgPreferenceInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyAcctgPreference = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPartyAcctgPreference method',
  args:{partyAcctgPreferenceToBeAdded: {type: PartyAcctgPreferenceInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/partyAcctgPreferences/add?`, args.partyAcctgPreferenceToBeAdded, req);
  }
};
export {createPartyAcctgPreference};


const updatePartyAcctgPreference = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePartyAcctgPreference method',
  args:{partyAcctgPreferenceToBeUpdated: {type: PartyAcctgPreferenceInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/partyAcctgPreferences/${args.nullVal}?`, args.partyAcctgPreferenceToBeUpdated, req);
  }
};
export {updatePartyAcctgPreference};


const deletePartyAcctgPreferenceByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePartyAcctgPreferenceByIdUpdated method',
  args:{partyAcctgPreferenceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/partyAcctgPreferences/${args.partyAcctgPreferenceId}?`, null, req);
  }
};
export {deletePartyAcctgPreferenceByIdUpdated};
