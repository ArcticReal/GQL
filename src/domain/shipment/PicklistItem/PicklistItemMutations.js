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
import {PicklistItemInputType} from '../../shipment/PicklistItem/PicklistItemInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPicklistItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPicklistItem method',
  args:{picklistItemToBeAdded: {type: PicklistItemInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/picklist/picklistItems/add?`, args.picklistItemToBeAdded, req);
  }
};
export {createPicklistItem};


const updatePicklistItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePicklistItem method',
  args:{picklistItemToBeUpdated: {type: PicklistItemInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/picklist/picklistItems/${args.nullVal}?`, args.picklistItemToBeUpdated, req);
  }
};
export {updatePicklistItem};


const deletePicklistItemByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePicklistItemByIdUpdated method',
  args:{picklistItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/picklist/picklistItems/${args.picklistItemId}?`, null, req);
  }
};
export {deletePicklistItemByIdUpdated};
