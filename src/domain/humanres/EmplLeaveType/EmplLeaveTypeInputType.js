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

const EmplLeaveTypeInputType = new GraphQLInputObjectType({
  name: 'EmplLeaveTypeInputType',
  description: 'input type for EmplLeaveType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    leaveTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString}
  })
});

export {EmplLeaveTypeInputType};
    