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
import {RequirementAttributeResponseType} from '../../order/RequirementAttribute/RequirementAttributeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createRequirementAttribute = {
  type: RequirementAttributeResponseType,
  description: 'mutation for ofbiz createRequirementAttribute method',
  args:{requirementAttributeToBeAdded: {type: RequirementAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/requirement/requirementAttributes/add?`, args.requirementAttributeToBeAdded, req);
  }
};
export {createRequirementAttribute};


const updateRequirementAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateRequirementAttribute method',
  args:{requirementAttributeToBeUpdated: {type: RequirementAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/requirement/requirementAttributes/${args.attrName}?`, args.requirementAttributeToBeUpdated, req);
  }
};
export {updateRequirementAttribute};


const deleteRequirementAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteRequirementAttributeByIdUpdated method',
  args:{requirementAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/requirement/requirementAttributes/${args.requirementAttributeId}?`, null, req);
  }
};
export {deleteRequirementAttributeByIdUpdated};
