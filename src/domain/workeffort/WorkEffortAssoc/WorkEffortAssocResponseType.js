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

const WorkEffortAssocResponseType = new GraphQLObjectType({
  name: 'WorkEffortAssocResponseType',
  description: 'response type for WorkEffortAssoc',

  fields: () => ({
    fromDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString},
    workEffortAssocTypeId: {type: GraphQLString},
    workEffortIdFrom: {type: GraphQLString},
    workEffortIdTo: {type: GraphQLString}
  })
});

export {WorkEffortAssocResponseType};
    