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
import {PicklistInputType} from '../../shipment/Picklist/PicklistInputType.js';
import {PicklistResponseType} from '../../shipment/Picklist/PicklistResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPicklist = {
  type: PicklistResponseType,
  description: 'mutation for ofbiz createPicklist method',
  args:{picklistToBeAdded: {type: PicklistInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/picklists/add?`, args.picklistToBeAdded, req);
  }
};
export {createPicklist};


const updatePicklist = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePicklist method',
  args:{picklistToBeUpdated: {type: PicklistInputType},picklistId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/picklists/${args.picklistId}?`, args.picklistToBeUpdated, req);
  }
};
export {updatePicklist};


const deletePicklistByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePicklistByIdUpdated method',
  args:{picklistId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/picklists/${args.picklistId}?`, null, req);
  }
};
export {deletePicklistByIdUpdated};
