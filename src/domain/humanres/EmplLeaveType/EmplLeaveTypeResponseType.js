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

const EmplLeaveTypeResponseType = new GraphQLObjectType({
  name: 'EmplLeaveTypeResponseType',
  description: 'response type for EmplLeaveType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    leaveTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString}
  })
});

export {EmplLeaveTypeResponseType};
    