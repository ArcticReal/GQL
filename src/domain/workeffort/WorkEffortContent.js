
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

import {WorkEffortType} from '../workeffort/WorkEffort.js';
import {ContentType} from '../content/Content.js';
import {WorkEffortContentTypeType} from '../workeffort/WorkEffortContentType.js';


const WorkEffortContentType = new GraphQLObjectType({
  name: 'WorkEffortContentType',
  description: 'Type for WorkEffortContent in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortContent, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${workEffortContent.workEffortId}`)
    },
    fromDate: {type: GraphQLString},
    workEffortContentType: {
      type: WorkEffortContentTypeType,
      args : {workEffortContentTypeId: {type: GraphQLString}},
      resolve: (workEffortContent, args, {loaders}) => loaders.ofbiz.load(`workEffortContentTypes/find?workEffortContentTypeId=${workEffortContent.workEffortContentTypeId}`)
    },
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (workEffortContent, args, {loaders}) => loaders.ofbiz.load(`contents/find?contentId=${workEffortContent.contentId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {WorkEffortContentType};
    




const WorkEffortContentInputType = new GraphQLInputObjectType({
  name: 'WorkEffortContentInputType',
  description: 'input type for WorkEffortContent in workeffort',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    workEffortContentTypeId: {type: GraphQLString},
    contentId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {WorkEffortContentInputType};
    