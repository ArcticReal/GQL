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
import {PerformanceNoteInputType} from '../../humanres/PerformanceNote/PerformanceNoteInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPerformanceNote = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPerformanceNote method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/performanceNotes/add?`, null, req);
  }
};
export {createPerformanceNote};


const deletePerformanceNoteByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePerformanceNoteByIdUpdated method',
  args:{performanceNoteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/performanceNotes/${args.performanceNoteId}?`, null, req);
  }
};
export {deletePerformanceNoteByIdUpdated};


const updatePerformanceNote = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePerformanceNote method',
  args:{performanceNoteToBeUpdated: {type: PerformanceNoteInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/performanceNotes/${args.roleTypeId}?`, args.performanceNoteToBeUpdated, req);
  }
};
export {updatePerformanceNote};
