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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyClassificationType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPartyClassificationType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyClassificationTypes/add?`, null, req);
  }
};
export {createPartyClassificationType};


const updatePartyClassificationType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePartyClassificationType method',
  args:{partyClassificationTypeToBeUpdated: {type: PartyClassificationTypeInputType},partyClassificationTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyClassificationTypes/${args.partyClassificationTypeId}?`, args.partyClassificationTypeToBeUpdated, req);
  }
};
export {updatePartyClassificationType};


const deletePartyClassificationTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePartyClassificationTypeByIdUpdated method',
  args:{partyClassificationTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyClassificationTypes/${args.partyClassificationTypeId}?`, null, req);
  }
};
export {deletePartyClassificationTypeByIdUpdated};
