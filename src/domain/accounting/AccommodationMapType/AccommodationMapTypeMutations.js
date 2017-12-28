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
import {AccommodationMapTypeInputType} from '../../accounting/AccommodationMapType/AccommodationMapTypeInputType.js';
import {AccommodationMapTypeResponseType} from '../../accounting/AccommodationMapType/AccommodationMapTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAccommodationMapType = {
  type: AccommodationMapTypeResponseType,
  description: 'mutation for ofbiz createAccommodationMapType method',
  args:{accommodationMapTypeToBeAdded: {type: AccommodationMapTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/accommodationMap/accommodationMapTypes/add?`, args.accommodationMapTypeToBeAdded, req);
  }
};
export {createAccommodationMapType};


const updateAccommodationMapType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAccommodationMapType method',
  args:{accommodationMapTypeToBeUpdated: {type: AccommodationMapTypeInputType},accommodationMapTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/accommodationMap/accommodationMapTypes/${args.accommodationMapTypeId}?`, args.accommodationMapTypeToBeUpdated, req);
  }
};
export {updateAccommodationMapType};


const deleteAccommodationMapTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAccommodationMapTypeByIdUpdated method',
  args:{accommodationMapTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/accommodationMap/accommodationMapTypes/${args.accommodationMapTypeId}?`, null, req);
  }
};
export {deleteAccommodationMapTypeByIdUpdated};
