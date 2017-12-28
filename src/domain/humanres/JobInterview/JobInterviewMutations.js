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
import {JobInterviewResponseType} from '../../humanres/JobInterview/JobInterviewResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createJobInterview = {
  type: JobInterviewResponseType,
  description: 'mutation for ofbiz createJobInterview method',
  args:{jobInterviewToBeAdded: {type: JobInterviewInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/jobInterviews/add?`, args.jobInterviewToBeAdded, req);
  }
};
export {createJobInterview};


const updateJobInterview = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateJobInterview method',
  args:{jobInterviewToBeUpdated: {type: JobInterviewInputType},jobInterviewId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/jobInterviews/${args.jobInterviewId}?`, args.jobInterviewToBeUpdated, req);
  }
};
export {updateJobInterview};


const deleteJobInterviewByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteJobInterviewByIdUpdated method',
  args:{jobInterviewId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/jobInterviews/${args.jobInterviewId}?`, null, req);
  }
};
export {deleteJobInterviewByIdUpdated};
