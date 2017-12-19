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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';


const createAccommodationSpot = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAccommodationSpot method',
  args:{accommodationSpotId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},numberOfSpaces: {type: GraphQLInt},description: {type: GraphQLString},accommodationClassId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReservations/createAccommodationSpot?accommodationSpotId=${args.accommodationSpotId}fixedAssetId=${args.fixedAssetId}numberOfSpaces=${args.numberOfSpaces}description=${args.description}accommodationClassId=${args.accommodationClassId}`, null, req);
  }
};
export {createAccommodationSpot};


const deleteAccommodationSpot = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAccommodationSpot method',
  args:{accommodationSpotId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReservations/deleteAccommodationSpot?accommodationSpotId=${args.accommodationSpotId}`, null, req);
  }
};
export {deleteAccommodationSpot};


const updateAccommodationSpot = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAccommodationSpot method',
  args:{accommodationSpotId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},numberOfSpaces: {type: GraphQLInt},description: {type: GraphQLString},accommodationClassId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReservations/updateAccommodationSpot?accommodationSpotId=${args.accommodationSpotId}fixedAssetId=${args.fixedAssetId}numberOfSpaces=${args.numberOfSpaces}description=${args.description}accommodationClassId=${args.accommodationClassId}`, null, req);
  }
};
export {updateAccommodationSpot};
