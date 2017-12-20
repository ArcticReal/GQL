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
import {JobRequisitionInputType} from '../../humanres/JobRequisition/JobRequisitionInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createJobRequisition = {
  type: ResopnseType,
  description: 'mutation for ofbiz createJobRequisition method',
  args:{jobRequisitionToBeAdded: {type: JobRequisitionInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/jobRequisitions/add?`, args.jobRequisitionToBeAdded, req);
  }
};
export {createJobRequisition};


const updateJobRequisition = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateJobRequisition method',
  args:{jobRequisitionToBeUpdated: {type: JobRequisitionInputType},jobRequisitionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/jobRequisitions/${args.jobRequisitionId}?`, args.jobRequisitionToBeUpdated, req);
  }
};
export {updateJobRequisition};


const deleteJobRequisitionByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteJobRequisitionByIdUpdated method',
  args:{jobRequisitionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/jobRequisitions/${args.jobRequisitionId}?`, null, req);
  }
};
export {deleteJobRequisitionByIdUpdated};
