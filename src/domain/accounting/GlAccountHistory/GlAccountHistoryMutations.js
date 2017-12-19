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
import {GlAccountHistoryInputType} from '../../accounting/GlAccountHistory/GlAccountHistoryInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createGlAccountHistory = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlAccountHistory method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glAccount/glAccountHistorys/add?`, null, req);
  }
};
export {createGlAccountHistory};


const deleteGlAccountHistoryByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlAccountHistoryByIdUpdated method',
  args:{glAccountHistoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glAccount/glAccountHistorys/${args.glAccountHistoryId}?`, null, req);
  }
};
export {deleteGlAccountHistoryByIdUpdated};


const updateGlAccountHistory = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlAccountHistory method',
  args:{glAccountHistoryToBeUpdated: {type: GlAccountHistoryInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glAccount/glAccountHistorys/${args.nullVal}?`, args.glAccountHistoryToBeUpdated, req);
  }
};
export {updateGlAccountHistory};
