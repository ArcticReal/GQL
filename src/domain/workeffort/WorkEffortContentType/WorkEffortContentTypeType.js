
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

import {WorkEffortContentType} from '../../workeffort/WorkEffortContent/WorkEffortContentType.js';


const WorkEffortContentTypeType = new GraphQLObjectType({
  name: 'WorkEffortContentTypeType',
  description: 'Type for WorkEffortContentType in workeffort',

  fields: () => ({
    workEffortContentTypeId: {type: GraphQLString},
    parentType: {
      type: WorkEffortContentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (workEffortContentType, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEffort/workEffortContentTypes/find?workEffortContentTypeId=${workEffortContentType.parentTypeId}`)
    },
    description: {type: GraphQLString},
    workEffortContents: {
      type: new GraphQLList(WorkEffortContentType),
      args : {},
      resolve: (workEffortContentType, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortContents/find?workEffortContentTypeId=${workEffortContentType.workEffortContentTypeId}`)
    },
    workEffortContentTypes: {
      type: new GraphQLList(WorkEffortContentTypeType),
      args : {},
      resolve: (workEffortContentType, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortContentTypes/find?workEffortContentTypeId=${workEffortContentType.workEffortContentTypeId}`)
    }
  })
});

export {WorkEffortContentTypeType};
    