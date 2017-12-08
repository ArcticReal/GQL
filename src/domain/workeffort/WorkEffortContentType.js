
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

import {WorkEffortContentType} from '../workeffort/WorkEffortContent.js';


const WorkEffortContentTypeType = new GraphQLObjectType({
  name: 'WorkEffortContentTypeType',
  description: 'Type for WorkEffortContentType in workeffort',

  fields: () => ({
    workEffortContentTypeId: {type: GraphQLString},
    parentType: {
      type: WorkEffortContentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (workEffortContentType, args, {loaders}) => loaders.ofbiz.load(`workEffortContentTypes/find?workEffortContentTypeId=${workEffortContentType.parentTypeId}`)
    },
    description: {type: GraphQLString},
    workEffortContents: {
      type: new GraphQLList(WorkEffortContentType),
      args : {workEffortContentTypeId: {type: GraphQLString}},
      resolve: (workEffortContentType, args, {loaders}) => loaders.ofbizArray.load(`workEffortContents/find?workEffortContentTypeId=${workEffortContentType.workEffortContentTypeId}`)
    },
    workEffortContentTypes: {
      type: new GraphQLList(WorkEffortContentTypeType),
      args : {workEffortContentTypeId: {type: GraphQLString}},
      resolve: (workEffortContentType, args, {loaders}) => loaders.ofbizArray.load(`workEffortContentTypes/find?workEffortContentTypeId=${workEffortContentType.workEffortContentTypeId}`)
    }
  })
});

export {WorkEffortContentTypeType};
    




const WorkEffortContentTypeInputType = new GraphQLInputObjectType({
  name: 'WorkEffortContentTypeInputType',
  description: 'input type for WorkEffortContentType in workeffort',

  fields: () => ({
    workEffortContentTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {WorkEffortContentTypeInputType};
    