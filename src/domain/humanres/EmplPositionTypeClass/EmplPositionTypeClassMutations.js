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
import {EmplPositionTypeClassInputType} from '../../humanres/EmplPositionTypeClass/EmplPositionTypeClassInputType.js';
import {EmplPositionTypeClassResponseType} from '../../humanres/EmplPositionTypeClass/EmplPositionTypeClassResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createEmplPositionTypeClass = {
  type: EmplPositionTypeClassResponseType,
  description: 'mutation for ofbiz createEmplPositionTypeClass method',
  args:{emplPositionTypeClassToBeAdded: {type: EmplPositionTypeClassInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/emplPosition/emplPositionTypeClasss/add?`, args.emplPositionTypeClassToBeAdded, req);
  }
};
export {createEmplPositionTypeClass};


const deleteEmplPositionTypeClassByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteEmplPositionTypeClassByIdUpdated method',
  args:{emplPositionTypeClassId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/emplPosition/emplPositionTypeClasss/${args.emplPositionTypeClassId}?`, null, req);
  }
};
export {deleteEmplPositionTypeClassByIdUpdated};


const updateEmplPositionTypeClass = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateEmplPositionTypeClass method',
  args:{emplPositionTypeClassToBeUpdated: {type: EmplPositionTypeClassInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/emplPosition/emplPositionTypeClasss/${args.nullVal}?`, args.emplPositionTypeClassToBeUpdated, req);
  }
};
export {updateEmplPositionTypeClass};
