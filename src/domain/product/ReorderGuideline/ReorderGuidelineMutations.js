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
import {ReorderGuidelineInputType} from '../../product/ReorderGuideline/ReorderGuidelineInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createReorderGuideline = {
  type: GraphQLString,
  description: 'mutation for ofbiz createReorderGuideline method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/reorderGuidelines/add?`, null, req);
  }
};
export {createReorderGuideline};


const updateReorderGuideline = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateReorderGuideline method',
  args:{reorderGuidelineToBeUpdated: {type: ReorderGuidelineInputType},reorderGuidelineId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/reorderGuidelines/${args.reorderGuidelineId}?`, args.reorderGuidelineToBeUpdated, req);
  }
};
export {updateReorderGuideline};


const deleteReorderGuidelineByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteReorderGuidelineByIdUpdated method',
  args:{reorderGuidelineId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/reorderGuidelines/${args.reorderGuidelineId}?`, null, req);
  }
};
export {deleteReorderGuidelineByIdUpdated};
