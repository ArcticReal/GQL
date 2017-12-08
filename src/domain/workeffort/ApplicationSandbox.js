
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

import {WorkEffortPartyAssignmentType} from '../workeffort/WorkEffortPartyAssignment.js';


const ApplicationSandboxType = new GraphQLObjectType({
  name: 'ApplicationSandboxType',
  description: 'Type for ApplicationSandbox in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortPartyAssignmentType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (applicationSandbox, args, {loaders}) => loaders.ofbiz.load(`workEffortPartyAssignments/find?workEffortId=${applicationSandbox.workEffortId}`)
    },
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    applicationId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    runtimeDataId: {type: GraphQLString}
  })
});

export {ApplicationSandboxType};
    




const ApplicationSandboxInputType = new GraphQLInputObjectType({
  name: 'ApplicationSandboxInputType',
  description: 'input type for ApplicationSandbox in workeffort',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    applicationId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    runtimeDataId: {type: GraphQLString}
  })
});

export {ApplicationSandboxInputType};
    