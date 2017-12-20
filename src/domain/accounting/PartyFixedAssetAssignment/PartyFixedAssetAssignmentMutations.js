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
import {PartyFixedAssetAssignmentInputType} from '../../accounting/PartyFixedAssetAssignment/PartyFixedAssetAssignmentInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyFixedAssetAssignment = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPartyFixedAssetAssignment method',
  args:{partyFixedAssetAssignmentToBeAdded: {type: PartyFixedAssetAssignmentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/fixedAsset/partyFixedAssetAssignments/add?`, args.partyFixedAssetAssignmentToBeAdded, req);
  }
};
export {createPartyFixedAssetAssignment};


const deletePartyFixedAssetAssignmentByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePartyFixedAssetAssignmentByIdUpdated method',
  args:{partyFixedAssetAssignmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/fixedAsset/partyFixedAssetAssignments/${args.partyFixedAssetAssignmentId}?`, null, req);
  }
};
export {deletePartyFixedAssetAssignmentByIdUpdated};


const updatePartyFixedAssetAssignment = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePartyFixedAssetAssignment method',
  args:{partyFixedAssetAssignmentToBeUpdated: {type: PartyFixedAssetAssignmentInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/fixedAsset/partyFixedAssetAssignments/${args.roleTypeId}?`, args.partyFixedAssetAssignmentToBeUpdated, req);
  }
};
export {updatePartyFixedAssetAssignment};
