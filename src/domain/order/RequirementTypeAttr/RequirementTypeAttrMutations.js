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
import {RequirementTypeAttrInputType} from '../../order/RequirementTypeAttr/RequirementTypeAttrInputType.js';
import {RequirementTypeAttrResponseType} from '../../order/RequirementTypeAttr/RequirementTypeAttrResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createRequirementTypeAttr = {
  type: RequirementTypeAttrResponseType,
  description: 'mutation for ofbiz createRequirementTypeAttr method',
  args:{requirementTypeAttrToBeAdded: {type: RequirementTypeAttrInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/requirement/requirementTypeAttrs/add?`, args.requirementTypeAttrToBeAdded, req);
  }
};
export {createRequirementTypeAttr};


const updateRequirementTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateRequirementTypeAttr method',
  args:{requirementTypeAttrToBeUpdated: {type: RequirementTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/requirement/requirementTypeAttrs/${args.attrName}?`, args.requirementTypeAttrToBeUpdated, req);
  }
};
export {updateRequirementTypeAttr};


const deleteRequirementTypeAttrByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteRequirementTypeAttrByIdUpdated method',
  args:{requirementTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/requirement/requirementTypeAttrs/${args.requirementTypeAttrId}?`, null, req);
  }
};
export {deleteRequirementTypeAttrByIdUpdated};
