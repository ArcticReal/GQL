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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAccommodationMapType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAccommodationMapType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/accommodationMap/accommodationMapTypes/add?`, null, req);
  }
};
export {createAccommodationMapType};


const updateAccommodationMapType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateAccommodationMapType method',
  args:{accommodationMapTypeToBeUpdated: {type: AccommodationMapTypeInputType},accommodationMapTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/accommodationMap/accommodationMapTypes/${args.accommodationMapTypeId}?`, args.accommodationMapTypeToBeUpdated, req);
  }
};
export {updateAccommodationMapType};


const deleteAccommodationMapTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteAccommodationMapTypeByIdUpdated method',
  args:{accommodationMapTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/accommodationMap/accommodationMapTypes/${args.accommodationMapTypeId}?`, null, req);
  }
};
export {deleteAccommodationMapTypeByIdUpdated};
