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
import {PartyResumeInputType} from '../../humanres/PartyResume/PartyResumeInputType.js';
import {PartyResumeResponseType} from '../../humanres/PartyResume/PartyResumeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyResume = {
  type: PartyResumeResponseType,
  description: 'mutation for ofbiz createPartyResume method',
  args:{partyResumeToBeAdded: {type: PartyResumeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/partyResumes/add?`, args.partyResumeToBeAdded, req);
  }
};
export {createPartyResume};


const deletePartyResumeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyResumeByIdUpdated method',
  args:{partyResumeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/partyResumes/${args.partyResumeId}?`, null, req);
  }
};
export {deletePartyResumeByIdUpdated};


const updatePartyResume = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyResume method',
  args:{partyResumeToBeUpdated: {type: PartyResumeInputType},resumeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/partyResumes/${args.resumeId}?`, args.partyResumeToBeUpdated, req);
  }
};
export {updatePartyResume};
