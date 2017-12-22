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
import {OldPartyTaxInfoInputType} from '../../party/OldPartyTaxInfo/OldPartyTaxInfoInputType.js';
import {OldPartyTaxInfoResponseType} from '../../party/OldPartyTaxInfo/OldPartyTaxInfoResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOldPartyTaxInfo = {
  type: OldPartyTaxInfoResponseType,
  description: 'mutation for ofbiz createOldPartyTaxInfo method',
  args:{oldPartyTaxInfoToBeAdded: {type: OldPartyTaxInfoInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/oldPartyTaxInfos/add?`, args.oldPartyTaxInfoToBeAdded, req);
  }
};
export {createOldPartyTaxInfo};


const updateOldPartyTaxInfo = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOldPartyTaxInfo method',
  args:{oldPartyTaxInfoToBeUpdated: {type: OldPartyTaxInfoInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/oldPartyTaxInfos/${args.nullVal}?`, args.oldPartyTaxInfoToBeUpdated, req);
  }
};
export {updateOldPartyTaxInfo};


const deleteOldPartyTaxInfoByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOldPartyTaxInfoByIdUpdated method',
  args:{oldPartyTaxInfoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/oldPartyTaxInfos/${args.oldPartyTaxInfoId}?`, null, req);
  }
};
export {deleteOldPartyTaxInfoByIdUpdated};
