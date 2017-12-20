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
import {PartyContentTypeInputType} from '../../party/PartyContentType/PartyContentTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyContentType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPartyContentType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyContentTypes/add?`, null, req);
  }
};
export {createPartyContentType};


const updatePartyContentType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePartyContentType method',
  args:{partyContentTypeToBeUpdated: {type: PartyContentTypeInputType},partyContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyContentTypes/${args.partyContentTypeId}?`, args.partyContentTypeToBeUpdated, req);
  }
};
export {updatePartyContentType};


const deletePartyContentTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePartyContentTypeByIdUpdated method',
  args:{partyContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyContentTypes/${args.partyContentTypeId}?`, null, req);
  }
};
export {deletePartyContentTypeByIdUpdated};
