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
import {PartyNoteResponseType} from '../../party/PartyNote/PartyNoteResponseType.js';
import {PartyNoteInputType} from '../../party/PartyNote/PartyNoteInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyNote = {
  type: PartyNoteResponseType,
  description: 'mutation for ofbiz createPartyNote method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyNotes/add?`, null, req);
  }
};
export {createPartyNote};


const updatePartyNote = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyNote method',
  args:{partyNoteToBeUpdated: {type: PartyNoteInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyNotes/${args.nullVal}?`, args.partyNoteToBeUpdated, req);
  }
};
export {updatePartyNote};


const deletePartyNoteByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyNoteByIdUpdated method',
  args:{partyNoteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyNotes/${args.partyNoteId}?`, null, req);
  }
};
export {deletePartyNoteByIdUpdated};
