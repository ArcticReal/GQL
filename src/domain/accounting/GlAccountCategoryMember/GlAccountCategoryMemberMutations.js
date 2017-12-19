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
import {GlAccountCategoryMemberInputType} from '../../accounting/GlAccountCategoryMember/GlAccountCategoryMemberInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createGlAccountCategoryMember = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlAccountCategoryMember method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glAccount/glAccountCategoryMembers/add?`, null, req);
  }
};
export {createGlAccountCategoryMember};


const deleteGlAccountCategoryMemberByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlAccountCategoryMemberByIdUpdated method',
  args:{glAccountCategoryMemberId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glAccount/glAccountCategoryMembers/${args.glAccountCategoryMemberId}?`, null, req);
  }
};
export {deleteGlAccountCategoryMemberByIdUpdated};


const updateGlAccountCategoryMember = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlAccountCategoryMember method',
  args:{glAccountCategoryMemberToBeUpdated: {type: GlAccountCategoryMemberInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glAccount/glAccountCategoryMembers/${args.nullVal}?`, args.glAccountCategoryMemberToBeUpdated, req);
  }
};
export {updateGlAccountCategoryMember};
