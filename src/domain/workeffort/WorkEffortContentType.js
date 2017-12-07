
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkEffortType} from '../workeffort/WorkEffortType.js';
import {ContentType} from '../content/ContentType.js';
import {WorkEffortContentTypeType} from '../workeffort/WorkEffortContentTypeType.js';


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
    