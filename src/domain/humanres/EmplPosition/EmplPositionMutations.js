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
import {EmplPositionInputType} from '../../humanres/EmplPosition/EmplPositionInputType.js';
import {EmplPositionResponseType} from '../../humanres/EmplPosition/EmplPositionResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createEmplPosition = {
  type: EmplPositionResponseType,
  description: 'mutation for ofbiz createEmplPosition method',
  args:{emplPositionToBeAdded: {type: EmplPositionInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/emplPositions/add?`, args.emplPositionToBeAdded, req);
  }
};
export {createEmplPosition};


const updateEmplPosition = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateEmplPosition method',
  args:{emplPositionToBeUpdated: {type: EmplPositionInputType},emplPositionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/emplPositions/${args.emplPositionId}?`, args.emplPositionToBeUpdated, req);
  }
};
export {updateEmplPosition};


const deleteEmplPositionByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteEmplPositionByIdUpdated method',
  args:{emplPositionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/emplPositions/${args.emplPositionId}?`, null, req);
  }
};
export {deleteEmplPositionByIdUpdated};
