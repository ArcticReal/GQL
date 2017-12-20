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
import {JobInterviewInputType} from '../../humanres/JobInterview/JobInterviewInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createJobInterview = {
  type: ResopnseType,
  description: 'mutation for ofbiz createJobInterview method',
  args:{jobInterviewToBeAdded: {type: JobInterviewInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/jobInterviews/add?`, args.jobInterviewToBeAdded, req);
  }
};
export {createJobInterview};


const updateJobInterview = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateJobInterview method',
  args:{jobInterviewToBeUpdated: {type: JobInterviewInputType},jobInterviewId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/jobInterviews/${args.jobInterviewId}?`, args.jobInterviewToBeUpdated, req);
  }
};
export {updateJobInterview};


const deleteJobInterviewByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteJobInterviewByIdUpdated method',
  args:{jobInterviewId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/jobInterviews/${args.jobInterviewId}?`, null, req);
  }
};
export {deleteJobInterviewByIdUpdated};
