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
import {RequirementAttributeInputType} from '../../order/RequirementAttribute/RequirementAttributeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createRequirementAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz createRequirementAttribute method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/requirement/requirementAttributes/add?`, null, req);
  }
};
export {createRequirementAttribute};


const updateRequirementAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateRequirementAttribute method',
  args:{requirementAttributeToBeUpdated: {type: RequirementAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/requirement/requirementAttributes/${args.attrName}?`, args.requirementAttributeToBeUpdated, req);
  }
};
export {updateRequirementAttribute};


const deleteRequirementAttributeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteRequirementAttributeByIdUpdated method',
  args:{requirementAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/requirement/requirementAttributes/${args.requirementAttributeId}?`, null, req);
  }
};
export {deleteRequirementAttributeByIdUpdated};
