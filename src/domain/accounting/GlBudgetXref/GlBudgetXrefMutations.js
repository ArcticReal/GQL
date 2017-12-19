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
import {GlBudgetXrefInputType} from '../../accounting/GlBudgetXref/GlBudgetXrefInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createGlBudgetXref = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlBudgetXref method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/budget/glBudgetXrefs/add?`, null, req);
  }
};
export {createGlBudgetXref};


const deleteGlBudgetXrefByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlBudgetXrefByIdUpdated method',
  args:{glBudgetXrefId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/budget/glBudgetXrefs/${args.glBudgetXrefId}?`, null, req);
  }
};
export {deleteGlBudgetXrefByIdUpdated};


const updateGlBudgetXref = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlBudgetXref method',
  args:{glBudgetXrefToBeUpdated: {type: GlBudgetXrefInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/budget/glBudgetXrefs/${args.nullVal}?`, args.glBudgetXrefToBeUpdated, req);
  }
};
export {updateGlBudgetXref};
