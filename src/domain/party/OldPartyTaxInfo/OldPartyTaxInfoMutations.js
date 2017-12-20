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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOldPartyTaxInfo = {
  type: ResopnseType,
  description: 'mutation for ofbiz createOldPartyTaxInfo method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/oldPartyTaxInfos/add?`, null, req);
  }
};
export {createOldPartyTaxInfo};


const updateOldPartyTaxInfo = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateOldPartyTaxInfo method',
  args:{oldPartyTaxInfoToBeUpdated: {type: OldPartyTaxInfoInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/oldPartyTaxInfos/${args.nullVal}?`, args.oldPartyTaxInfoToBeUpdated, req);
  }
};
export {updateOldPartyTaxInfo};


const deleteOldPartyTaxInfoByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteOldPartyTaxInfoByIdUpdated method',
  args:{oldPartyTaxInfoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/oldPartyTaxInfos/${args.oldPartyTaxInfoId}?`, null, req);
  }
};
export {deleteOldPartyTaxInfoByIdUpdated};
