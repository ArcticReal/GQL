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
import {EmplPositionResponsibilityInputType} from '../../humanres/EmplPositionResponsibility/EmplPositionResponsibilityInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createEmplPositionResponsibility = {
  type: GraphQLString,
  description: 'mutation for ofbiz createEmplPositionResponsibility method',
  args:{emplPositionResponsibilityToBeAdded: {type: EmplPositionResponsibilityInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/emplPosition/emplPositionResponsibilitys/add?`, args.emplPositionResponsibilityToBeAdded, req);
  }
};
export {createEmplPositionResponsibility};


const deleteEmplPositionResponsibilityByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteEmplPositionResponsibilityByIdUpdated method',
  args:{emplPositionResponsibilityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/emplPosition/emplPositionResponsibilitys/${args.emplPositionResponsibilityId}?`, null, req);
  }
};
export {deleteEmplPositionResponsibilityByIdUpdated};


const updateEmplPositionResponsibility = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateEmplPositionResponsibility method',
  args:{emplPositionResponsibilityToBeUpdated: {type: EmplPositionResponsibilityInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/emplPosition/emplPositionResponsibilitys/${args.nullVal}?`, args.emplPositionResponsibilityToBeUpdated, req);
  }
};
export {updateEmplPositionResponsibility};
