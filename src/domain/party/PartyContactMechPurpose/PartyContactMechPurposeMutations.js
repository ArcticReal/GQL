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
import {PartyContactMechPurposeInputType} from '../../party/PartyContactMechPurpose/PartyContactMechPurposeInputType.js';
import {PartyContactMechPurposeResponseType} from '../../party/PartyContactMechPurpose/PartyContactMechPurposeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyContactMechPurpose = {
  type: PartyContactMechPurposeResponseType,
  description: 'mutation for ofbiz createPartyContactMechPurpose method',
  args:{partyContactMechPurposeToBeAdded: {type: PartyContactMechPurposeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/contactMech/partyContactMechPurposes/add?`, args.partyContactMechPurposeToBeAdded, req);
  }
};
export {createPartyContactMechPurpose};


const updatePartyContactMechPurpose = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyContactMechPurpose method',
  args:{partyContactMechPurposeToBeUpdated: {type: PartyContactMechPurposeInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/contactMech/partyContactMechPurposes/${args.nullVal}?`, args.partyContactMechPurposeToBeUpdated, req);
  }
};
export {updatePartyContactMechPurpose};


const deletePartyContactMechPurposeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyContactMechPurposeByIdUpdated method',
  args:{partyContactMechPurposeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/contactMech/partyContactMechPurposes/${args.partyContactMechPurposeId}?`, null, req);
  }
};
export {deletePartyContactMechPurposeByIdUpdated};
