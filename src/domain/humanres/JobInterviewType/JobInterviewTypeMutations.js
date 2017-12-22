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
import {JobInterviewTypeResponseType} from '../../humanres/JobInterviewType/JobInterviewTypeResponseType.js';
import {JobInterviewTypeInputType} from '../../humanres/JobInterviewType/JobInterviewTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createJobInterviewType = {
  type: JobInterviewTypeResponseType,
  description: 'mutation for ofbiz createJobInterviewType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/jobInterview/jobInterviewTypes/add?`, null, req);
  }
};
export {createJobInterviewType};


const updateJobInterviewType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateJobInterviewType method',
  args:{jobInterviewTypeToBeUpdated: {type: JobInterviewTypeInputType},jobInterviewTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/jobInterview/jobInterviewTypes/${args.jobInterviewTypeId}?`, args.jobInterviewTypeToBeUpdated, req);
  }
};
export {updateJobInterviewType};


const deleteJobInterviewTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteJobInterviewTypeByIdUpdated method',
  args:{jobInterviewTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/jobInterview/jobInterviewTypes/${args.jobInterviewTypeId}?`, null, req);
  }
};
export {deleteJobInterviewTypeByIdUpdated};
