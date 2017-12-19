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
import {GlAccountCategoryTypeInputType} from '../../accounting/GlAccountCategoryType/GlAccountCategoryTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createGlAccountCategoryType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlAccountCategoryType method',
  args:{glAccountCategoryTypeToBeAdded: {type: GlAccountCategoryTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glAccount/glAccountCategoryTypes/add?`, args.glAccountCategoryTypeToBeAdded, req);
  }
};
export {createGlAccountCategoryType};


const updateGlAccountCategoryType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlAccountCategoryType method',
  args:{glAccountCategoryTypeToBeUpdated: {type: GlAccountCategoryTypeInputType},glAccountCategoryTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glAccount/glAccountCategoryTypes/${args.glAccountCategoryTypeId}?`, args.glAccountCategoryTypeToBeUpdated, req);
  }
};
export {updateGlAccountCategoryType};


const deleteGlAccountCategoryTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlAccountCategoryTypeByIdUpdated method',
  args:{glAccountCategoryTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glAccount/glAccountCategoryTypes/${args.glAccountCategoryTypeId}?`, null, req);
  }
};
export {deleteGlAccountCategoryTypeByIdUpdated};
