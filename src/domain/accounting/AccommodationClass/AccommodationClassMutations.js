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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createAccommodationClass = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAccommodationClass method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/accommodationClasss/add?`, null, req);
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
