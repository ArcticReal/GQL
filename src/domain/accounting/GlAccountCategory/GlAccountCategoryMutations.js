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
import {GlAccountCategoryInputType} from '../../accounting/GlAccountCategory/GlAccountCategoryInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createGlAccountCategory = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlAccountCategory method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glAccount/glAccountCategorys/add?`, null, req);
  }
};
export {createGlAccountCategory};


const updateGlAccountCategory = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlAccountCategory method',
  args:{glAccountCategoryToBeUpdated: {type: GlAccountCategoryInputType},glAccountCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glAccount/glAccountCategorys/${args.glAccountCategoryId}?`, args.glAccountCategoryToBeUpdated, req);
  }
};
export {updateGlAccountCategory};


const deleteGlAccountCategoryByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlAccountCategoryByIdUpdated method',
  args:{glAccountCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glAccount/glAccountCategorys/${args.glAccountCategoryId}?`, null, req);
  }
};
export {deleteGlAccountCategoryByIdUpdated};
