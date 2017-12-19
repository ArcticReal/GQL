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


const createAccommodationMapType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAccommodationMapType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/accommodationMap/accommodationMapTypes/add?`, null, req);
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
