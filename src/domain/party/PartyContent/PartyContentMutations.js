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
import {PartyContentInputType} from '../../party/PartyContent/PartyContentInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyContent = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPartyContent method',
  args:{partyContentToBeAdded: {type: PartyContentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyContents/add?`, args.partyContentToBeAdded, req);
  }
};
export {createPartyContent};


const updatePartyContent = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePartyContent method',
  args:{partyContentToBeUpdated: {type: PartyContentInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyContents/${args.nullVal}?`, args.partyContentToBeUpdated, req);
  }
};
export {updatePartyContent};


const deletePartyContentByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePartyContentByIdUpdated method',
  args:{partyContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyContents/${args.partyContentId}?`, null, req);
  }
};
export {deletePartyContentByIdUpdated};
