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
import {AccommodationSpotInputType} from '../../accounting/AccommodationSpot/AccommodationSpotInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAccommodationSpot = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAccommodationSpot method',
  args:{accommodationSpotToBeAdded: {type: AccommodationSpotInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/accommodationSpots/add?`, args.accommodationSpotToBeAdded, req);
  }
};
export {createAccommodationSpot};


const updateAccommodationSpot = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateAccommodationSpot method',
  args:{accommodationSpotToBeUpdated: {type: AccommodationSpotInputType},accommodationSpotId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/accommodationSpots/${args.accommodationSpotId}?`, args.accommodationSpotToBeUpdated, req);
  }
};
export {updateAccommodationSpot};


const deleteAccommodationSpotByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteAccommodationSpotByIdUpdated method',
  args:{accommodationSpotId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/accommodationSpots/${args.accommodationSpotId}?`, null, req);
  }
};
export {deleteAccommodationSpotByIdUpdated};
