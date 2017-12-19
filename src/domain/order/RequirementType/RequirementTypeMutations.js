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
import {RequirementTypeInputType} from '../../order/RequirementType/RequirementTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createRequirementType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createRequirementType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/requirement/requirementTypes/add?`, null, req);
  }
};
export {createRequirementType};


const updateRequirementType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateRequirementType method',
  args:{requirementTypeToBeUpdated: {type: RequirementTypeInputType},requirementTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/requirement/requirementTypes/${args.requirementTypeId}?`, args.requirementTypeToBeUpdated, req);
  }
};
export {updateRequirementType};


const deleteRequirementTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteRequirementTypeByIdUpdated method',
  args:{requirementTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/requirement/requirementTypes/${args.requirementTypeId}?`, null, req);
  }
};
export {deleteRequirementTypeByIdUpdated};
