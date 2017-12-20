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
import {ValidResponsibilityInputType} from '../../humanres/ValidResponsibility/ValidResponsibilityInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createValidResponsibility = {
  type: ResopnseType,
  description: 'mutation for ofbiz createValidResponsibility method',
  args:{validResponsibilityToBeAdded: {type: ValidResponsibilityInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/validResponsibilitys/add?`, args.validResponsibilityToBeAdded, req);
  }
};
export {createValidResponsibility};


const updateValidResponsibility = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateValidResponsibility method',
  args:{validResponsibilityToBeUpdated: {type: ValidResponsibilityInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/validResponsibilitys/${args.nullVal}?`, args.validResponsibilityToBeUpdated, req);
  }
};
export {updateValidResponsibility};


const deleteValidResponsibilityByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteValidResponsibilityByIdUpdated method',
  args:{validResponsibilityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/validResponsibilitys/${args.validResponsibilityId}?`, null, req);
  }
};
export {deleteValidResponsibilityByIdUpdated};
