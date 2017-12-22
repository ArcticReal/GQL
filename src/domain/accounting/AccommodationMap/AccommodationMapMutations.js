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
import {AccommodationMapInputType} from '../../accounting/AccommodationMap/AccommodationMapInputType.js';
import {AccommodationMapResponseType} from '../../accounting/AccommodationMap/AccommodationMapResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAccommodationMap = {
  type: AccommodationMapResponseType,
  description: 'mutation for ofbiz createAccommodationMap method',
  args:{accommodationMapToBeAdded: {type: AccommodationMapInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/accommodationMaps/add?`, args.accommodationMapToBeAdded, req);
  }
};
export {createAccommodationMap};


const updateAccommodationMap = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAccommodationMap method',
  args:{accommodationMapToBeUpdated: {type: AccommodationMapInputType},accommodationMapId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/accommodationMaps/${args.accommodationMapId}?`, args.accommodationMapToBeUpdated, req);
  }
};
export {updateAccommodationMap};


const deleteAccommodationMapByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAccommodationMapByIdUpdated method',
  args:{accommodationMapId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/accommodationMaps/${args.accommodationMapId}?`, null, req);
  }
};
export {deleteAccommodationMapByIdUpdated};
