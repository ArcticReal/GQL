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
import {PartyClassificationTypeInputType} from '../../party/PartyClassificationType/PartyClassificationTypeInputType.js';
import {PartyClassificationTypeResponseType} from '../../party/PartyClassificationType/PartyClassificationTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyClassificationType = {
  type: PartyClassificationTypeResponseType,
  description: 'mutation for ofbiz createPartyClassificationType method',
  args:{partyClassificationTypeToBeAdded: {type: PartyClassificationTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyClassificationTypes/add?`, args.partyClassificationTypeToBeAdded, req);
  }
};
export {createPartyClassificationType};


const updatePartyClassificationType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyClassificationType method',
  args:{partyClassificationTypeToBeUpdated: {type: PartyClassificationTypeInputType},partyClassificationTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyClassificationTypes/${args.partyClassificationTypeId}?`, args.partyClassificationTypeToBeUpdated, req);
  }
};
export {updatePartyClassificationType};


const deletePartyClassificationTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyClassificationTypeByIdUpdated method',
  args:{partyClassificationTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyClassificationTypes/${args.partyClassificationTypeId}?`, null, req);
  }
};
export {deletePartyClassificationTypeByIdUpdated};
