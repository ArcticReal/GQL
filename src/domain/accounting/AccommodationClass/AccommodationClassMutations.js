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
import {AccommodationClassInputType} from '../../accounting/AccommodationClass/AccommodationClassInputType.js';
import {AccommodationClassResponseType} from '../../accounting/AccommodationClass/AccommodationClassResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAccommodationClass = {
  type: AccommodationClassResponseType,
  description: 'mutation for ofbiz createAccommodationClass method',
  args:{accommodationClassToBeAdded: {type: AccommodationClassInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/accommodationClasss/add?`, args.accommodationClassToBeAdded, req);
  }
};
export {createAccommodationClass};


const updateAccommodationClass = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAccommodationClass method',
  args:{accommodationClassToBeUpdated: {type: AccommodationClassInputType},accommodationClassId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/accommodationClasss/${args.accommodationClassId}?`, args.accommodationClassToBeUpdated, req);
  }
};
export {updateAccommodationClass};


const deleteAccommodationClassByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAccommodationClassByIdUpdated method',
  args:{accommodationClassId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/accommodationClasss/${args.accommodationClassId}?`, null, req);
  }
};
export {deleteAccommodationClassByIdUpdated};
