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
import {PicklistItemResponseType} from '../../shipment/PicklistItem/PicklistItemResponseType.js';
import {PicklistItemInputType} from '../../shipment/PicklistItem/PicklistItemInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPicklistItem = {
  type: PicklistItemResponseType,
  description: 'mutation for ofbiz createPicklistItem method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/picklist/picklistItems/add?`, null, req);
  }
};
export {createPicklistItem};


const updatePicklistItem = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePicklistItem method',
  args:{picklistItemToBeUpdated: {type: PicklistItemInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/picklist/picklistItems/${args.nullVal}?`, args.picklistItemToBeUpdated, req);
  }
};
export {updatePicklistItem};


const deletePicklistItemByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePicklistItemByIdUpdated method',
  args:{picklistItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/picklist/picklistItems/${args.picklistItemId}?`, null, req);
  }
};
export {deletePicklistItemByIdUpdated};
