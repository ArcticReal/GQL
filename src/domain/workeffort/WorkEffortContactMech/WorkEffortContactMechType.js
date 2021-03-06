
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

import {WorkEffortType} from '../../workeffort/WorkEffort/WorkEffortType.js';
import {ContactMechType} from '../../party/ContactMech/ContactMechType.js';


const WorkEffortContactMechType = new GraphQLObjectType({
  name: 'WorkEffortContactMechType',
  description: 'Type for WorkEffortContactMech in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortContactMech, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${workEffortContactMech.workEffortId}`)
    },
    fromDate: {type: GraphQLString},
    comments: {type: GraphQLString},
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (workEffortContactMech, args, {loaders}) => loaders.ofbiz.load(`party/contactMechs/find?contactMechId=${workEffortContactMech.contactMechId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {WorkEffortContactMechType};
    